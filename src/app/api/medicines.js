// // pages/api/medicines.js
// import { connectToDatabase, collectionName } from "@/lib/dbConnect";

// export default async function handler(req, res) {
//   try {
//     const { db } = await connectToDatabase();
//     const medicines = await db.collection(collectionName.medicinesCollection)
//       .find()
//       .limit(20)
//       .toArray();
//     res.status(200).json(medicines);
//   } catch (error) {
//     console.error("Database error:", error);
//     res.status(500).json({ error: "Database error" });
//   }
// }
