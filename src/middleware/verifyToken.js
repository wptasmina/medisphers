import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Decode the token using JWT secret
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to the request object
    req.user = decodedToken;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
