

const ContactUs = () => {
  
 
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center text-blue-600">Contact Us</h2>
                <p className="text-center text-gray-600 mt-2">We'd love to hear from you!</p>

                <form  className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                      
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                       
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">Hospital Contact</h3>
                    <p className="text-gray-600">📍 Medisphers, Dhaka, Bangladesh</p>
                    <p className="text-gray-600">📧 contact@medisphers.com</p>
                    <p className="text-gray-600">📞 +123 456 7890</p>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;