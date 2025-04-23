'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function MedicinesSuggest() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  const images = [
    "https://i.ibb.co/KvCKv49/dr-ne.png",
    "https://i.ibb.co/0Gppyr6/doctor2.png",
    "https://i.ibb.co/vXzvw9h/doctor3.png",
    "https://i.ibb.co/ZVN1RJz/doctor4.png",
    "https://i.ibb.co/Ch8Xx2n/doctor5.png",
    "https://i.ibb.co/0r7V06p/doctor6.png"
  ]

  return (
    <div className="w-10/12 mx-auto py-8 overflow-hidden bg-pink-600 my-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-4">
            <img
              src={src}
              alt={`Medicine ${index + 1}`}
              className="rounded-lg w-20 h-20 object-cover shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
