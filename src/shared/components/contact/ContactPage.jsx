import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Facebook = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918754659663";
    const text = `Hello, I have an inquiry:\n\n Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-[#F8F6F0] text-[#182321] min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] min-h-[250px] flex flex-col items-center justify-center overflow-hidden bg-[#123C3A]">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a5552] via-[#123C3A] to-[#0c2827]"></div>
        
        {/* Subtle decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D8B56A] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1a5552] rounded-full mix-blend-multiply filter blur-[80px] opacity-50"></div>
        
        {/* Gold Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D8B56A]/60 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-6 sm:-mt-10 md:-mt-14">
          <h1 className="font-serif-spiritual text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#F8F5EE] drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] tracking-wide">
            Contact us
          </h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 sm:w-16 h-[1px] bg-[#D8B56A]/50"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D8B56A]"></div>
            <div className="w-8 sm:w-16 h-[1px] bg-[#D8B56A]/50"></div>
          </div>
        </div>
      </section>

      {/* Main Content (Overlapping Card) */}
      <section className="relative z-20 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 md:-mt-24 pb-20">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(18,60,58,0.15)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Get in Touch */}
          <div className="w-full lg:w-2/5 p-8 sm:p-10 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#E5E0D5]">
            <h2 className="font-serif text-[#123C3A] text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-[#4D4A43] text-sm sm:text-base mb-10 leading-relaxed">
              We are dedicated to helping devotees perform Thila Homam and other Pitru rituals in Rameswaram. Reach out to us for complete guidance.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#123C3A] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#123C3A] mb-1">Head Office</h4>
                  <p className="text-[#4D4A43] text-sm leading-relaxed">
                    7, New St, near hotel duwaraka,<br />
                    Rameswaram, Tamil Nadu 623526
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#123C3A] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#123C3A] mb-1">Email Us</h4>
                  <a href="mailto:rameswaramthilahomam@gmail.com" className="text-[#4D4A43] text-sm hover:text-[#B88635] transition-colors break-all">
                    rameswaramthilahomam@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#123C3A] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#123C3A] mb-1">Call Us</h4>
                  <a href="tel:+918754659663" className="text-[#4D4A43] text-sm hover:text-[#B88635] transition-colors">
                    Phone : +91 87546 59663
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {/* <div className="mt-12">
              <h4 className="font-bold text-[#123C3A] mb-4">Follow our social media</h4>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-[#123C3A] text-white rounded-full flex items-center justify-center hover:bg-[#B88635] transition-colors shadow-sm">
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-[#123C3A] text-white rounded-full flex items-center justify-center hover:bg-[#B88635] transition-colors shadow-sm">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 bg-[#123C3A] text-white rounded-full flex items-center justify-center hover:bg-[#B88635] transition-colors shadow-sm">
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a href="#" aria-label="Youtube" className="w-10 h-10 bg-[#123C3A] text-white rounded-full flex items-center justify-center hover:bg-[#B88635] transition-colors shadow-sm">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div> */}
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-3/5 p-8 sm:p-10 md:p-12 lg:p-16">
            <h2 className="font-serif text-[#123C3A] text-3xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-[#123C3A]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#F8F6F0] border-none rounded-xl px-4 py-3.5 text-sm text-[#182321] placeholder-[#4D4A43]/50 focus:ring-2 focus:ring-[#B88635] focus:outline-none transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-[#123C3A]">Company / Family Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#F8F6F0] border-none rounded-xl px-4 py-3.5 text-sm text-[#182321] placeholder-[#4D4A43]/50 focus:ring-2 focus:ring-[#B88635] focus:outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#123C3A]">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#F8F6F0] border-none rounded-xl px-4 py-3.5 text-sm text-[#182321] placeholder-[#4D4A43]/50 focus:ring-2 focus:ring-[#B88635] focus:outline-none transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#123C3A]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#F8F6F0] border-none rounded-xl px-4 py-3.5 text-sm text-[#182321] placeholder-[#4D4A43]/50 focus:ring-2 focus:ring-[#B88635] focus:outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-[#123C3A]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8F6F0] border-none rounded-xl px-4 py-3.5 text-sm text-[#182321] placeholder-[#4D4A43]/50 focus:ring-2 focus:ring-[#B88635] focus:outline-none transition-shadow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#123C3A]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8F6F0] border-none rounded-xl px-4 py-3.5 text-sm text-[#182321] placeholder-[#4D4A43]/50 focus:ring-2 focus:ring-[#B88635] focus:outline-none transition-shadow resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#123C3A] text-[#F8F5EE] py-4 rounded-xl font-bold font-sans hover:bg-[#B88635] hover:shadow-[0_8px_20px_rgba(184,134,53,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#123C3A] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[85rem] mx-auto">
          <div className="w-full h-[300px] md:h-[420px] relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.967357733856!2d79.31457019999999!3d9.2853702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e356e3433f51%3A0x43008702b080ada1!2sRameswaram%20thilahomam!5e0!3m2!1sen!2sin!4v1789643729142!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Rameswaram Thila Homam Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
