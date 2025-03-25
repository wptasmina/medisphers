'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import ReviewCard from '../_components/ReviewCard';

// ✅ Custom Left Arrow Component
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-gray-700 text-3xl bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition"
  >
    &lt;
  </button>
);

// ✅ Custom Right Arrow Component
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-gray-700 text-3xl  bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition"
  >
    &gt;
  </button>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // ✅ Custom next arrow
    prevArrow: <PrevArrow />,  // ✅ Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
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
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 px-6 lg:px-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          What People Say About MediSpheres
        </h2>
        <p className="text-gray-600 dark:text-white">
          Our users love the seamless experience and efficient management solutions.
        </p>
      </div>

      {/* ✅ Add relative positioning to place arrows correctly */}
      <div className="mt-12 relative">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
