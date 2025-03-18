import { Button } from "@/components/ui/button"
import DoctorSection from "@/components/ui/DoctorSection";
import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Reviews from "./reviews/page";


export default function Home() {
  return (
    
   <div className="">
    <Hero/>
    <Service/>
    <Reviews/>
    

   </div>
  )
}

