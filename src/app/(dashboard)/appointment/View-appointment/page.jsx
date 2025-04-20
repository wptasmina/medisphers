"use client";

import { useEffect, useState } from "react";

export default function ViewAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  // Replace this mock data with your API data
  useEffect(() => {
    const mockAppointments = [
      {
        id: 1,
        name: "John Doe",
        doctor: "Dr. Alice",
        date: "2025-04-20",
        time: "10:00 AM",
        email: "john@example.com",
        reason: "Routine Check-up",
        type: "In-person",
      },
      {
        id: 2,
        name: "Jane Smith",
        doctor: "Dr. Bob",
        date: "2025-04-22",
        time: "2:30 PM",
        email: "jane@example.com",
        reason: "Follow-up",
        type: "Online",
      },
    ];

    setTimeout(() => setAppointments(mockAppointments), 500);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">View Appointments</h1>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Patient Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Doctor</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Type</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
  {appointments.map((appt, index) => (
    <tr key={appt.id} className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>

      {/* Name with image */}
      <td className="px-6 py-4 text-sm text-gray-800">
        <div className="flex items-center space-x-3">
          <img
            src={appt.image || "/default-avatar.png"}
            alt={appt.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{appt.name}</span>
        </div>
      </td>

      <td className="px-6 py-4 text-sm text-gray-800">{appt.doctor}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{appt.date}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{appt.time}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{appt.email}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{appt.type}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{appt.reason}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      )}
    </div>
  );
}
