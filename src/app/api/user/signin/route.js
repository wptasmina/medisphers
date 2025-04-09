import { connectToDatabase } from "@/lib/dbConnect";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {

  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400 }
    );
  }

  const { db } = await connectToDatabase();
  const existingUser = await db.collection("users").findOne({ email });

  if (!existingUser) {
    return new Response(
      JSON.stringify({ error: "Invalid email or password" }),
      { status: 401 }
    );
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isPasswordCorrect) {
    return new Response(
      JSON.stringify({ error: "Invalid email or password" }),
      { status: 401 }
    );
  }

  // Create a JWT token with role and other user details
  const token = jwt.sign(
    { 
      id: existingUser._id, 
      email: existingUser.email, 
      name: existingUser.firstName, 
      profile: existingUser?.photoUrl || "",
      role: existingUser.role || "user", // Add the role here
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // Token expiry
  );

  return new Response(JSON.stringify({ message: "Login successful", token }), {
    status: 200,
  });
}
