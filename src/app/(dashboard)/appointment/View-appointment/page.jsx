"use client";

import { Check, Slack, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ViewAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">View Appointments</h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-[#022dbb]">
          <Slack className="w-10 h-10 animate-spin mb-4" />
          <p className="text-sm">Loading appointments...</p>
        </div>
      ) : appointments.length === 0 ? (
        <p className="text-red-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-gray-900">
            <thead className="bg-blue-50 dark:bg-gray-950 ">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Patient Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Payment</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Doctor</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Age</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Fees</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Action</th>
                {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Type</th> */}
                {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Reason</th> */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 "> 
              {appointments.map((appt, index) => (
                <tr key={appt.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <div className="flex items-center space-x-3 dark:text-gray-300">
                      <img
                        src={appt.image || "/default-avatar.png"}
                        alt={appt.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{appt.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{appt.payment}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{appt.doctor}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{appt.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{appt.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{appt.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">{appt.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300 font-medium">${appt.fees}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center space-x-3">
                      <X className="border border-red-200 rounded-full w-8 h-8 text-lg p-1 cursor-pointer text-red-400" />
                      <Check className="border border-blue-200 rounded-full w-8 h-8 text-lg p-1 cursor-pointer text-blue-400" />
                    </div>
                  </td>
                  {/* <td className="px-6 py-4 text-sm text-gray-800">{appt.type}</td> */}
                  {/* <td className="px-6 py-4 text-sm text-gray-800">{appt.reason}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
