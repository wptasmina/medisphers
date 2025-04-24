"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { useEffect, useState } from "react";

const departments = [
  "Cardiology",
  "Pediatrics",
  "Nephrology",
  "Orthopedics",
  "Dermatology",
  "Neurology",
  "Gastroenterology",
  "Psychiatry",
  "Oncology",
  "Ophthalmology",
];

const AllDoctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("Cardiology");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await fetch("../api/doctors");
        const data = await response.json();
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setError("Error fetching doctor data");
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner">
          <span className="loading loading-bars loading-xl"></span>
        </div>
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
    <div className="w-11/12 mx-auto py-28">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text  bg-[#022dbb] mb-8">
        Our MediSphere Specialists
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Fancy Title Card */}
        <div className="container mx-auto p-6 col-span-2 md:col-span-1 dark:bg-gray-900  border rounded-lg">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {departments.map((department, index) => (
              <button
                key={index}
                className={`px-6 py-3 w-full rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 ${selectedDepartment === department
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
          <h2 className="md:text-3xl text-xl font-bold text-start md:pl-8 text-gray-800 dark:text-white mb-6">
            {selectedDepartment} Specialists
          </h2>
          {/* Doctors Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctorsData
              .filter((doc) => doc.department === selectedDepartment)
              .map((doctor) => (
                <div
                  key={doctor._id}
                  className="bg-blue-50 md:aspect-[4/3] space-y-2 border rounded-lg p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="aspect-[4/3] w-full rounded-md overflow-hidden bg-slate-200">
                    <img
                      src={doctor?.photo || "/default-profile.png"}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-gray-800 pb-2">{doctor?.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600 border border-gray-200 bg-blue-50 rounded-full px-2 py-1">
                      {doctor?.department}
                    </p>
                    <p className="text-sm text-gray-500 border border-gray-200 bg-blue-50 rounded-full px-2 py-1">
                      Years: {doctor?.workExperienceYears}
                    </p>
                  </div>
                  <p
                    className={`text-sm ${doctor.availableStatus === true
                        ? "text-green-500"
                        : "text-red-500"
                      }`}
                  >
                    {doctor?.availableStatus}
                  </p>
                  <p className="text-sm text-gray-500">
                    Age: {doctor.age}
                  </p>

                  <p className="text-sm text-gray-700 mt-2">{doctor?.contact?.chamberAddress}</p>
                  {/* Book Appointment Button */}
                  <Link href={`/doctors/${doctor._id}`}>
                    <Button className="mt-4 w-full bg-[#022dbb] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer ">
                      Book Appointment<ArrowUpRight />
                    </Button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
