'use client';

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

export default function AddDoctorForm() {
    const { register, handleSubmit, setValue, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await fetch('/api/doctors', {
            method: 'POST',
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
        <div className='w-11/12 mx-auto'>
            <div className='max-w-3xl mx-auto'>
                <h2 className="text-xl font-bold pb-2 pl-4"> Add Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 bg-white rounded-lg shadow">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Your Name</Label>
                            <Input {...register('name')} placeholder="Name" />
                        </div>
                        <div>
                            <Label>Specialty</Label>
                            <Select onValueChange={(val) => setValue('specialty', val)}>
                                <SelectTrigger className='cursor-pointer'>
                                    <SelectValue placeholder="Select specialty" />
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
                            <Select onValueChange={(val) => setValue('experience', val)}>
                                <SelectTrigger className="cursor-pointer">
                                    <SelectValue placeholder="Select experience" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1 Year">1 Year</SelectItem>
                                    <SelectItem value="2 Years">2 Years</SelectItem>
                                    <SelectItem value="3 Years">3 Years</SelectItem>
                                    <SelectItem value="4 Years">4 Years</SelectItem>
                                    <SelectItem value="5+ Years">5+ Years</SelectItem>
                                    <SelectItem value="10+ Years">10+ Years</SelectItem>
                                    <SelectItem value="15+ Years">15+ Years</SelectItem>
                                    <SelectItem value="20+ Years">20+ Years</SelectItem>
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

                    <Button type="submit" className="bg-[#022dbb] hover:text-gray-200 dark:hover:text-[#022dbb] duration-300 dark:duration-500 dark:hover:bg-blue-50 text-white px-4 py-2 rounded-md cursor-pointer">Add doctor</Button>
                </form>
            </div>
        </div>

    );
}
