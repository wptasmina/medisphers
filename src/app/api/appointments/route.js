import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request - Fetch all appointments
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const appointments = await db.collection("appointments").find({}).toArray();
    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle POST request - Create new appointment
export async function POST(request) {
  try {
    const body = await request.json();
    const { db } = await connectToDatabase();
    const result = await db.collection("appointments").insertOne(body);
    return NextResponse.json({ success: true, bookingId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error saving booking" }, { status: 500 });
  }
}
