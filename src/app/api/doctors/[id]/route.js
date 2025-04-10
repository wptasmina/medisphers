// import { connectToDatabase } from "@/lib/dbConnect";

// import { ObjectId } from "mongodb";

// export async function GET(request, { params }) {
//     try {
//         const { db } = await connectToDatabase();
//         const doctorsCollection = db.collection("doctors"); // Replace with your collection name

//         const { id } = params;
        
//         // Validate MongoDB ObjectId
//         if (!ObjectId.isValid(id)) {
//             return new Response(JSON.stringify({ message: "Invalid doctor ID" }), {
//                 status: 400,
//                 headers: { "Content-Type": "application/json" },
//             });
//         }

//         // Find doctor by ID
//         const doctor = await doctorsCollection.findOne({ _id: new ObjectId(id) });

//         if (!doctor) {
//             return new Response(JSON.stringify({ message: "Doctor not found" }), {
//                 status: 404,
//                 headers: { "Content-Type": "application/json" },
//             });
//         }

//         return new Response(JSON.stringify(doctor), {
//             status: 200,
//             headers: { "Content-Type": "application/json" },
//         });

//     } catch (error) {
//         return new Response(JSON.stringify({ message: "Server Error", error }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }


import { connectToDatabase } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

// GET /api/doctors/[id]
export async function GET(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Invalid doctor ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const doctor = await db.collection("doctors").findOne({ _id: new ObjectId(id) });

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
    return new Response(JSON.stringify({ message: "Server Error", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// PUT /api/doctors/[id]
export async function PUT(req, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { id } = params;
    const body = await req.json();

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Invalid doctor ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await db.collection('doctors').updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "Doctor not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Update failed', detail: error.message }), {
      status: 500,
    });
  }
}
