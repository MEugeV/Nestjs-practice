import { Schema } from 'mongoose';

//Id se genera automaticamente
export const TaskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean,
});
