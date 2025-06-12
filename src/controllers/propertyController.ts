import { NextFunction, Request, Response } from 'express';
import { properties } from '../models/property';

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
    const id = parseInt(req.params.id, 10);
    const propertyIndex = properties.findIndex((i) => i.id === id);
    if (propertyIndex === -1) {
      res.status(404).json({ message: 'Property not found' });
      return;
    }

    // TODO: perform calculation

    let propertyToBid = properties[propertyIndex];
    propertyToBid = { ...req.body };

    // TODO: console.log('Property to bid is now owned by', players[index]);

    res.json(propertyToBid);
  } catch (error) {
    next(error);
  }
};
