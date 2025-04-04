import Hero from "../_components/Hero";
import Service from "../_components/Service";
import FindDoctor from "../_components/FindDoctor";
import Reviews from "../_components/reviews/Reviews";



export default function Home() {
  return (

    <div className="dark:bg-gray-900 bg-white text-black dark:text-white min-h-screen">
      <Hero />
      <FindDoctor />
      <Service />
      <Reviews />
    </div>
  )
}

