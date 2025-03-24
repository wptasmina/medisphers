"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Signup Successfull!",
      });
      router.push("/signin");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${data.error}`,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
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

        <div className="mt-6">
          <Button type="submit" className="w-full bg-[#022dbb]">
            Sign Up
          </Button>
        </div>
      </form>
      <p className="my-4">
        Already have an account? Click here to{" "}
        <Link className="font-bold text-[#022dbb]" href={"/signin"}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
