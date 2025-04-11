import { connectToDatabase } from "@/lib/dbConnect";
import { hash } from "bcryptjs";

export async function POST(req) {
  const { email, newPassword } = await req.json();

  if (!email || !newPassword) {
    return new Response(JSON.stringify({ error: "Email and new password are required" }), {
      status: 400,
    });
  }

  if (newPassword.length < 6) {
    return new Response(JSON.stringify({ error: "Password must be at least 6 characters." }), {
      status: 400,
    });
  }

  try {
    const { db } = await connectToDatabase();
    const collections = ["doctors", "patients", "admins"];

    let user = null;
    let collectionUsed = "";

    for (const name of collections) {
      const found = await db.collection(name).findOne({ email });
      if (found) {
        user = found;
        collectionUsed = name;
        break;
      }
    }

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found." }), { status: 404 });
    }

    const hashedPassword = await hash(newPassword, 10);

    await db.collection(collectionUsed).updateOne(
      { email },
      { $set: { password: hashedPassword } }
    );

    return new Response(JSON.stringify({ message: "Password reset successfully." }), {
      status: 200,
    });
  } catch (error) {
    console.error("Reset password error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), { status: 500 });
  }
}
