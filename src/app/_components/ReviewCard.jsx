"use client";

export default function ReviewCard({ review }) {
  if (!review) return null;
  console.log(review);
  

  const {img, name, role, desc, rating } = review; 

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <img src={img} alt={name} className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
        <p className="mt-3 text-gray-700 italic dark:text-gray-300">“{desc}”</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">Rating: {rating}/5</p>
    </div>
  );
}
