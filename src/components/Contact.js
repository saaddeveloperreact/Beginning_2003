import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-3">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <form className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Info Section */}
      <div className="max-w-3xl mx-auto text-center mt-8 text-gray-500 text-sm">
        <p>Email: saadmohammed@example.com</p>
        <p>Phone: +91 8904339551</p>
      </div>
    </div>
  );
};

export default ContactUs;
