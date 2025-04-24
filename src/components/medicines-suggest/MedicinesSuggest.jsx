'use client'

import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { connectToDatabase, collectionName } from '@/lib/dbConnect';

export default async function MedicinesSuggest({ medicines }) {

      const { db } = await connectToDatabase();
      const medicinesCollection = db.collection(collectionName.medicinesCollection);
    
      const medicines = await medicinesCollection.find({}).limit(20).toArray();
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="my-10 overflow-hidden border rounded-lg p-4 bg-white">
      <Slider {...settings}>
        {medicines.map((med, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full h-48">
              <Image
                src={med.image}
                alt={med.name}
                fill
                className="rounded-lg object-cover shadow-md"
              />
            </div>
            <p className="text-center mt-2 font-semibold text-gray-800">
              {med.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}
