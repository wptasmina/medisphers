"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope, HeartPulse, FileText, User } from "lucide-react";
import { motion } from "framer-motion";

const PatientDashboard = () => {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-[#022dbb] mb-10">
        Welcome to MediSphere, Patient!
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Upcoming Appointments */}
        <Card className="shadow-lg border-blue-300">
          <CardHeader className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-[#022dbb]" />
            <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">You have 2 appointments this week.</p>
            <Button className="mt-4 w-full">View Appointments</Button>
          </CardContent>
        </Card>

        {/* Medical Records */}
        <Card className="shadow-lg border-green-200">
          <CardHeader className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-green-600" />
            <CardTitle className="text-lg">Medical Records</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">5 records available for download.</p>
            <Button className="mt-4 w-full" variant="outline">
              View Records
            </Button>
          </CardContent>
        </Card>

        {/* Vital Signs */}
        <Card className="shadow-lg border-red-200">
          <CardHeader className="flex items-center gap-3">
            <HeartPulse className="w-8 h-8 text-red-500" />
            <CardTitle className="text-lg">Your Vitals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Pulse: 72 bpm, BP: 120/80</p>
            <Button className="mt-4 w-full" variant="ghost">
              View Details
            </Button>
          </CardContent>
        </Card>

        {/* Doctors Assigned */}
        <Card className="shadow-lg border-indigo-200">
          <CardHeader className="flex items-center gap-3">
            <Stethoscope className="w-8 h-8 text-indigo-600" />
            <CardTitle className="text-lg">Assigned Doctors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Dr. Smith & Dr. Patel are monitoring your health.</p>
            <Button className="mt-4 w-full" variant="secondary">
              Meet Doctors
            </Button>
          </CardContent>
        </Card>

        {/* Personal Profile */}
        <Card className="shadow-lg border-yellow-200">
          <CardHeader className="flex items-center gap-3">
            <User className="w-8 h-8 text-yellow-500" />
            <CardTitle className="text-lg">Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Update your contact & health info here.</p>
            <Button className="mt-4 w-full">Edit Profile</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PatientDashboard;
