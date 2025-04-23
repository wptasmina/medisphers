'use client';

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Separator } from "@/components/ui/separator";
import DashboardAllDoctors from "@/components/dashboardAllDoctor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function page() {
  const [doctorCount, setDoctorCount] = useState(0);
  const [recentDoctors, setRecentDoctors] = useState(0);

  useEffect(() => {
    const fetchDoctorCount = async () => {
      try {
        const response = await fetch("../api/doctors");
        const data = await response.json();
        setDoctorCount(data);
      } catch (error) {
        console.error("Error fetching doctor count:", error);
      }
    };
    const fetchRecentDoctors = async () => {
      try {
        const response = await fetch("../api/doctors/recent");
        const data = await response.json();
        setRecentDoctors(data.count);
      } catch (error) {
        console.error("Error fetching recent doctors:", error);
      }
    };

    fetchDoctorCount();
    fetchRecentDoctors();
  }, []);

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Positive",
        data: [12000, 15000, 17000, 14000, 20000, 22000],
        borderColor: "#4F46E5",
        backgroundColor: "#4F46E533",
        tension: 0.3,
        fill: true
      },
      {
        label: "Negative",
        data: [8000, 9500, 11000, 9000, 13000, 14500],
        borderColor: "#EC4899",
        backgroundColor: "#EC489933",
        tension: 0.3,
        fill: true
      }
    ]
  };

  const pieData = {
    labels: ["Cardiology", "Neurology", "Dermatology"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#4F46E5", "#22C55E", "#FACC15"],
        hoverOffset: 4
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Doctors</CardTitle>
          <p className="text-2xl font-bold">{doctorCount === null ? 'Loading...' : doctorCount.length}</p>
          <p className="text-sm text-muted-foreground">{recentDoctors} Doctors joined in the last weeks</p>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Patients</CardTitle>
          <p className="text-2xl font-bold">14,685</p>
          <p className="text-sm text-green-500">1.3% Up from past week</p>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Transactions</CardTitle>
          <p className="text-2xl font-bold">$89,000</p>
          <p className="text-sm text-red-500">4.3% Down from yesterday</p>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Appointments</CardTitle>
          <p className="text-2xl font-bold">1,460</p>
          <p className="text-sm text-green-500">1.8% Up from yesterday</p>
        </CardHeader>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Reported Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={lineData} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Visited Dept.</CardTitle>
        </CardHeader>
        <CardContent>
          <Pie data={pieData} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Room Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-sm">
            <li>General Ward: 98</li>
            <li>Private Room: 45</li>
            <li>Semi-private Room: 66</li>
            <li>Emergency Room: 12</li>
            <li>ICU: 8</li>
            <li>Operation Theatre: 5</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-4">
        {/* <CardHeader>
          <CardTitle>All Doctors</CardTitle>
        </CardHeader> */}
        <CardContent>
          {/* <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>A shower broken in room number 135...</p>
              <Button variant="outline">View Report</Button>
            </div>
            <Separator />
            <div className="flex justify-between">
              <p>A shower broken in room number 137...</p>
              <Button variant="outline">View Report</Button>
            </div>
          </div> */}
          <DashboardAllDoctors/>
        </CardContent>
      </Card>
    </div>
  );
}