import { connectToDatabase, collectionName } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'

export async function GET(req, { params }) {
    const p = params
    console.log(p);
    
  const { db } = await connectToDatabase()
  const medicine = await db
    .collection(collectionName.medicinesCollection)
    .findOne({ _id: new ObjectId(params.id) })

  if (!medicine) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 })
  }

  return new Response(JSON.stringify(medicine), { status: 200 })
}
