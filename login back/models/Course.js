import mongoose from 'mongoose'
import { Schema } from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [{ type: Schema.Types.ObjectId, ref: 'Module', default: [] }]
});

const Course = mongoose.model('Course', courseSchema)
export default Course;

