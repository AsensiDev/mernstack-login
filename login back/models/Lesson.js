import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const lessonSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String }, // Puede ser texto, URL de video, etc.
  order: { type: Number, default: 0 }, // Para ordenar las sesiones dentro del módulo
  module: { type: Schema.Types.ObjectId, ref: 'Module', required: false }
});

export default model('Lesson', lessonSchema);
