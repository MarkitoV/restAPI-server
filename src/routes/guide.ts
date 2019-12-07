import { Router } from 'express';
const router: Router = Router();

import {
  getGuide, getGuides, createGuide, deleteGuide, updateGuide
} from '../controllers/guide.controller';

router.route('/guides')
  .get(getGuides)
  .post(createGuide);

router.route('/guides/:id')
  .get(getGuide)
  .delete(deleteGuide)
  .put(updateGuide);

export default router;