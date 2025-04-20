const { connectToDatabase } = require("@/lib/dbConnect");
const { ObjectId } = require("mongodb");

async function DELETE(req, context) {
  const id = context.params.id;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { db } = await connectToDatabase();
    await db.collection("appointments").deleteOne({ _id: new ObjectId(id) });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

module.exports = { DELETE };
