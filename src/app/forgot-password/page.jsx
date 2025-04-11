"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

      const result = await res.json();

      if (res.ok) {
        toast.success("✅ " + result.message);
      } else {
        toast.error("❌ " + result.error);
      }
    } catch (error) {
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
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          disabled={loading}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="password">New Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            disabled={loading}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label="Toggle password visibility"
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

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
};

export default ResetPassword;
