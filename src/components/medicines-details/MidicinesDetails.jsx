import Image from 'next/image'
import React from 'react'
import MedicinesSuggest from '../medicines-suggest/MedicinesSuggest'

export default function MidicinesDetails() {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='grid grid-cols-1 gap-6 items-center'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 items-center bg-white p-5 shadow-xl rounded-lg mt-6'>
          {/* Image  */}
          <div className=''>
            <Image
              width={400}
              height={500}
              src="/assets/med-3.jpg" alt="medicine"
              className='rounded-md h-80 w-full object-cover'
            />
          </div>

          {/* side-Text  */}
          <div className=''>
            <div className='space-y-1'>
              <h4 className=''><strong>PARACETAMOL</strong></h4>
              <p className='text-gray-500'>(10% Discount)</p>
              <h3 className='text-green-500'><strong>Price: 2 GO</strong></h3>
              <div className='space-y-1'>
                <p><strong>Availability:</strong> In Stock</p>
                <p><strong>Product code:</strong> MeD001</p>
                <p><strong>Brand:</strong></p>
                <p><strong>Company Email:</strong></p>
                <p><strong>Mobile:</strong></p>
                <p><strong>MedicineID:</strong></p>
                <p><strong>Expiry Date:</strong></p>
                <p><strong>Manufacture Address:</strong></p>
                <p><strong>Current Location:</strong></p>
                <p><strong>Manufacturer:</strong></p>
              </div>
            </div>

          </div>
        </div>
        <div>
          <MedicinesSuggest />
        </div>
      </div>
    </div>
  )
}
