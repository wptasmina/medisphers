'use client';

import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
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
import { Switch } from '@/components/ui/switch';

export default function EditDoctorForm({ doctorId }) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
  } = useForm();

  const [doctorData, setDoctorData] = useState(null);

  const {
    fields: experienceFields,
    append: appendExperience,
    replace: replaceExperience,
  } = useFieldArray({
    control,
    name: 'workExperience',
  });

  const {
    fields: educationFields,
    append: appendEducation,
    replace: replaceEducation,
  } = useFieldArray({
    control,
    name: 'educations',
  });

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await fetch(`/api/doctors/${doctorId}`);
      const data = await res.json();
      setDoctorData(data);
      reset(data); // Prefill all fields
      if (data.workExperience) replaceExperience(data.workExperience);
      if (data.educations) replaceEducation(data.educations);
      setValue('availableStatus', data.availableStatus);
    };

    if (doctorId) fetchDoctor();
  }, [doctorId, reset, replaceExperience, replaceEducation, setValue]);

  const onSubmit = async (data) => {
    const res = await fetch(`/api/doctors/${doctorId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Doctor updated successfully!');
    } else {
      alert('Error updating doctor');
    }
  };

  if (!doctorData) return <p>Loading doctor info...</p>;

  return (
    <div className="w-11/12 mx-auto dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold pb-2 pl-4">Edit Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 bg-white dark:bg-gray-900 rounded-lg shadow">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="pb-1.5">Doctor ID</Label>
              <Input {...register('doctor_id')} placeholder={doctorData?.doctor_id || 'DOC00025'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Name</Label>
              <Input {...register('name')} placeholder={doctorData?.name || 'Dr. Nuzhat Chowdhury'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Age</Label>
              <Input {...register('age')} type="number" placeholder={doctorData?.age?.toString() || '41'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Department</Label>
              <Select onValueChange={(val) => setValue('department', val)} defaultValue={doctorData?.department}>
                <SelectTrigger className="cursor-pointer dark:bg-blue-50 dark:text-black">
                  <SelectValue placeholder={doctorData?.department || 'Select department'} />
                </SelectTrigger>
                <SelectContent>
                  {[
                    'Cardiology', 'Pediatrics', 'Nephrology', 'Orthopedics',
                    'Dermatology', 'Neurology', 'Gastroenterology', 'Psychiatry',
                    'Oncology', 'Ophthalmology',
                  ].map((dep) => (
                    <SelectItem key={dep} value={dep}>{dep}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="pb-1.5">Speciality</Label>
              <Input {...register('speciality')} placeholder={doctorData?.speciality || 'Psychiatrist'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Available Status</Label>
              <Switch
                defaultChecked={doctorData?.availableStatus}
                onCheckedChange={(val) => setValue('availableStatus', val)}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="pb-1.5">Phone</Label>
              <Input {...register('contact.phone')} placeholder={doctorData?.contact?.phone || '+880-1712345687'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Email</Label>
              <Input {...register('contact.email')} placeholder={doctorData?.contact?.email || 'doctor10@example.com'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div className="col-span-2">
              <Label className="pb-1.5">Chamber Address</Label>
              <Input {...register('contact.chamberAddress')} placeholder={doctorData?.contact?.chamberAddress || 'Mind Wellness Center, Dhaka'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
          </div>

          {/* Appointment Time */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="pb-1.5">Tuesday</Label>
              <Input {...register('appointmentTime.Tuesday')} placeholder={doctorData?.appointmentTime?.Tuesday || '10:00 AM - 3:00 PM'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Thursday</Label>
              <Input {...register('appointmentTime.Thursday')} placeholder={doctorData?.appointmentTime?.Thursday || '2:00 PM - 6:00 PM'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
            <div>
              <Label className="pb-1.5">Saturday</Label>
              <Input {...register('appointmentTime.Saturday')} placeholder={doctorData?.appointmentTime?.Saturday || '10:00 AM - 2:00 PM'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
          </div>

          {/* Experience */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="pb-1.5">Total Experience (Years)</Label>
              <Input {...register('workExperienceYears')} type="number" placeholder={doctorData?.workExperienceYears?.toString() || '14'} className="dark:bg-blue-50 dark:text-black"/>
            </div>
          </div>

          {experienceFields.map((item, index) => (
            <div className="grid grid-cols-3 gap-4" key={item.id}>
              <div>
                <Label className="pb-1.5">Hospital</Label>
                <Input {...register(`workExperience.${index}.hospital`)} placeholder="Hospital name" className="dark:bg-blue-50 dark:text-black"/>
              </div>
              <div>
                <Label className="pb-1.5">Position</Label>
                <Input {...register(`workExperience.${index}.position`)} placeholder="Position held" className="dark:bg-blue-50 dark:text-black"/>
              </div>
              <div>
                <Label className="pb-1.5">Years</Label>
                <Input {...register(`workExperience.${index}.years`)} placeholder="Years worked" className="dark:bg-blue-50 dark:text-black"/>
              </div>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => appendExperience({})}>
            + Add Experience
          </Button>

          {/* Education */}
          {educationFields.map((item, index) => (
            <div className="grid grid-cols-3 gap-4" key={item.id}>
              <div>
                <Label className="pb-1.5">Degree</Label>
                <Input {...register(`educations.${index}.degree`)} placeholder="MBBS" className="dark:bg-blue-50 dark:text-black"/>
              </div>
              <div>
                <Label className="pb-1.5">University</Label>
                <Input {...register(`educations.${index}.university`)} placeholder="Dhaka University" className="dark:bg-blue-50 dark:text-black"/>
              </div>
              <div>
                <Label className="pb-1.5">Year</Label>
                <Input {...register(`educations.${index}.year`)} placeholder="2008" className="dark:bg-blue-50 dark:text-black"/>
              </div>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={() => appendEducation({})}>
            + Add Education
          </Button>

          {/* Other Info */}
          <div>
            <Label className="pb-1.5">About</Label>
            <Textarea {...register('about')} placeholder={doctorData?.about || 'Write about doctor...'} className="dark:bg-blue-50 dark:text-black"/>
          </div>
          <div>
            <Label className="pb-1.5">Photo URL</Label>
            <Input {...register('photo')} placeholder={doctorData?.photo || 'https://...'} className="dark:bg-blue-50 dark:text-black"/>
          </div>

          <Button type="submit" className="bg-[#022dbb] text-white hover:text-gray-200 dark:hover:text-[#022dbb] dark:hover:bg-blue-50 duration-300 px-4 py-2 rounded-md">
            Update doctor
          </Button>
        </form>
      </div>
    </div>
  );
}
