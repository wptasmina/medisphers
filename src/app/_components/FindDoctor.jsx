"use client"; // Next.js Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function FindDoctor() {
    const [query, setQuery] = useState(""); 
    const [category, setCategory] = useState("doctors");
    const router = useRouter(); 

    const handleSearch = () => {
        if (query.trim() !== "") {
            router.push(`/SearchResults?category=${category}&query=${query}`);
        }
    };

    return (
        <div className="w-11/12 mx-auto md:px-4 px-3 my-8">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-center md:text-5xl text-4xl text-black dark:text-white font-extrabold pb-4">
                    Find By<br/> <span className="text-[#022dbb] text-3xl">Doctor's, Patients & Appointments</span>
                </h2>
                <p className="text-center text-md md:w-[800px]">
                    Search for doctors, patients, or appointments using keywords.
                </p>
            </div>

            {/* 🔍 Search Bar with Category Selection */}
            <div className="flex w-full mx-auto max-w-md items-center space-x-2 my-6">
                <select
                    className="border border-gray-300 p-2 rounded-md dark:text-white dark:bg-gray-900"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="doctors">Doctors</option>
                    <option value="patients">Patients</option>
                    <option value="appointments">Appointments</option>
                </select>

                <Input
                    type="text"
                    placeholder={`Search ${category} (e.g., "Dr. John", "Cardiology", "Appointment ID")`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                
                <Button onClick={handleSearch} className="bg-[#022dbb] cursor-pointer dark:text-white">
                    <Search className="h-4 w-4 dark:text-white" /> Search
                </Button>
            </div>
        </div>
    );
}
