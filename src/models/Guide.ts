import { Schema, model, Document } from 'mongoose';

export interface IGuide extends Document {
  subject: string;
  number: number;
  semester: string;
  docent: string;
}

const guideSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  numberLab: {
    type: Number
  },
  semester: {
    type: String,
    required: true
  },
  docent: {
    type: String,
    required: true
  }
});

export default model<IGuide>('Guide', guideSchema);