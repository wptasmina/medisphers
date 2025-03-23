import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function ServiceCard({ item }) {
  const { img, name, year, title, desc } = item;

  // Initialize AOS on the client side
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set default duration
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <Link href="/details">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="p-4 overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all ease-in-out border"
      >
        <img
          alt="image"
          src={img}
          className="h-56 w-full object-cover object-right-top bg-slate-50 rounded-t-xl"
        />

        <div className="bg-white md:px-4 px-2">
          <div className="flex justify-between items-center gap-4 mt-4">
            <p className="bg-blue-50 rounded-full px-4 py-1 text-sm font-normal text-blue-600 shadow-2xl">
              {title}
            </p>
            <p className="bg-blue-50 rounded-full px-4 py-1 text-sm font-normal text-blue-600 shadow-2xl">
              Year: {year}
            </p>
          </div>
          <h3 className="mt-2 text-lg text-gray-900 font-bold">{name}</h3>
          <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
