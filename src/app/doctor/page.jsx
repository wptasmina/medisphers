"use client";

// import Link from "next/link";
import { useEffect, useState } from "react";

const departments = [
    "Cardiology",
    "Pediatrics",
    "General Surgery",
    "Orthopedics",
    "Dermatology",
    "Neurology",
    "Gynecology",
    "Psychiatry",
    "Urology",
    "Ophthalmology",
];

const AllDoctors = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("Cardiology");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/doctors.json")
            .then((response) => response.json())
            .then((data) => {
                setDoctorsData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error fetching doctor data");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner"></div> {/* Add your spinner component here */}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <h1>{error}</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-[#022dbb] mb-8">
                Our MediSphere Specialists
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {/* Fancy Title Card */}
                <div className="container mx-auto p-6 col-span-2 md:col-span-1 border rounded-lg">
                    <div className="flex justify-center gap-4 mb-6 flex-wrap">
                        {departments.map((department, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 ${selectedDepartment === department
                                    ? "bg-[#022dbb] text-white shadow-xl"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                onClick={() => setSelectedDepartment(department)}
                            >
                                {department}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col-span-2 sm:col-span-2 md:col-span-3 flex flex-col">
                    {/* Show Selected Department */}
                    <h2 className="text-3xl font-bold text-start pl-8 text-gray-800 mb-6">
                        {selectedDepartment} Specialists
                    </h2>
                    {/* Doctors Cards */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {doctorsData
                            .filter((doc) => doc.title === selectedDepartment)
                            .map((doctor) => (
                                <div
                                    key={doctor.id}
                                    className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105"
                                >
                                    <img
                                        src={doctor.img}
                                        alt={doctor.name}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                                    <p className="text-blue-600 bg-blue-50 p-1">{doctor.title}</p>
                                    <p
                                        className={`text-sm ${doctor.availability === "Available" ? "text-green-500" : "text-red-500"
                                            }`}
                                    >
                                        {doctor.availability}
                                    </p>
                                    <p className="text-sm text-gray-500">Experience: {doctor.year} years</p>
                                    <p className="text-sm text-gray-700 mt-2">{doctor.desc}</p>
                                    {/* Book Appointment Button */}
                                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                                        {/* <Link href="/doctor" className="inline-flex gap-1 items-center">
                                            <ArrowUpRight />
                                            Book Appointment
                                        </Link> */}
                                        Book Appointment
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDoctors;
