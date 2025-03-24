import { connectToDatabase } from "@/lib/dbConnect";

import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    try {
        const { db } = await connectToDatabase();
        const doctorsCollection = db.collection("doctors"); // Replace with your collection name

        const { id } = params;
        
        // Validate MongoDB ObjectId
        if (!ObjectId.isValid(id)) {
            return new Response(JSON.stringify({ message: "Invalid doctor ID" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Find doctor by ID
        const doctor = await doctorsCollection.findOne({ _id: new ObjectId(id) });

        if (!doctor) {
            return new Response(JSON.stringify({ message: "Doctor not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify(doctor), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Server Error", error }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
