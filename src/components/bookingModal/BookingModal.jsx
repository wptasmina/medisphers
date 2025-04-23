"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingModal({ doctor, user, isOpen, onClose }) {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userName, setUserName] = useState(user?.name || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");

  const router = useRouter();

  const handleBooking = () => {
    const fees = doctor?.fees || 500;

    const bookingData = {
      name: userName,
      email: userEmail,
      doctor: doctor?.name,
      department: doctor?.department,
      speciality: doctor?.speciality,
      date: selectedDate,
      time: selectedTime,
      payment: paymentMethod,
      fees, // use fallback value
    };

    onClose();

    const query = new URLSearchParams(bookingData).toString();
    router.push(`/payment?${query}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Doctor Name</Label>
            <Input value={doctor?.name} readOnly />
          </div>
          <div>
            <Label>Department</Label>
            <Input value={doctor?.department} readOnly />
          </div>
          <div>
            <Label>Speciality</Label>
            <Input value={doctor?.speciality} readOnly />
          </div>
          <div>
            <Label>Your Name</Label>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <Label>Your Email</Label>
            <Input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <Label>Select Appointment Date</Label>
            <Input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
          </div>
          <div>
            <Label>Select Appointment Time</Label>
            <Select onValueChange={setSelectedTime}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {doctor?.appointmentTime &&
                  Object.entries(doctor.appointmentTime).map(([day, time]) => (
                    <SelectItem key={day} value={time}>
                      {day}: {time}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Payment Method</Label>
            <Select onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full bg-[#022dbb]"
            onClick={handleBooking}
            disabled={!selectedTime || !selectedDate || !paymentMethod}
          >
            Confirm Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
