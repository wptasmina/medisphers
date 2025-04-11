

// import { jwtDecode } from "jwt-decode";

// export const decodeToken = (token) => {
//   try {
//     return jwtDecode(token);
//   } catch (error) {
//     console.error("Token decoding failed:", error);
//     return null;
//   }
// };

// utils/decodeToken.js
import jwt from "jsonwebtoken";

export const decodeToken = (token) => {
  try {
    return jwt.decode(token); // You can use verify if secret is known
  } catch (error) {
    console.error("Failed to decode token:", error);
    // return null;
  }
};
