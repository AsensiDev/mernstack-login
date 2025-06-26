import express from 'express';
import { buyCourse } from '../controllers/userController.js';

const router = express.Router();

router.post('/:userId/buy-course', buyCourse);

export default router;
