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
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 px-6 lg:px-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          What People Say About MediSpheres
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Our users love the seamless experience and efficient management solutions.
        </p>
      </div>

      <div className="mt-12 slider-container">
        <Slider {...settings}>
          {reviews.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No reviews available
            </p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="px-2">
                <div className="border rounded-md shadow-md py-4  dark:bg-gray-950">
                  <ReviewCard review={review} />
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    </section>
  );
}
