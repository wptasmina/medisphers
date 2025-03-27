"use client"; 

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";


export default function ReviewsClient({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 px-6 lg:px-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white dark:bg-gray-900 mb-6">
          What People Say About MediSpheres
        </h2>
        <p className="text-gray-600 dark:text-white">
          Our users love the seamless experience and efficient management solutions.
        </p>
      </div>

      <div className="mt-12 gri grid-cols-1">
        <Slider {...settings}>
          {reviews.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No reviews available
            </p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border p-4 my-2 rounded-md shadow-md">
                <ReviewCard review={review} />
              </div>
            ))
          )}
        </Slider>
      </div>
    </section>
  );
}
