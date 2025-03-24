import { connectToDatabase } from "@/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        const { db } = await connectToDatabase();
        const url = new URL(req.url);

        const category = url.searchParams.get("category") || "doctors";
        const query = url.searchParams.get("query") || "";


        const allowedCollections = ["doctors", "patients", "appointments"];
        if (!allowedCollections.includes(category)) {
            return NextResponse.json({ error: "Invalid category" }, { status: 400 });
        }

        console.log(`Searching in collection: ${category} with query: "${query}"`);

 
        const results = await db.collection(category)
            .find({ name: { $regex: query, $options: "i" } })
            .toArray();

        console.log(`Found ${results.length} results`, results); 

        return NextResponse.json(results);
    } catch (error) {
        console.error(" API Error:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
