"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import FormUpIcon from "../../components/Icons/FormUpIcon";
import FormDownIcon from "../Icons/FormDownIcon";
export default function ContactFormSection() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';

    if (!formData.projectType)
      newErrors.projectType = 'Please select project type';
    if (!formData.budget) newErrors.budget = 'Please select budget';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      projectType: formData.projectType,
      budget: formData.budget,
      message: formData.message
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );


      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });

      router.push('/thank-you');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-5 sm:py-8 py-2 md:py-2">
      
      <div className="w-full flex lg:flex-row flex-col gap-2 lg:gap-12">
      

        {/* Left side - Heading */}
        <div className="lg:w-[45%] w-full flex flex-col ">

          <h1 className="font-extrabold text-4xl sm:mt-20  text-[#26164F] uppercase leading-tight">
            LET'S TALK ABOUT YOUR PROJECT.
          </h1>
          <p className="font-light text-gray-600 mt-4 text-lg">
            Share a few details.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="lg:w-[55%] w-full">
             <div className="-ml-18 sm:-mb-12 -mb-23">
        <FormUpIcon />
      </div>
          <div className="flex flex-col gap-2 md:gap-4">
              
      
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg placeholder:text-black/50 text-black focus:placeholder:text-black focus:border-black focus:outline-none transition-colors"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg placeholder:text-black/50 text-black focus:placeholder:text-black focus:border-black focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg placeholder:text-black/50 text-black focus:placeholder:text-black focus:border-black focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg placeholder:text-black/50 text-black focus:placeholder:text-black focus:border-black focus:outline-none transition-colors"
              />
              {errors.company && (
                <p className="text-red-600 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            {/* Project Type and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg appearance-none ${formData.projectType === '' ? 'text-black/50' : 'text-black'} focus:border-black focus:outline-none transition-colors`}
                >
                  <option value="" disabled hidden>
                    Project Type
                  </option>
                  <option value="website">Website</option>
                  <option value="app">Mobile App</option>
                  <option value="branding">Branding</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
                <svg
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.projectType && (
                  <p className="text-red-600 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg appearance-none ${formData.budget === '' ? 'text-black/50' : 'text-black'} focus:border-black focus:outline-none transition-colors`}
                >
                  <option value="" disabled hidden>
                    Budget
                  </option>
                  <option value="5-10">$5K - $10K</option>
                  <option value="10-25">$10K - $25K</option>
                  <option value="25-50">$25K - $50K</option>
                  <option value="50+">$50K+</option>
                  <option value="custom">Custom / Not sure</option>
                </select>
                <svg
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.budget && (
                  <p className="text-red-600 text-sm mt-1">{errors.budget}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={1}
              className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5 text-lg placeholder:text-black/50 text-black focus:placeholder:text-black focus:border-black focus:outline-none transition-colors resize-none"
            />

            {/* Submit Button */}
            <div className="mt-2 flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-14 py-3 lg:w-auto w-full bg-black text-white text-base font-medium rounded-full hover:bg-zinc-800 transition-colors"
              >
                Submit
              </button>
            </div>
        
          </div>
            <div className="flex justify-end -mr-20 -mt-12">
        <FormDownIcon />
      </div>
        </div>
      </div>
    </section>
  );
}