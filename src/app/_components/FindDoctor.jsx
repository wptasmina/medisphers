import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function FindDoctor() {
    return (
        <div className='w-11/12 mx-auto md:px-4 px-3 my-8'>
            <div className='flex flex-col items-center justify-center '>
                <h2 className='text-center md:text-5xl text-4xl text-black font-extrabold pb-4'>Find By <span className='text-[#022dbb] '>Dortor's</span></h2>
                <p className='text-center text-md md:w-[800px]'>Find By Doctor's is a feature that allows users to search and filter doctors based on specialization, availability, experience, and other criteria. It helps patients quickly find the right doctor for their needs, view profiles, and book appointments seamlessly. 🚑</p>
            </div>

            {/* Search Doctor  */}
            <div className="flex w-full mx-auto max-w-sm items-center space-x-2 my-6">
                <Input type="text" placeholder="Enter the name" className="" />
                <Button type="submit" className="bg-[#022dbb] cursor-pointer">
                    <Search className="h-4 w-4"/> Search
                </Button>
            </div>

        </div>
    )
}
