"use client";
import { useState } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from '@emailjs/browser';


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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center md:p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg lg:p-6 flex flex-col md:flex-row">

                {/* Left Side - Contact Information */}
                <div className="w-full md:w-1/3 p-4 md:text-left text-center flex flex-col justify-center border ">
                    <h3 className="text-xl font-bold text-gray-700 ">Hospital Contact</h3>
                    <p className="text-gray-600 ">📍 Medisphere, Bangladesh</p>
                    <p className="text-gray-600">📧 contact@medisphers.com</p>
                    <p className="text-gray-600">📞 +123 456 7890</p>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-2/3 p-2">
                    <h2 className="text-3xl font-bold text-center text-blue-600">Contact Us</h2>
                    <p className="text-center text-gray-600 mt-2">We'd love to hear from you!</p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            value={userInput.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            value={userInput.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            value={userInput.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default ContactUs;