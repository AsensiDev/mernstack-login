import express from 'express';
import { createCourse, getCourseWithModules } from '../controllers/courseController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createCourse);
router.get('/:id', authMiddleware, getCourseWithModules);

export default router;
