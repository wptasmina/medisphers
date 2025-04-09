"use client";
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Controller } from "react-hook-form";


const PatientForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const onSubmit = async (formData) => {
    console.log(formData);
    const patient = { ...formData, role: `patient` }
    const res = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Register successful!", { position: "top-right" });
      router.push("/signin");
    } else {
      toast.error(data.message || "Register failed!", { position: "top-right" });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="sm:max-w-md mx-3 sm:mx-auto p-6 border dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4">Patient Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="photoUrl">
            Photo URL (Optional)
          </label>
          <Input
            id="photoUrl"
            placeholder="PhotoUrl"
            {...register("photoUrl", {
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i,
                message:
                  "Please enter a valid image URL (e.g., .jpg, .png, .jpeg)",
              },
            })}
            className="w-full"
          />
          {errors.photoUrl && (
            <span className="text-red-500 text-sm">
              {errors.photoUrl.message}
            </span>
          )}
        </div>

        {/* First name and Last Name  */}
        <div className="flex gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="firstName">
              First Name
            </label>
            <Input
              id="firstName"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
              className="w-full"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="lastName">
              Last Name
            </label>
            <Input
              id="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        {/* phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Please enter a valid phone number",
              },
            })}
            className="w-full"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

          {/* Email  */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        {/* Password  */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Your Password"
              {...register("password", { required: "Password is required" })}
              className="w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* seclect Gander  */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Gender</label>
          <Controller
            id="gender"
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.gender && (
            <span className="text-red-500 text-sm">{errors.gender.message}</span>
          )}
        </div>

        {/* sign up button  */}
        <div className="mt-6">
          <Button type="submit" className="w-full bg-[#022dbb] dark:text-gray-300 dark:hover:text-[#022dbb] transition-colors duration-300 cursor-pointer">
            Sign Up
          </Button>
        </div>
      </form >
      <p className="my-4 dark:text-gray-300">
        Already have an account? Click here to
        <Link className="ml-1 font-bold dark:text-[#022dbb] text-[#022dbb]" href={"/signin"}>
          Sign in
        </Link>
      </p>
    </div >
  );
};

export default PatientForm;
