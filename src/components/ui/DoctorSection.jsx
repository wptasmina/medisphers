"use client";  // Ensures this runs on the client side

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "https://i.ibb.co.com/ZzdxCCQs/Taylor-R-AUG2021-scaled-e1630682247409.jpg",
    visitingTime: "Mon - Fri (9:00 AM - 5:00 PM)",
    fee: "$150",
  },
  {
    id: 2,
    name: "Dr. Sarah Lee",
    specialty: "Dermatologist",
    image: "https://i.ibb.co.com/rR1VD96t/dr-sarah-lee.jpg",
    visitingTime: "Tue, Thu, Sat (10:00 AM - 4:00 PM)",
    fee: "$120",
  },
  {
    id: 3,
    name: "Dr. Michael Smith",
    specialty: "Orthopedic Surgeon",
    image: "https://i.ibb.co.com/ZzdxCCQs/Taylor-R-AUG2021-scaled-e1630682247409.jpg",
    visitingTime: "Mon - Fri (8:00 AM - 3:00 PM)",
    fee: "$180",
  },
  {
    id: 4,
    name: "Dr. Emily Carter",
    specialty: "Neurologist",
    image: "https://i.ibb.co.com/rR1VD96t/dr-sarah-lee.jpg",
    visitingTime: "Mon - Wed (9:00 AM - 6:00 PM)",
    fee: "$200",
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    specialty: "Pediatrician",
    image: "https://i.ibb.co.com/ZzdxCCQs/Taylor-R-AUG2021-scaled-e1630682247409.jpg",
    visitingTime: "Mon - Sat (10:00 AM - 5:00 PM)",
    fee: "$100",
  },
  {
    id: 6,
    name: "Dr. Olivia Brown",
    specialty: "Gynecologist", 
    image: "https://i.ibb.co.com/rR1VD96t/dr-sarah-lee.jpg",
    visitingTime: "Mon - Fri (9:00 AM - 7:00 PM)",
    fee: "$140",
  },
  {
    id: 7,
    name: "Dr. Robert Taylor",
    specialty: "General Surgeon",
    image: "https://i.ibb.co.com/ZzdxCCQs/Taylor-R-AUG2021-scaled-e1630682247409.jpg",
    visitingTime: "Mon - Thu (8:00 AM - 2:00 PM)",
    fee: "$220",
  },
  {
    id: 8,
    name: "Dr. Lisa Adams",
    specialty: "Endocrinologist",
    image: "https://i.ibb.co.com/rR1VD96t/dr-sarah-lee.jpg",
    visitingTime: "Tue - Fri (9:30 AM - 5:30 PM)",
    fee: "$160",
  },
];

const DoctorSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 doctors at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-11 bg-fuchsia-400 text-white">
      <div className="container w-11/12 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Meet Our Experts</h2>
        <p className="text-xl mb-6 opacity-80">
          Skilled specialists ready to provide you with the best care.
        </p>

        <div className="mt-8">
          <Slider {...settings}>
            {doctors.map((doctor) => (
              <div key={doctor.id} className="p-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative w-32 h-32 mx-auto">
                    <img
                    src={doctor.image}
                    alt={doctor.name}
                    width={128}
                    height={128}
                    className="rounded-full w-full h-full object-cover border-4 border-primary mb-4"
                    />
                    {/* <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover border-4 border-primary mb-4"
                    /> */}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {doctor.name}
                  </h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{doctor.visitingTime}</p>
                  <p className="text-primary font-semibold text-xl mt-3">{doctor.fee}</p>
                  <button className="btn btn-primary w-full btn-wide mt-4 transition-all hover:bg-primary-dark">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
