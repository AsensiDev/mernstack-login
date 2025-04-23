import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // asegúrate de que la ruta sea correcta
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // excluir password

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ user }); // devuelve { name, email, etc }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil' });
  }
});

export default router;
