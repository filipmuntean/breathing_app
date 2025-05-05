import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/lib/next-auth";
import mongoose from 'mongoose';
import connectMongo from '@/lib/mongoose';

// Create a schema for breathing sessions if you don't have one already
// You would typically put this in your models directory
const BreathingSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  duration: {
    type: Number,  // duration in seconds
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

// Get the model, making sure it's only created once
const BreathingSession = mongoose.models.BreathingSession || 
  mongoose.model('BreathingSession', BreathingSessionSchema);

// export async function GET() {
//   try {
//     // Check authentication
//     const session = await getServerSession(authOptions);
    
//     if (!session || !session.user) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }
    
//     // Connect to the database
//     await connectMongo();
    
//     // Get user ID
//     const userId = session.user.id;
    
//     // Query for sessions from the last 30 days
//     const thirtyDaysAgo = new Date();
//     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
//     const sessions = await BreathingSession.find({
//       userId: userId,
//       createdAt: { $gte: thirtyDaysAgo }
//     }).sort({ createdAt: -1 }).lean();
    
//     return NextResponse.json({ sessions });
//   } catch (error) {
//     console.error('Error fetching breathing sessions:', error);
//     return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
//   }
// }

export async function GET() {
    try {
      // Check authentication
      const session = await getServerSession(authOptions);
      
      if (!session || !session.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      
      // Connect to the database
      await connectMongo();
      
      // Get user ID
      const userId = session.user.id;
      
      // Query for sessions from the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const sessions = await BreathingSession.find({
        userId: userId,
        createdAt: { $gte: thirtyDaysAgo }
      }).sort({ createdAt: -1 }).lean();
      
      return NextResponse.json({ sessions });
    } catch (error) {
      console.error('Error fetching breathing sessions:', error);
      return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
    }
  }
  
  export async function POST(request: Request) {
    try {
      // Check authentication
      const session = await getServerSession(authOptions);
      
      if (!session || !session.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      
      // Connect to the database
      await connectMongo();
      
      // Get user ID
      const userId = session.user.id;
      
      // Parse request body
      const data = await request.json();
      
      // Create new breathing session
      const breathingSession = new BreathingSession({
        userId: userId,
        duration: data.duration,
        phases: data.phases || [],
        completed: data.completed || true,
        createdAt: new Date()
      });
      
      // Save to database
      await breathingSession.save();
      
      return NextResponse.json({ 
        success: true, 
        message: 'Breathing session saved successfully',
        session: breathingSession
      });
    } catch (error) {
      console.error('Error saving breathing session:', error);
      return NextResponse.json({ 
        error: 'Failed to save breathing session' 
      }, { status: 500 });
    }
  }