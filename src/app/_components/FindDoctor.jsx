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
        <div className="dark:bg-gray-950 py-6">
            <div className="w-11/12 mx-auto mt-8">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center md:text-5xl text-4xl text-black dark:text-white font-extrabold pb-4">
                        Find By<br /> <span className="text-[#022dbb] text-3xl">Doctor's, Patients & Appointments</span>
                    </h2>
                    <p className="text-center text-md md:w-[800px] text-gray-500 dark:text-gray-300">
                        Search for doctors, patients, or appointments using keywords.🔍
                    </p>
                </div>

                {/* 🔍 Search Bar with Category Selection */}
                <div className="flex sm:flex-row flex-col gap-4 md:gap-2 w-full mx-auto max-w-md md:items-center space-x-2 my-6">
                    <select
                        className="border border-gray-300 p-2 rounded-md dark:text-white dark:bg-gray-900"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="doctors">Doctors</option>
                        <option value="patients">Patients</option>
                        <option value="appointments">Appointments</option>
                    </select>

                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            placeholder={`Search ${category} (e.g., "Name", "Cardiology", "Appointment ID")`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <Button onClick={handleSearch} className="bg-[#022dbb] hover:bg-blue-700 cursor-pointer dark:text-white">
                            <Search className="h-4 w-4 dark:text-white" /> Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
