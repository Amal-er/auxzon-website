import React, { useState } from "react";
import emailjs from "emailjs-com";
import servicebg from "../assets/bgservices.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_Auxzon", // Replace with your EmailJS service ID
        "template_7vb69vg", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "amaler2205@gmail.com", // Explicitly set the recipient email
        },
        "R6rizM8lpDLvtFWk7" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error sending message");
        }
      );
  };

  return (
    <div
      className="total"
      style={{
        backgroundImage: `url(${servicebg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center pt-16 w-full h-28">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-lg shadow-md overflow-hidden md:flex">
          <div className="p-4 border-b bg-white border-gray-200 md:w-1/2 flex flex-col gap-3 justify-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="mb-4 flex items-start gap-2">
              <FaLocationDot className="text-xl" />
              <div>
                <p className="font-medium">auxzon</p>
                <p className="font-medium">Kochi, Kerala</p>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <IoIosCall className="text-xl" />
              <p className="font-medium">+91 9072168666</p>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <IoIosMail className="text-xl" />
              <p className="font-medium">contact@auxzon.com</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Social Media
              </h2>
              <div className="flex gap-5">
                <CiFacebook className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaXTwitter className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-start p-10 justify-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full md:w-64 px-4 h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full h-32 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
