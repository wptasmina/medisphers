"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { SquarePen, Trash2, Slack, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const DashboardAllDoctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 5;

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await fetch("/api/doctors");
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

  // deleteDoctor 
  const deleteDoctor = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this doctor?");
    if (!confirmDelete) return;
  
    try {
      const res = await fetch(`/api/doctors/${id}`, {
        method: "DELETE",
      });
  
      if (!res.ok) throw new Error("Failed to delete doctor");
  
      // Filter out the deleted doctor from the UI
      setDoctorsData((prev) => prev.filter((doctor) => doctor._id !== id));
    } catch (err) {
      console.error("Error deleting doctor:", err);
      alert("Failed to delete doctor");
    }
  };

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#022dbb]">
        <Slack className="w-10 h-10 animate-spin mb-4" />
        <p className="text-sm">Loading all-doctors...</p>
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
    <div className="w-11/12 mx-auto max-w-screen-xl py-4">
      <h1 className="text-3xl font-bold text-center text-[#022dbb] mb-6">
        All Doctors
      </h1>

      <div className="overflow-x-auto rounded-md shadow-md bg-white">
        <table className="min-w-full">
          <thead className="bg-[#022dbb] rounded-t-lg text-white text-sm">
            <tr>
              <th className="px-4 py-2 text-left">Doctor</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Specialist</th>
              <th className="px-4 py-2 text-left">Degree</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              {/* <th className="px-4 py-2 text-left">Social Media</th> */}
              <th className="px-4 py-2 text-left">Joining Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {currentDoctors.map((doctor) => (
              <tr key={doctor._id} className="border-t hover:bg-blue-50">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                      <img
                        src={doctor?.photo || "/default-profile.png"}
                        alt={doctor?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-semibold">{doctor?.name}</div>
                  </div>

                </td>
                <td className="px-4 py-2">{doctor?.department}</td>
                <td className="px-4 py-2">{doctor?.speciality}</td>
                <td className="px-4 py-2">
                  {doctor.educations.map((edu, index) => (
                    <div key={index}>
                      <p className="dark:text-gray-400">{edu.degree}</p>
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2">{doctor?.contact?.email}</td>
                <td className="px-4 py-2">{doctor?.contact?.phone}</td>
                {/* <td className="px-4 py-2">
                  <a
                    href={doctor?.contact?.socialMedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                  <div className="flex items-center">
                  <Facebook />
                   <Twitter />
                   <Linkedin />
                  </div>
                  </a>
                </td> */}
                <td className="px-4 py-2">{doctor?.joiningDate?.slice(0, 10)}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/doctor/edit-doctor/${doctor._id}`}>
                      <div className="text-[#022dbb] cursor-pointer dark:text-[#022dbb]">
                        <SquarePen className="w-4 h-4" />
                      </div>
                    </Link>
                    <div onClick={() => deleteDoctor(doctor._id)} className="text-red-500 cursor-pointer dark:text-red-500 ">
                      <Trash2 className="w-4 h-4" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default DashboardAllDoctors;
