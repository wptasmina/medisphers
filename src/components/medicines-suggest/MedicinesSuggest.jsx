// // src/components/medicines-shop/MedicinesSuggest.jsx
// 'use client'

// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// export default function MedicinesSuggest({ medicines }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   }

//   return (
//     <div className="my-10 overflow-hidden border">
//       <Slider {...settings}>
//         {medicines.map((med, index) => (
//           <div key={index} className="p-4">
//             <img
//               src={med.image}
//               alt={med.name}
//               className="rounded-lg w-full h-48 object-cover shadow-md"
//             />
//             <p className="text-center mt-2 font-semibold">{med.name}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }
