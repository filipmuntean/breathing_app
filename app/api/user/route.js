import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/next-auth";
import connectMongo from "@/lib/mongoose";
import User from "@/models/User";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.email) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    await connectMongo();
    
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return new NextResponse(JSON.stringify({ error: 'User not found' }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Return the user's breathing sessions
    return new NextResponse(JSON.stringify({ 
      sessions: user.breathingSessions || [] 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching breathing sessions:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// POST handler - save a new breathing session
// export async function POST(req) {
//   try {
//     const session = await getServerSession(authOptions);
    
//     if (!session || !session.user?.email) {
//       return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { 
//         status: 401,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }
    
//     const data = await req.json();
    
//     if (!data.duration || typeof data.duration !== 'number') {
//       return new NextResponse(JSON.stringify({ error: 'Invalid duration' }), { 
//         status: 400,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }
    
//     await connectMongo();
    
//     const user = await User.findOne({ email: session.user.email });
    
//     if (!user) {
//       return new NextResponse(JSON.stringify({ error: 'User not found' }), { 
//         status: 404,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }
    
//     // Add new breathing session
//     const newSession = {
//       duration: data.duration,
//       createdAt: new Date(),
//       phases: data.phases || []
//     };
    
//     // Initialize breathingSessions array if it doesn't exist
//     if (!user.breathingSessions) {
//       user.breathingSessions = [];
//     }
    
//     user.breathingSessions.push(newSession);
//     await user.save();
    
//     return new NextResponse(JSON.stringify({ 
//       success: true,
//       session: newSession 
//     }), { 
//       status: 201,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     console.error('Error saving breathing session:', error);
//     return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { 
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (session) {
    const { id } = session.user;

    const body = await req.json();

    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
      await connectMongo();

      const user = await User.findById(id);

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      user.email = body.email;
      await user.save();

      return NextResponse.json({ data: user }, { status: 200 });
    } catch (e) {
      console.error(e);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  } else {
    // Not Signed in
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}
