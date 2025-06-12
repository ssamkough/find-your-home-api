import { Router } from 'express';
import {
  createPlayer,
  getPlayerById,
  getPlayers,
} from '../controllers/playerController';

const router = Router();

router.get('/', getPlayers);
router.get('/:id', getPlayerById);
router.post('/', createPlayer);

export default router;
