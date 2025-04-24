import { verifyToken } from "@/middleware/verifyToken";

export async function GET(req, res) {
  // Call the middleware to check if the token is valid
  verifyToken(req, res, async () => {
    // If the token is valid, proceed with the logic for this route
    const { user } = req; // Decoded user info from the token
    const { role, id } = user;

    // Check user's role to restrict access
    if (role !== "doctor") {
      return res.status(403).json({ error: "Forbidden: You are not authorized" });
    }

    // Continue with the logic if authorized
    return res.status(200).json({ message: "You have access!" });
  });
}


