// app/shop/medicine/[id]/page.jsx
import { connectToDatabase } from "@/lib/dbConnect"
import MidicinesDetails from "@/components/MidicinesDetails"

export default async function MedicineDetailsPage({ params }) {
  const { id } = params

  const db = await connectToDatabase()
  const medicine = await db.collection('medicines').findOne({ _id: new ObjectId(id) })

  // Convert _id to string
  const safeMedicine = { ...medicine, _id: medicine._id.toString() }

  return <MidicinesDetails medicine={safeMedicine} />
}
