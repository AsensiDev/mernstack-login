import express from 'express';
import { createLesson } from '../controllers/lessonController.js';

const router = express.Router();

router.post('/', createLesson);

export default router;
