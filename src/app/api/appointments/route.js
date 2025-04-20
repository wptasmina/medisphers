import { connectToDatabase } from "@/lib/dbConnect";


export async function GET() {
  try {
    const {db} = await connectToDatabase(); 
    const appointments = await db.collection("appointments").find({}).toArray();

    return new Response(JSON.stringify(appointments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return new Response(JSON.stringify({ message: "Error fetching data" }), { status: 500 });
  }
}
