import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const navigate = useNavigate()

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' },
  ]

  const services = [
    { id: 'thila-homam', label: 'Thila Homam At Rameswaram' },
    { id: 'thithi', label: 'Thithi At Rameswaram' },
    { id: 'asthi-visarjan', label: 'Asthi Visarjan In Rameswaram' },
    { id: 'pitru-paksha', label: 'Pitru Paksha Shradh In Rameswaram' },
    { id: 'kala-sarpa', label: 'Sarpa Shanthi Pooja' },
    { id: 'kasi-yatra', label: 'Kasi & Rameswaram Yatra' },
  ]

  const handleLinkClick = (id) => {
    if (id === 'home') {
      navigate('/')
    } else {
      navigate(`/${id}`)
    }
  }

  return (
    <footer className="bg-[#F8F6F0] text-black relative overflow-hidden border-t border-[#C89B4A]/20">
      {/* Subtle Spiritual Top Border & Motif */}
      <div className="w-full border-t border-[#C89B4A]/30 relative flex items-center justify-center">
        <div className="absolute -top-3 px-4 bg-[#F8F6F0] text-[#C89B4A] flex items-center gap-2 text-xs tracking-widest uppercase font-cinzel">
          <span>ॐ</span>
          <span>नमः</span>
          <span>शिवाय</span>
          <span>ॐ</span>
        </div>
      </div>

      <div className="max-w-[85rem] xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 cursor-pointer group focus:outline-none bg-transparent border-none p-0 m-0 text-left"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Rameswaram Thila Homam Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src={`${import.meta.env.BASE_URL}logo2.png`}
                alt="Rameswaram Thila Homam Text"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </button>

            <p className="text-[15px] font-normal text-black leading-relaxed max-w-sm pt-2">
              Traditional Vedic rituals performed with devotion, faith and spiritual purpose for ancestral peace and divine grace at the sacred shore of Rameswaram.
            </p>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-spiritual text-[19px] font-medium text-[#123C3A] tracking-wide border-b border-[#123C3A]/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[15px] text-black">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-[#C89B4A] transition-colors flex items-center gap-2 cursor-pointer text-left font-normal"
                  >
                    <span className="text-[#C89B4A] text-sm">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-spiritual text-[19px] font-medium text-[#123C3A] tracking-wide border-b border-[#123C3A]/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3 text-[15px] text-black">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleLinkClick(service.id)}
                    className="hover:text-[#C89B4A] transition-colors flex items-center gap-2 cursor-pointer text-left font-normal"
                  >
                    <span className="text-[#C89B4A] text-sm">›</span>
                    <span>{service.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-spiritual text-[19px] font-medium text-[#123C3A] tracking-wide border-b border-[#123C3A]/10 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-[15px] text-black font-normal">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C89B4A] shrink-0" />
                <span>7, New St, near hotel duwaraka, Rameswaram, Tamil Nadu 623526</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C89B4A] shrink-0" />
                <a href="tel:+918754659663" className="hover:text-[#C89B4A] transition-colors">
                  +91 87546 59663
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C89B4A] shrink-0" />
                <a href="mailto:rameswaramthilahomam@gmail.com" className="hover:text-[#C89B4A] transition-colors">
                  rameswaramthilahomam@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Thin Gold Divider */}
        <div className="mt-12 pt-6 border-t border-[#123C3A]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] md:text-[15px] text-black font-sans text-center md:text-left font-normal">
          <p className="leading-relaxed">
            © 2026 Rameswaram Thila Homam. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span>Developed by</span>
            <a
              href="https://lowcostwebdesign.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#123C3A] hover:text-[#C89B4A] transition-colors whitespace-nowrap font-normal"
            >
              Low Cost Web Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}