import mongoose, { Schema, Document } from 'mongoose';

export interface IBreathingSession extends Document {
  userId: string;
  duration: number;  // Duration in seconds
  phases?: Array<{
    name: string;
    duration: number;
  }>;
  completed: boolean;
  createdAt: Date;
}

const BreathingSessionSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  duration: {
    type: Number,
    required: true
  },
  phases: {
    type: [{
      name: String,
      duration: Number
    }],
    default: []
  },
  completed: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

if (process.env.NODE_ENV !== 'production') {
  
}

export default mongoose.models.BreathingSession || 
  mongoose.model<IBreathingSession>('BreathingSession', BreathingSessionSchema);