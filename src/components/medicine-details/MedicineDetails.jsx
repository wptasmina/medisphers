// components/MidicinesDetails.jsx
import Image from 'next/image'
import MedicinesSuggest from '../medicines-suggest/MedicinesSuggest'

export default function MedicineDetails({ medicine }) {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='grid grid-cols-1 gap-6 items-center'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 items-center bg-white dark:bg-gray-900 p-5 shadow-xl rounded-lg mt-6'>
          <div>
            <Image
              width={400}
              height={500}
              src={medicine?.image || "/assets/med-3.jpg"}
              alt={medicine?.name}
              className='rounded-md h-80 w-full object-cover'
            />
          </div>

          <div>
            <div className='space-y-1'>
              <h4><strong>{medicine?.name}</strong></h4>
              <p className='text-gray-500'>({medicine?.discount || "0%"} Discount)</p>
              <h3 className='text-green-500'><strong>Price: {medicine?.price || "N/A"}</strong></h3>
              <div className='space-y-1'>
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
        <div>
          {/* <MedicinesSuggest /> */}
        </div>
      </div>
    </div>
  )
}
