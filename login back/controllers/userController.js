import User from '../models/User.js';

export const buyCourse = async (req, res) => {
  const { userId } = req.params;
  const { courseId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (!user.courses.includes(courseId)) {
      user.courses.push(courseId);
      await user.save();
    }

    res.json({ message: 'Curso comprado con éxito' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
