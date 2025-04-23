import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const appointments = await db.collection("appointments").find({}).toArray();
    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
