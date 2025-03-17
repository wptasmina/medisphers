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

//dummy data
const doctorProfile = {
  id: "DOC12345",
  name: "Dr. Aryan Mehta",
  availableStatus: true,
  speciality: "Cardiologist",
  about:
    "Dr. Aryan Mehta is a highly experienced cardiologist with over 15 years of practice in treating heart-related ailments. He is known for his patient-centric approach and dedication to excellence.",
  contact: {
    phone: "+91-9876543210",
    email: "dr.aryanmehta@example.com",
    chamberAddress: "Heart Care Clinic, 123 MG Road, Mumbai, India",
  },
  appointmentTime: {
    Monday: "10:00 AM - 2:00 PM",
    Wednesday: "2:00 PM - 6:00 PM",
    Friday: "10:00 AM - 2:00 PM",
  },
  workExperience: [
    {
      hospital: "Apollo Hospital, Mumbai",
      position: "Senior Cardiologist",
      years: "2015 - Present",
    },
    {
      hospital: "Fortis Hospital, Delhi",
      position: "Cardiologist",
      years: "2010 - 2015",
    },
  ],
  educations: [
    {
      degree: "MBBS",
      university: "AIIMS, Delhi",
      year: "2005",
    },
    {
      degree: "MD in Cardiology",
      university: "AIIMS, Delhi",
      year: "2010",
    },
  ],
  photo: "https://i.ibb.co/gZFyDRCv/dr-10.png",
};

export default function DoctorDetails() {
  return (
    <motion.div
      className="w-full p-2 lg:max-w-4xl mx-auto lg:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="px-2 pb-4 shadow-lg rounded-2xl lg:p-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <Image
            src={doctorProfile.photo}
            alt={doctorProfile.name}
            width={120}
            height={120}
            className="rounded-full border shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold">{doctorProfile.name}</h2>
            <p className="text-gray-600">{doctorProfile.id}</p>
            <p className="text-sm text-green-600">
              {doctorProfile.availableStatus ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>

        <CardContent className="mt-4">
          <h3 className="text-md font-semibold mb-2">Specialist</h3>
          <p className="text-gray-600 mb-2">{doctorProfile.speciality}</p>
          <hr />
          <p className="text-gray-700 my-4">{doctorProfile.about}</p>
          <hr />

          <p className="flex items-center gap-2  text-gray-700 my-4">
            <MdLocalPhone className="font-semibold text-green-300" />{" "}
            {doctorProfile.contact.phone}
          </p>

          <p className="flex items-center gap-2  text-gray-700 mb-4">
            <MdEmail className="font-semibold text-green-300" />{" "}
            {doctorProfile.contact.email}
          </p>

          <p className="flex items-center gap-2  text-gray-700 mb-4">
            <FaAddressBook className="font-semibold text-green-300" />{" "}
            {doctorProfile.contact.chamberAddress}
          </p>
          <hr />
          <h3 className="text-md font-semibold mt-4">Work Experience</h3>
          {doctorProfile.workExperience.map((exp, index) => (
            <div key={index} className="my-6">
              <p className="flex items-center text-lg font-bold text-gray-800">
                <FaUserDoctor className="text-2xl mr-4 text-green-300" />{" "}
                {exp.position}
              </p>
              <h6 className="ml-10 text-sm font-semibold text-gray-600">
                {exp.hospital}
              </h6>
              <h6 className="ml-10 text-sm text-gray-600">{exp.years}</h6>
            </div>
          ))}
          <hr />
          <h3 className="text-md font-semibold mt-4">Education</h3>

          {doctorProfile.educations.map((edu, index) => (
            <div key={index} className="my-6">
              <p className="flex items-center text-lg font-bold text-gray-800">
                <FaUserGraduate className="text-2xl mr-4 text-green-300" />{" "}
                {edu.degree}
              </p>
              <h6 className="ml-10 text-sm font-semibold text-gray-600">
                {edu.university}
              </h6>
              <h6 className="ml-10 text-sm text-gray-600">{edu.year}</h6>
            </div>
          ))}
          <hr />
          <h3 className="text-md font-semibold my-6">Appointments</h3>

          <ul className="list-none p-0 lg:pl-4">
            {Object.entries(doctorProfile.appointmentTime).map(
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
          <Button className="mt-6 w-full bg-blue-700">
            Book an Appointment
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
