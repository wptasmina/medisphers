"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast} from "react-toastify";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const onSubmit = async (formData) => {
    console.log(formData);
    const res = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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
    <div className="max-w-md mx-auto p-6 border dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="photoUrl">
            Photo URL (Optional)
          </label>
          <Input
            id="photoUrl"
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

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <Input
            id="firstName"
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
            {...register("lastName", { required: "Last name is required" })}
            className="w-full"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
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

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
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
        <div>
        </div>

        <div>
        <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Doctor</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>

        <div className="mt-6">
          <Button type="submit" className="w-full bg-[#022dbb] dark:text-gray-300 dark:hover:text-gray-950 cursor-pointer ">
            Sign Up
          </Button>
        </div>
      </form>
      <p className="my-4 dark:text-gray-300">
        Already have an account? Click here to 
        <Link className="ml-1 font-bold dark:text-[#022dbb] text-[#022dbb]" href={"/signin"}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
