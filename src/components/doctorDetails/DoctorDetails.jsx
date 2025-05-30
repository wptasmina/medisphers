"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import BookingModal from "../bookingModal/BookingModal";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";



export default function DoctorDetails() {
  const { id } = useParams();
  console.log(id)
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = { name: "medishpere", email: "medishpere@gmail.com" };

  useEffect(() => {
    async function fetchDoctorDetails() {
      try {
        const response = await fetch(`/api/doctors/${id}`);
        const data = await response.json();
        console.log(data)
        setDoctor(data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        setError("Error fetching doctor details");
      } finally {
        setLoading(false);
      }
    }

    fetchDoctorDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <motion.div
        className="w-full p-2 lg:max-w-4xl mx-auto lg:p-6 pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="px-2 pb-4 shadow-lg rounded-2xl lg:p-6 lg:mt-20 md:my-8 my-4">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <Image
              src={doctor?.photo}
              alt={doctor?.name}
              width={120}
              height={120}
              className="rounded-full border shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold">{doctor?.name}</h2>
              <p className="text-gray-600">{doctor?.doctor_id}</p>

              <p className={`text-sm ${doctor.availableStatus ? "text-green-500" : "text-red-500"}`}>
                {doctor.availableStatus ? "Available" : "Unavailable"}
              </p>

            </div>
          </div>

          <CardContent className="mt-4">
            <h3 className="text-md font-semibold mb-2 dark:text-gray-400">Specialist</h3>
            <p className="text-gray-600 mb-2 dark:text-gray-400">{doctor.speciality}</p>
            <hr />
            <p className="text-gray-700 my-4 dark:text-gray-400">{doctor.about}</p>
            <hr />

            <p className="flex items-center gap-2  text-gray-700 my-4 dark:text-gray-400">
              <MdLocalPhone className="font-semibold text-[#022dbb]" />
              {doctor.contact.phone}
            </p>

            <p className="flex items-center gap-2  text-gray-700 mb-4 dark:text-gray-400">
              <MdEmail className="font-semibold text-[#022dbb]" />
              {doctor.contact.email}
            </p>

            <p className="flex items-center gap-2  text-gray-700 mb-4 dark:text-gray-400">
              <FaAddressBook className="font-semibold text-[#022dbb]" />
              {doctor.contact.chamberAddress}
            </p>
            <hr />
            <h3 className="text-md font-semibold mt-4">Work Experience</h3>
            {doctor.workExperience.map((exp, index) => (
              <div key={index} className="my-6">
                <p className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-400">
                  <FaUserDoctor className="text-2xl mr-4 text-[#022dbb]" />
                  {exp.position}
                </p>
                <h6 className="ml-10 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {exp.hospital}
                </h6>
                <h6 className="ml-10 text-sm text-gray-600 dark:text-gray-300">{exp.years}</h6>
              </div>
            ))}
            <hr />
            <h3 className="text-md font-semibold mt-4">Education</h3>

            {doctor.educations.map((edu, index) => (
              <div key={index} className="my-6">
                <p className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-400">
                  <FaUserGraduate className="text-2xl mr-4 text-[#022dbb]" />
                  {edu.degree}
                </p>
                <h6 className="ml-10 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {edu.university}
                </h6>
                <h6 className="ml-10 text-sm text-gray-600 dark:text-gray-300">{edu.year}</h6>
              </div>
            ))}
            <hr />
            <h3 className="text-md font-semibold my-6">Appointments</h3>

            <ul className="list-none p-0 lg:pl-4">
              {Object.entries(doctor.appointmentTime).map(
                ([day, time]) => (
                  <li
                    key={day}
                    className="text-xs flex items-center gap-2 lg:w-[300px] lg:text-base hover:bg-green-50 px-4 py-2  rounded-lg mb-2"
                  >
                    <RiCalendarScheduleLine /> <strong>{day} </strong> {time}
                  </li>
                )
              )}
            </ul>
            <Button
              className="mt-6 w-full bg-[#022dbb] dark:text-gray-200 dark:hover:text-gray-800 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Book an Appointment
            </Button>
          </CardContent>
        </Card>
      </motion.div>
      <BookingModal
        doctor={doctor}
        user={user}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
