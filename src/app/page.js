import Hero from "./_components/Hero";
import Banner from "./_components/Banner";
import Service from "./_components/Service";
import Reviews from "./reviews/page";
import FindDoctor from "./_components/FindDoctor";



export default function Home() {
  return (
    
   <div className="dark:bg-gray-900 bg-white text-black dark:text-white min-h-screen">
    {/* <Hero/> */}
    <Banner />
    <FindDoctor />
    <Service/>
    <Reviews/>
    

   </div>
  )
}

