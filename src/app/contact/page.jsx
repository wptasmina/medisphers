"use client";
import { useState } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";


const ContactUs = () => {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status === 200) {
                toast.success("Message sent successfully!");
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen mt-8 bg-gray-100 dark:bg-gray-900 flex items-center justify-center md:p-6">
            <div className="max-w-4xl py-4 px-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg lg:p-6 flex flex-col md:flex-row gap-4">

                {/* Left Side - Contact Information */}
                <div className="w-full md:w-1/3 p-4 md:text-left text-center dark:text-gray-900 flex flex-col justify-center ">
                    <h3 className="text-2xl pb-4 font-bold text-gray-700 dark:text-gray-300">Hospital Contact</h3>
                    <p className="text-gray-600 pb-2  dark:text-gray-300">📍 Medisphere, Bangladesh</p>
                    <p className="text-gray-600 pb-2 dark:text-gray-300">📧 contact@medisphers.com</p>
                    <p className="text-gray-600 pb-2 dark:text-gray-300">📞 +123 456 7890</p>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-2/3 p-2 dark:text-gray-600">
                    <h2 className="text-3xl font-bold text-center text-blue-600">Contact Us</h2>
                    <p className="text-center text-gray-600 mt-2 dark:text-gray-300">We'd love to hear from you!</p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 border dark:border-gray-400 rounded-lg dark:text-gray-300 focus:ring focus:ring-blue-300"
                            value={userInput.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 border dark:border-gray-400 rounded-lg dark:text-gray-300 focus:ring focus:ring-blue-300"
                            value={userInput.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 border dark:border-gray-400  rounded-lg dark:text-gray-300 focus:ring focus:ring-blue-300"
                            value={userInput.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <Button
                            type="submit"
                            className="w-full bg-[#022dbb] text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message<ArrowUpRight />
                        </Button>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default ContactUs;