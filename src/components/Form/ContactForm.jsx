"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";

import FormUpIcon from "../../components/Icons/FormUpIcon";
import FormDownIcon from "../Icons/FormDownIcon";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';


export default function ContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";

    if (!formData.projectType)
      newErrors.projectType = "Please select project type";
    if (!formData.budget) newErrors.budget = "Please select budget";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target || e;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      });

      // Redirect
      router.push("/thank-you");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-5 py-2 md:py-16">
      <div className="-ml-18 -mb-12">
        <FormUpIcon />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-9">
        {/* FORM FIELDS SAME AS YOUR CODE */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5
                       text-lg placeholder:text-black/50 text-black focus:placeholder:text-black
                       focus:border-black focus:outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5
                         text-lg placeholder:text-black/50 text-black focus:placeholder:text-black
                         focus:border-black focus:outline-none transition-colors"
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
              className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5
                         text-lg placeholder:text-black/50 text-black focus:placeholder:text-black
                         focus:border-black focus:outline-none transition-colors"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5
                       text-lg placeholder:text-black/50 text-black focus:placeholder:text-black
                       focus:border-black focus:outline-none transition-colors"
          />
          {errors.company && (
            <p className="text-red-600 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="relative">
            <Listbox
              value={formData.projectType}
              onChange={(value) => handleChange({ name: 'projectType', value })}
            >
              <ListboxButton type="button" className="relative w-full border-b border-[#7D7D7D] pb-3.5 text-left text-lg cursor-default focus:border-black focus:outline-none transition-colors data-open:border-black">
                <span className={`block truncate ${!formData.projectType ? 'text-black/50' : 'text-black'}`}>
                  {formData.projectType === 'app' ? 'Mobile App' :
                    formData.projectType === 'branding' ? 'Branding' :
                      formData.projectType === 'ecommerce' ? 'E-commerce' :
                        formData.projectType === 'website' ? 'Website' :
                          formData.projectType === 'other' ? 'Other' :
                            formData.projectType || 'Project Type'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-100 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm transition duration-200 ease-in-out data-closed:opacity-0 data-closed:translate-y-1"
              >
                {[
                  { value: 'website', label: 'Website' },
                  { value: 'app', label: 'Mobile App' },
                  { value: 'branding', label: 'Branding' },
                  { value: 'ecommerce', label: 'E-commerce' },
                  { value: 'other', label: 'Other' }
                ].map((type) => (
                  <ListboxOption
                    key={type.value}
                    value={type.value}
                    className="group relative cursor-pointer select-none py-3 pl-10 pr-4 hover:bg-black hover:text-white text-gray-900 transition-colors"
                  >
                    <span className="block truncate group-data-selected:font-semibold font-normal">
                      {type.label}
                    </span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black group-hover:text-white group-data-selected:visible invisible">
                      ✓
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>

          <div className="relative">
            <Listbox
              value={formData.budget}
              onChange={(value) => handleChange({ name: 'budget', value })}
            >
              <ListboxButton type="button" className="relative w-full border-b border-[#7D7D7D] pb-3.5 text-left text-lg cursor-default focus:border-black focus:outline-none transition-colors data-open:border-black">
                <span className={`block truncate ${!formData.budget ? 'text-black/50' : 'text-black'}`}>
                  {formData.budget === '5-10' ? '$5K - $10K' :
                    formData.budget === '10-25' ? '$10K - $25K' :
                      formData.budget === '25-50' ? '$25K - $50K' :
                        formData.budget === '50+' ? '$50K+' :
                          formData.budget === 'custom' ? 'Custom / Not sure' :
                            formData.budget || 'Budget'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-100 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm transition duration-200 ease-in-out data-closed:opacity-0 data-closed:translate-y-1"
              >
                {[
                  { value: '5-10', label: '$5K - $10K' },
                  { value: '10-25', label: '$10K - $25K' },
                  { value: '25-50', label: '$25K - $50K' },
                  { value: '50+', label: '$50K+' },
                  { value: 'custom', label: 'Custom / Not sure' }
                ].map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option.value}
                    className="group relative cursor-pointer select-none py-3 pl-10 pr-4 hover:bg-black hover:text-white text-gray-900 transition-colors"
                  >
                    <span className="block truncate group-data-selected:font-semibold font-normal">
                      {option.label}
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

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={1}
          className="w-full bg-transparent border-b border-[#7D7D7D] pb-3.5
                     text-lg placeholder:text-black/50 text-black focus:placeholder:text-black
                     focus:border-black focus:outline-none transition-colors resize-none"
        />

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="px-14 py-3 lg:w-auto w-full bg-black text-white text-base font-medium
                       rounded-full hover:bg-zinc-800 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="flex justify-end -mr-20 -mt-12">
        <FormDownIcon />
      </div>

    </div>
  );
}
