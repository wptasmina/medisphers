'use client';

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

export default function AddDoctorForm() {
    const { register, handleSubmit, control, setValue, reset } = useForm({
        defaultValues: {
            availableStatus: true,
        },
    });

    const { fields: educationFields, append: appendEducation } = useFieldArray({
        control,
        name: 'educations',
    });

    const { fields: experienceFields, append: appendExperience } = useFieldArray({
        control,
        name: 'workExperience',
    });

    const onSubmit = async (data) => {
        const res = await fetch('/api/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert('Doctor added successfully!');
            reset();
        } else {
            alert('Error saving doctor');
        }
    };

    return (
        <div className="w-11/12 mx-auto dark:text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-xl font-bold pb-2 pl-4">Add Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                    {/* Basic Info */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className='gap-2'>
                            <Label className="pb-1.5">Doctor ID</Label>
                            <Input {...register('doctor_id')} placeholder="DOC00000" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Name</Label>
                            <Input {...register('name')} placeholder="Dr. Anamul Hoque" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Age</Label>
                            <Input {...register('age')} type="number" placeholder="00" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Department</Label>
                            <Select onValueChange={(val) => setValue('department', val)}>
                                <SelectTrigger className="cursor-pointer dark:bg-blue-50 dark:text-black">
                                    <SelectValue placeholder="Select department" className="dark:bg-blue-50 dark:text-black"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                                    <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                                    <SelectItem value="Nephrology">Nephrology</SelectItem>
                                    <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                                    <SelectItem value="Dermatology">Dermatology</SelectItem>
                                    <SelectItem value="Neurology">Neurology</SelectItem>
                                    <SelectItem value="Gastroenterology">Gastroenterology</SelectItem>
                                    <SelectItem value="Psychiatry">Psychiatry</SelectItem>
                                    <SelectItem value="Oncology">Oncology</SelectItem>
                                    <SelectItem value="Ophthalmology">Ophthalmology</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                        <div>
                            <Label className="pb-1.5">Speciality</Label>
                            <Input {...register('speciality')} placeholder="Psychiatrist" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Available Status</Label>
                            <Switch
                                defaultChecked
                                onCheckedChange={(val) => setValue('availableStatus', val)}
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="pb-1.5">Phone</Label>
                            <Input {...register('contact.phone')} placeholder="+880-00000000000" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Email</Label>
                            <Input {...register('contact.email')} placeholder="doctor10@example.com" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div className="col-span-2">
                            <Label className="pb-1.5">Chamber Address</Label>
                            <Input {...register('contact.chamberAddress')} placeholder="Mind Wellness Center, Dhaka" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                    </div>

                    {/* Appointment Time */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label className="pb-1.5">Tuesday</Label>
                            <Input {...register('appointmentTime.Tuesday')} placeholder="10:00 AM - 3:00 PM" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Thursday</Label>
                            <Input {...register('appointmentTime.Thursday')} placeholder="2:00 PM - 6:00 PM" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                        <div>
                            <Label className="pb-1.5">Saturday</Label>
                            <Input {...register('appointmentTime.Saturday')} placeholder="10:00 AM - 2:00 PM" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="pb-1.5">Total Experience (Years)</Label>
                            <Input {...register('workExperienceYears')} type="number" placeholder="00" className="dark:bg-blue-50 dark:text-black"/>
                        </div>
                    </div>

                    {experienceFields.map((item, index) => (
                        <div className="grid grid-cols-3 gap-4" key={item.id}>
                            <div>
                                <Label className="pb-1.5">Hospital</Label>
                                <Input {...register(`workExperience.${index}.hospital`)} className="dark:bg-blue-50 dark:text-black"/>
                            </div>
                            <div>
                                <Label className="pb-1.5">Position</Label>
                                <Input {...register(`workExperience.${index}.position`)} className="dark:bg-blue-50 dark:text-black"/>
                            </div>
                            <div>
                                <Label className="pb-1.5">Years</Label>
                                <Input {...register(`workExperience.${index}.years`)} className="dark:bg-blue-50 dark:text-black"/>
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
                                <Input {...register(`educations.${index}.degree`)} className="dark:bg-blue-50 dark:text-black"/>
                            </div>
                            <div>
                                <Label className="pb-1.5">University</Label>
                                <Input {...register(`educations.${index}.university`)} className="dark:bg-blue-50 dark:text-black"/>
                            </div>
                            <div>
                                <Label className="pb-1.5">Year</Label>
                                <Input {...register(`educations.${index}.year`)} className="dark:bg-blue-50 dark:text-black"/>
                            </div>
                        </div>
                    ))}
                    <Button className="mr-2" type="button" variant="outline" onClick={() => appendEducation({})}>
                        + Add Education
                    </Button>

                    {/* Other Info */}
                    <div>
                        <Label className="pb-1.5">About</Label>
                        <Textarea {...register('about')} placeholder="Write about doctor..." className="dark:bg-blue-50 dark:text-black"/>
                    </div>
                    <div>
                        <Label className="pb-1.5">Photo URL</Label>
                        <Input {...register('photo')} placeholder="https://..." className="dark:bg-blue-50 dark:text-black"/>
                    </div>

                    <Button type="submit" className="bg-[#022dbb] text-white hover:text-gray-200 dark:hover:text-[#022dbb] dark:hover:bg-blue-50 duration-300 px-4 py-2 rounded-md">
                        Add doctor
                    </Button>
                </form>
            </div>
        </div>
    );
}
