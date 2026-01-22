"use client";

import { useState, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
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
    const { name, value } = e.target || e;
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
    <section className="w-full max-w-6xl mx-auto px-5 sm:py-8 py-2 md:py-10">

      <div className="w-full flex lg:flex-row flex-col gap-2 lg:gap-4">

        {/* Left side - Heading */}
        <div className="lg:w-[48%] w-full flex flex-col ">
          <span className="font-extrabold sm:text-6xl text-2xl sm:mt-12  text-[#26164F] uppercase leading-tight">
            LET'S TALK ABOUT YOUR PROJECT.
          </span>
          <p className="font-light text-gray-600 mt-4 text-lg">
            Share a few details.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="lg:w-[55%] w-full">



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

            {/* Project Type and Budget - CUSTOM DROPDOWNS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              {/* Project Type */}
              <div className="relative">
                <Listbox
                  value={formData.projectType}
                  onChange={(value) => handleChange({ name: 'projectType', value })}
                >
                  <ListboxButton type="button" className="relative w-full border-b border-[#7D7D7D] pb-3.5 text-left text-lg cursor-default focus:border-black focus:outline-none transition-colors data-open:border-black">
                    <span className={`block truncate ${!formData.projectType ? 'text-black/50' : 'text-black'}`}>
                      {formData.projectType || 'Project Type'}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute left-0 top-full z-[1000] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm transition duration-200 ease-in-out data-closed:opacity-0 data-closed:translate-y-1"
                  >
                    {[
                      'Website',
                      'Mobile App',
                      'Branding',
                      'E-commerce',
                      'Other'
                    ].map((type) => (
                      <ListboxOption
                        key={type}
                        value={type}
                        className="group relative cursor-pointer select-none py-3 pl-10 pr-4 hover:bg-black hover:text-white text-gray-900 transition-colors"
                      >
                        <span className="block truncate group-data-selected:font-semibold font-normal">
                          {type}
                        </span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black group-hover:text-white group-data-selected:visible invisible">
                          ✓
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              {/* Budget */}
              <div className="relative">
                <Listbox
                  value={formData.budget}
                  onChange={(value) => handleChange({ name: 'budget', value })}
                >
                  <ListboxButton type="button" className="relative w-full border-b border-[#7D7D7D] pb-3.5 text-left text-lg cursor-default focus:border-black focus:outline-none transition-colors data-open:border-black">
                    <span className={`block truncate ${!formData.budget ? 'text-black/50' : 'text-black'}`}>
                      {formData.budget || 'Budget'}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute left-0 top-full z-[1000] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm transition duration-200 ease-in-out data-closed:opacity-0 data-closed:translate-y-1"
                  >
                    {[
                      '$5K - $10K',
                      '$10K - $25K',
                      '$25K - $50K',
                      '$50K+',
                      'Custom / Not sure'
                    ].map((option) => (
                      <ListboxOption
                        key={option}
                        value={option}
                        className="group relative cursor-pointer select-none py-3 pl-10 pr-4 hover:bg-black hover:text-white text-gray-900 transition-colors"
                      >
                        <span className="block truncate group-data-selected:font-semibold font-normal">
                          {option}
                        </span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black group-hover:text-white group-data-selected:visible invisible">
                          ✓
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
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
            <div className="mt-2 flex justify-start sm:items-start">
              <button
                onClick={handleSubmit}
                className="px-14 py-3 lg:w-auto w-full bg-black text-white text-base font-medium rounded-full justify-start sm:items-start hover:bg-zinc-800 transition-colors"
              >
                Submit
              </button>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
}