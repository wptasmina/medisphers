"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          newPassword: data.password,
        }),
      });

      const response = await res.json();

      if (res.ok) {
        toast.success("Password reset successfully!");
        // Optionally redirect to login page
      } else {
        toast.error(response.error || "Failed to reset password.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg dark:bg-gray-900"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>

      <div className="mb-4">
        <Label htmlFor="email" className="mb-2">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 read-only">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="password" className="mb-2">New Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your new password"
            {...register("password", { required: "Password is required" })}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5 text-gray-500" />
            ) : (
              <FaEye className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
};

export default ForgotPassword;
