"use client";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Quote } from "lucide-react";


export default function ReviewCard({ review }) {
  if (!review) return null;
  const { img, name, role, desc, rating } = review;



  return (

    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mx-4 min-h-[250px] flex flex-col justify-between">
      {/* Rating Section */}
      <div className='flex justify-between items-center'>
        <p className="text-gray-500 dark:text-gray-300 font-bold text-3xl text-center">
          $ {rating}.5
        </p>
        <Rating
          style={{ maxWidth: 80 }}
          value={rating}
          readOnly
        />
      </div>

      {/* Quote & Description */}
      <p className="mt-3 text-gray-700 italic dark:text-gray-300 text-center line-clamp-3">
        <span className="inline-block rotate-180 text-lg"><Quote /></span>
        {desc}
        <span className="inline-block"><Quote /></span>
      </p>

      {/* User Info Section */}
      <div className="flex items-center justify-between pt-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover" />
      </div>
    </div>


  );
}
