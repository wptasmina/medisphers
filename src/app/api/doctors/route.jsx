
// import { connectToDatabase } from "@/lib/dbConnect";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     const { db } = await connectToDatabase();
//     const doctors = await db.collection("doctors").find({}).toArray();

//     return Response.json(doctors);
//   } catch (error) {
//     console.error("Error fetching doctors:", error);
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
//   }
// }

import { connectToDatabase } from '@/lib/dbConnect';

// GET - fetch all doctors
export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const doctors = await db.collection('doctors').find({}).toArray();

    return new Response(JSON.stringify(doctors), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

// POST - create a new doctor
export async function POST(req) {
  try {
    const { db } = await connectToDatabase();
    const body = await req.json();

    const result = await db.collection('doctors').insertOne(body);

    return new Response(JSON.stringify({ success: true, doctorId: result.insertedId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating doctor:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

