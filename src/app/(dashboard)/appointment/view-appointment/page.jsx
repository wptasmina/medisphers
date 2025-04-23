"use client";

import { Check, Slack, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function ViewAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/appointments");
      const data = await res.json();
      setAppointments(data);
    } catch (error) {
      toast.error("Failed to load appointments.");
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this appointment?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/appointments/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        setAppointments(prev => prev.filter(appt => appt._id !== id));
        toast.success("Appointment deleted successfully.");
      } else {
        toast.error("Failed to delete appointment.");
      }
    } catch (err) {
      toast.error("An error occurred while deleting.");
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
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
            <thead className="bg-blue-50 dark:bg-gray-950">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Patient Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Payment</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Doctor</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Age</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Fees</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.map((appt, index) => (
                <tr key={appt._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={appt.image || "/default-avatar.png"}
                        alt={appt.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{appt.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{appt.payment}</td>
                  <td className="px-6 py-4">{appt.doctor}</td>
                  <td className="px-6 py-4">{appt.age}</td>
                  <td className="px-6 py-4">{appt.date}</td>
                  <td className="px-6 py-4">{appt.time}</td>
                  <td className="px-6 py-4">{appt.email}</td>
                  <td className="px-6 py-4 font-medium">${appt.fees}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <X
                        className="border border-red-200 rounded-full w-8 h-8 p-1 cursor-pointer text-red-400"
                        onClick={() => handleDelete(appt._id)}
                      />
                      <Check className="border border-blue-200 rounded-full w-8 h-8 p-1 cursor-pointer text-blue-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
