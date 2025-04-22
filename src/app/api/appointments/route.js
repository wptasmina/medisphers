import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const appointments = await db.collection("appointments").find({}).toArray();

    return new Response(JSON.stringify(appointments), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching appointments", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
