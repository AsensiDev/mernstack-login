import express from 'express';
import { createModule } from '../controllers/moduleController.js';

const router = express.Router();

router.post('/', createModule);

export default router;
