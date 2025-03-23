"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BookingModal({ doctor, user, isOpen, onClose }) {
  const [selectedTime, setSelectedTime] = useState("");
  const [userName, setUserName] = useState(user?.name || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");

  const handleBooking = () => {
    console.log("Booking Confirmed", { doctor, userName, userEmail, selectedTime });
    onClose();
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
            <Input value={doctor.name} readOnly />
          </div>
          <div>
            <Label>Department</Label>
            <Input value={doctor.department} readOnly />
          </div>
          <div>
            <Label>Speciality</Label>
            <Input value={doctor.speciality} readOnly />
          </div>
          
     
          <div>
            <Label>Your Name</Label>
            <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <Label>Your Email</Label>
            <Input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          </div>
          

          <div>
            <Label>Select Appointment Time</Label>
            <Select onValueChange={setSelectedTime}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(doctor.appointmentTime).map(([day, time]) => (
                  <SelectItem key={day} value={`${day} - ${time}`}>
                    {day}: {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
  
          <Button className="w-full bg-blue-700" onClick={handleBooking} disabled={!selectedTime}>
            Confirm Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
