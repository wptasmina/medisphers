import { connectToDatabase } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const doctors = await db.collection("doctors").find({}).toArray();

    return Response.json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
