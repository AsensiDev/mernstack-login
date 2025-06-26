import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const moduleSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: false },
  sessions: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }]
});

export default model('Module', moduleSchema);
