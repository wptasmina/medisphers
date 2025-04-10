'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export default function EditDoctorForm({ doctorId }) {
  const { register, handleSubmit, setValue, getValues, reset } = useForm();
  const [specialty, setSpecialty] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await fetch(`/api/doctors/${doctorId}`);
      const data = await res.json();

      // Prefill all form fields
      reset(data);

      // Specifically set controlled select fields
      setSpecialty(data.specialty || "");
      setExperience(data.experience || "");
    };

    if (doctorId) fetchDoctor();
  }, [doctorId, reset]);

  const onSubmit = async (data) => {
    const res = await fetch(`/api/doctors/${doctorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Doctor updated successfully!');
    } else {
      alert('Error updating doctor');
    }
  };

  return (
    <div className='w-11/12 mx-auto'>
      <div className='max-w-3xl mx-auto'>
        <h2 className="text-xl font-bold pb-2 pl-4">Edit Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 bg-white rounded-lg shadow">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Your Name</Label>
              <Input {...register('name')} placeholder="Name" />
            </div>
            <div>
              <Label>Specialty</Label>
              <Select
                value={specialty}
                onValueChange={(val) => {
                  setSpecialty(val);
                  setValue('specialty', val);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {["Cardiology", "Pediatrics", "Nephrology", "Orthopedics", "Dermatology", "Neurology", "Gastroenterology", "Psychiatry", "Oncology", "Ophthalmology"]
                    .map((spec) => (
                      <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Doctor Email</Label>
              <Input {...register('email')} type="email" placeholder="admin@example.com" />
            </div>
            <div>
              <Label>Degree</Label>
              <Input {...register('degree')} placeholder="Degree" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Set Password</Label>
              <Input {...register('password')} type="password" />
            </div>
            <div>
              <Label>Experience</Label>
              <Select
                value={experience}
                onValueChange={(val) => {
                  setExperience(val);
                  setValue('experience', val);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  {["1 Year", "2 Years", "3 Years", "4 Years", "5+ Years", "10+ Years", "15+ Years", "20+ Years"]
                    .map((exp) => (
                      <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Fees</Label>
            <Input {...register('fees')} placeholder="Doctor fees" />
          </div>

          <div>
            <Label>Address 1</Label>
            <Input {...register('address1')} placeholder="Address 1" />
          </div>
          <div>
            <Label>Address 2</Label>
            <Input {...register('address2')} placeholder="Address 2" />
          </div>

          <div>
            <Label>About Doctor</Label>
            <Textarea {...register('about')} placeholder="Write about doctor..." />
          </div>

          <Button
            type="submit"
            className="bg-[#022dbb] hover:text-gray-200 dark:hover:text-[#022dbb] duration-300 dark:duration-500 dark:hover:bg-blue-50 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Update doctor
          </Button>
        </form>
      </div>
    </div>
  );
}
