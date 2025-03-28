"use client";

import { Quote } from "lucide-react";

export default function ReviewCard({ review }) {
  if (!review) return null;
  console.log(review);


  const { img, name, role, desc, rating } = review;

  return (

    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mx-4">
      <p className=" text-gray-500 dark:text-gray-300 font-bold text-4xl">{rating}/5</p>
      <p className="mt-3 text-gray-700 italic dark:text-gray-300">
        <span className="inline-block rotate-180 text-lg"><Quote /></span> {/* Rotated opening quote */}
        {desc}
        <span className="inline-block"><Quote /></span>
      </p>
      <div className="flex justify-between pt-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        <div>
          <img src={img} alt={name} className="w-16 h-16 rounded-full mb-4" />
        </div>
      </div>
    </div>

  );
}
