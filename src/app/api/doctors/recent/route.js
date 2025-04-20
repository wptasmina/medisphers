import { connectToDatabase } from "@/lib/dbConnect";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Calculate 7 days ago from now
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    // Query for doctors created in the last 7 days
    const count = await db.collection("doctors").countDocuments({
      createdAt: { $gte: lastWeek }
    });

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error counting recent doctors:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500
    });
  }
}
