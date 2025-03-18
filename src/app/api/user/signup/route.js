import { connectToDatabase } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { photoUrl, firstName, lastName, email, password } = await req.json();

  if (!firstName || !lastName || !email || !password) {
    return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
  }

  const { db } = await connectToDatabase();
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.collection("users").insertOne({ photoUrl, firstName, lastName, email, password: hashedPassword });

  return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
}
