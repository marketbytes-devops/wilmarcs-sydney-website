
'use client'

import { useState } from 'react'
import FormUpIcon from '../Icons/FormUpIcon'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Optional: Show loading state or disable button here
    console.log('Form submitted with data:', formData)

    try {
      // Example - replace with your real API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! Your message has been sent.')
        // Reset form after successful submit
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please check your connection.')
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-5 py-12 md:py-16">
        <FormUpIcon/>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-9">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                     text-lg placeholder:text-gray-500 text-gray-900 
                     focus:border-black focus:outline-none transition-colors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                       text-lg placeholder:text-gray-500 text-gray-900 
                       focus:border-black focus:outline-none transition-colors"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                       text-lg placeholder:text-gray-500 text-gray-900 
                       focus:border-black focus:outline-none transition-colors"
          />
        </div>

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                     text-lg placeholder:text-gray-500 text-gray-900 
                     focus:border-black focus:outline-none transition-colors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="relative">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                         text-lg text-gray-900 appearance-none 
                         focus:border-black focus:outline-none transition-colors"
            >
              <option value="" disabled hidden>Project Type</option>
              <option value="website">Website</option>
              <option value="app">Mobile App</option>
              <option value="branding">Branding</option>
              <option value="ecommerce">E-commerce</option>
              <option value="other">Other</option>
            </select>
            <svg className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                         text-lg text-gray-900 appearance-none 
                         focus:border-black focus:outline-none transition-colors"
            >
              <option value="" disabled hidden>Budget</option>
              <option value="5-10">$5K - $10K</option>
              <option value="10-25">$10K - $25K</option>
              <option value="25-50">$25K - $50K</option>
              <option value="50+">$50K+</option>
              <option value="custom">Custom / Not sure</option>
            </select>
            <svg className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-transparent border-b border-gray-400 pb-3.5 
                     text-lg placeholder:text-gray-500 text-gray-900 
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
    </div>
  )
}