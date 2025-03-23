import { Button } from "@/components/ui/button"
import DoctorSection from "@/components/ui/DoctorSection";
import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Reviews from "./reviews/page";
import FindDoctor from "./_components/FindDoctor";


export default function Home() {
  return (
    
   <div className="dark:bg-gray-900 bg-white text-black dark:text-white min-h-screen">
    <Hero/>
    <FindDoctor />
    <Service/>
    <Reviews/>
    

   </div>
  )
}

