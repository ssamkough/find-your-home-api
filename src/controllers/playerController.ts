import { NextFunction, Request, Response } from 'express';
import { players, type Player } from '../models/player';

/**
 * Create a player.
 * @param req Incoming request
 * @param res Outgoing response
 * @param next Next function
 */
export const createPlayer = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (players.length === 4) {
    const message = 'Max amount of players!';
    console.log(message);
    res.status(500).json({ message });
  }
  try {
    const { name } = req.body;
    const newPlayer: Player = {
      id: players.length + 1,
      created_at: new Date(),
      name,
      is_ai: false,
      money: 1000,
    };
    players.push(newPlayer);
    console.log('New player created:', newPlayer);
    res.status(201).json(newPlayer);
  } catch (error) {
    next(error);
  }
};

/**
 * Read all players.
 * @param req Incoming request
 * @param res Outgoing response
 * @param next Next function
 */
export const getPlayers = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('List of all the players:', players);
    res.json(players);
  } catch (error) {
    next(error);
  }
};

/**
 * Reads a single player.
 * @param req Incoming request
 * @param res Outgoing response
 * @param next Next function
 */
export const getPlayerById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const player = players.find((i) => i.id === id);
    if (!player) {
      console.log(`Player not found`);
      res.status(404).json({ message: 'Player not found' });
      return;
    }
    console.log(`Player with ID of ${id}:`, player);
    res.json(player);
  } catch (error) {
    next(error);
  }
};
