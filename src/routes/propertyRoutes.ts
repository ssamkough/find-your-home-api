import { Router } from 'express';
import {
  bidProperty,
  getProperties,
  getPropertyById,
} from '../controllers/propertyController';

const router = Router();

router.get('/', getProperties);
router.get('/:id', getPropertyById);
router.put('/:id', bidProperty);

export default router;
