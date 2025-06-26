import Course from '../models/Course.js';
import User from '../models/User.js';

export const createCourse = async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      console.log('Curso guardado:', course); // <-- Esto te ayuda a ver si realmente se guardó
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

export const getCourseWithModules = async (req, res) => {
  try {
    // Obtener el usuario autenticado
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }
    // Verificar si el usuario tiene acceso al curso
    if (!user.courses.includes(req.params.id)) {
      return res.status(403).json({ error: 'No tienes acceso a este curso' });
    }

    const course = await Course.findById(req.params.id)
      .populate({
        path: 'modules',
        populate: { path: 'sessions' }
      });

    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
