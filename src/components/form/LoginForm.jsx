import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {login} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (formData) => {
    const response = await fetch("/api/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      login(data.token);
      toast.success("Login successful!", { position: "top-right" }); 
      router.push("/");
    } else {
      toast.error(data.message || "Login failed!", { position: "top-right" });
    }
  };
  

  return (
  <div>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-sm mx-auto p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg"
  >
    <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>

    <div className="mb-6">
      <Label htmlFor="email" className="mb-2">Email Address</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <FormMessage>{errors.email?.message}</FormMessage>}
    </div>

    <div className="mb-6">
      <Label htmlFor="password" className="mb-2">Password</Label>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
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
      {errors.password && <FormMessage>{errors.password?.message}</FormMessage>}
    </div>

    <Button type="submit" className="w-full bg-[#022dbb] dark:text-gray-300 dark:hover:text-gray-950 cursor-pointer">Sign In</Button>
    
    <p className="mt-6">
      New to <span className="font-bold">Medisphere</span> ? Click here to
      <Link className="text-[#022dbb] font-bold ml-2" href={"/signup"}>
      Sign up
      </Link> now.
    </p>
  </form>
</div>

  );
};

export default LoginForm;
