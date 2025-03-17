import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        const users = await dbConnect("user").find().toArray(); 
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}