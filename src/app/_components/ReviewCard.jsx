'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ name, role, review, rating, img }) => {
  // Ensure rating is a valid number between 0 and 5
  const safeRating = Number.isInteger(rating) && rating >= 0 && rating <= 5 ? rating : 0;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-sm flex flex-col items-center text-center border border-gray-200">
      <img src={img} alt={name} className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
      <p className="mt-3 text-gray-700 italic">“{review}”</p>
      <div className="flex mt-4 text-yellow-500">
        {[...Array(safeRating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewCard;
