"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"

export default function MedicineDetails() {
  const { id } = useParams()
  const [medicine, setMedicine] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const res = await fetch(`/api/medicines/${id}`)
        if (!res.ok) throw new Error("Not found")
        const data = await res.json()
        setMedicine(data)
      } catch (error) {
        console.error("Error loading medicine", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMedicine()
  }, [id])

  if (loading) return <div className="text-center p-6">Loading...</div>
  if (!medicine) return <div className="text-center text-3xl p-6 text-red-500">Medicine not found</div>

  return (
    <div className="w-11/12 mx-auto p-6">
            <div className='grid grid-cols-1 gap-6 items-center'>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="w-full aspect-[4/3] relative">
          <Image src={medicine.image} alt={medicine.name} fill className="object-cover rounded" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{medicine?.name}</h2>
          <p className="text-lg text-green-700 font-semibold mb-1">
            Price: <span className="line-through mr-2 text-red-400">{medicine?.discount || "0%"}</span>
            {medicine.price}
          </p>
          <p><strong>Availability:</strong> {medicine?.inStock ? "In Stock" : "Out of Stock"}</p>
          <p><strong>Product code:</strong> {medicine?.code}</p>
          <p><strong>Brand:</strong> {medicine?.brand}</p>
          <p><strong>Company Email:</strong> {medicine?.email}</p>
          <p><strong>Mobile:</strong> {medicine?.mobile}</p>
          <p><strong>MedicineID:</strong> {medicine?.medicineID}</p>
          <p><strong>Expiry Date:</strong> {medicine?.expiryDate}</p>
          <p><strong>Manufacture Address:</strong> {medicine?.manufactureAddress}</p>
          <p><strong>Current Location:</strong> {medicine?.location}</p>
          <p><strong>Manufacturer:</strong> {medicine?.manufacturer}</p>
        </div>
      </div>
      
    </div>
    </div>
  )
}
