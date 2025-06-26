import Module from '../models/Module.js';

export const createModule = async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
