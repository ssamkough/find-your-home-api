import { NextFunction, Request, Response } from 'express';
import { players } from '../models/player';
import { properties } from '../models/property';
import { getBid } from '../services/propertyService';

/**
 * Read all properties.
 * @param req Incoming request
 * @param res Outgoing response
 * @param next Next function
 */
export const getProperties = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.query.is_owner) {
      const filteredProperties = properties.filter(
        (property) => property.owner_id,
      );
      console.log('List of all properties with an owner:', filteredProperties);
      res.json(filteredProperties);
      return;
    }
    console.log('List of all properties:', properties);
    res.json(properties);
  } catch (error) {
    next(error);
  }
};

/**
 * Read single property.
 * @param req Incoming request
 * @param res Outgoing response
 * @param next Next function
 */
export const getPropertyById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const property = properties.find((i) => i.id === id);
    if (!property) {
      res.status(404).json({ message: 'Property not found' });
      return;
    }
    console.log(`Property with ID of ${id}:`, property);
    res.json(property);
  } catch (error) {
    next(error);
  }
};

/**
 * Bids on a property.
 * @param req Incoming request
 * @param res Outgoing response
 * @param next Next function
 */
export const bidProperty = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Check to see if any properties are left that don't have an owner_id
    if (!properties.some((property) => !property?.owner_id)) {
      const message =
        'All properties have an owner. There are no more properties that are biddable!';
      console.log(message);
      res.status(404).json({ message });
      return;
    }

    const id = parseInt(req.params.id, 10);
    const propertyIndex = properties.findIndex((i) => i.id === id);
    if (propertyIndex === -1) {
      const message = 'Property not found';
      console.log(message);
      res.status(404).json({ message });
      return;
    }
    const propertyToBid = properties[propertyIndex];

    // Check if property already has owner
    if (propertyToBid?.owner_id) {
      const owner = players.find(({ id }) => id === propertyToBid.owner_id);
      const message = `Property ${propertyToBid.name} is already owned${owner ? ` by ${owner.name}` : ''}. Bid another property!`;
      console.log(message);
      res.status(404).json({ message });
      return;
    }

    const myPlayer = players.find(({ id }) => id === 4);
    if (!myPlayer) {
      const message = 'My player not found. Did you create a player yet?';
      console.log(message);
      res.status(404).json({ message });
      return;
    }

    // Check to see if my bid exceeds how much money I have
    const me = players[3];
    if (req.body.bid_amount > me.money) {
      const message =
        'Your bid cannot exceed the amount of money you have. Try again!';
      console.log(message);
      res.status(404).json({ message });
      return;
    }
    const myBid = {
      player: me,
      bid: req.body.bid_amount as number,
    };

    // Gather AI bids
    const gamer = players[0];
    const gamerBid = {
      player: gamer,
      bid: getBid(
        gamer.money,
        propertyToBid.name.includes('Princess Peace') ||
          propertyToBid.name.includes('Hyrule') ||
          propertyToBid.name.includes('Pallet Town') ||
          propertyToBid.name.includes('Luigi') ||
          propertyToBid.name.includes('Stardew Valley'),
      ),
    };

    const lex = players[1];
    const numberOfVowels = propertyToBid.name.match(/[aeiou]/gi);
    const lexBid = {
      player: lex,
      bid: getBid(
        lex.money,
        numberOfVowels === null ? false : numberOfVowels.length >= 3,
      ),
    };

    const bigMan = players[2];
    const bigManBid = {
      player: bigMan,
      bid: getBid(
        bigMan.money,
        propertyToBid.name.includes('Castle') ||
          propertyToBid.name.includes('Mansion'),
      ),
    };

    const bids = [gamerBid, lexBid, bigManBid, myBid];

    // Calculate who has the highest bid
    let winningBid = Math.max(...bids.map(({ bid }) => bid));

    // Find the winner
    const filteredBids = bids.filter(({ bid }) => winningBid === bid);

    // If there was two of the same bids try again
    if (filteredBids.length > 1) {
      const message = 'There was a tie. Try again!';
      console.log(message);
      res.status(404).json({ message });
      return;
    } else if (filteredBids.length === 0) {
      const message = 'Error with finding the winner. Try again!';
      console.log(message);
      res.status(404).json({ message });
      return;
    }

    const winner = filteredBids[0];
    const winnerId = winner.player.id;
    const winnerIndex = players.findIndex(({ id }) => winnerId === id);

    // Subtract the winner's money
    players[winnerIndex].money -= winningBid;

    // Update property with new owner ID
    properties[propertyIndex].owner_id = winnerId;

    console.log(
      `Property "${properties[propertyIndex].name}" has been won by ${winner.player.name} with a bid amount of ${winningBid}!`,
    );
    res.json(properties[propertyIndex]);
  } catch (error) {
    next(error);
  }
};
