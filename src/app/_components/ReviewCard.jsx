"use client";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Quote } from "lucide-react";


export default function ReviewCard({ review }) {
  if (!review) return null;
  const { img, name, role, desc, rating } = review;



  return (

    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mx-4 flex flex-col justify-between flex-grow min-h-[250px] h-full">

    {/* Rating Section */}
    <div className='flex justify-between items-center'>
      <p className="text-gray-500 dark:text-gray-300 font-bold md:text-2xl text-lg text-center">
        $ {rating}.5
      </p>
      <Rating
        style={{ maxWidth: 80 }}
        value={rating}
        readOnly
      />
    </div>

    {/* Quote & Description */}
    <p className="text-gray-700 italic dark:text-gray-300 line-clamp-3 ">
      <span className="inline-block rotate-180 text-lg"><Quote /></span>
      {desc}
      <span className="inline-block"><Quote /></span>
    </p>

    {/* User Info Section */}
    <div className="flex items-center justify-between gap-1 pt-4">
      <div>
        <h3 className="md:text-lg text-sm font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
      <img src={img} alt={name} className="md:w-14 w-10 md:h-14 h-10 rounded-full object-cover" />
    </div>
  </div>

  );
}
