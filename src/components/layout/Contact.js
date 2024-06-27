"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setFormErrors({
      name: false,
      email: false,
      message: false
    });

    // Perform basic validation
    if (!formData.name) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: true
      }));
    }
    if (!formData.email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: true
      }));
    }
    if (!formData.message) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: true
      }));
    }

    
  };

  return (
    <>
      <div className=" flex-row flex xl:flex-row  justify-between max-w-6xl mx-auto p-4 mt-14 mb-12">
      <div className="flex-1 w-[200px] h-[90px] lg:h-auto md:w-1/2 ">
          <Image src="/Side Image.png" layout="responsive" width={300} height={200} alt="Side Image" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-4xl text-right">
            We &apos;d love to hear <br /> from you
          </h3>
          <form className="max-w-lg mx-auto my-8 p-4  rounded-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              
              </label>
              <input
                type="text"
                placeholder="  Name*"
                id="name"
                name="name"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-priyellow focus:border-priyellow placeholder-black sm:text-lg`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                
              </label>
              <input
                type="email"
                placeholder="Email*"
                id="email"
                name="email"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-priyellow focus:border-priyellow placeholder-black sm:text-lg`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="website" className="block text-lg font-medium text-gray-700">
                
              </label>
              <input
                type="url"
                placeholder="Website URL*"
                id="website"
                name="website"
                className="mt-1 block w-full px-3 py-2 border border-textcol rounded-md shadow-sm focus:outline-none focus:ring-priyellow focus:border-priyellow sm:text-lg placeholder-black"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium ">
                
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Project Details*"
                rows="4"
                className={`mt-1 block w-full px-3 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-priyellow focus:border-priyellow placeholder-black sm:text-lg`}
                value={formData.message}
                onChange={handleChange}
                required
              />
              {formErrors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
            </div>
            <Link href ="/success"
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-md shadow-md hover:bg-priyellow focus:outline-none focus:ring-2 focus:ring-offset-gray-100"
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
