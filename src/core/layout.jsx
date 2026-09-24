import React, { useState, useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './header.jsx'
import Footer from './footer.jsx'
import { X, Send, CheckCircle2, Phone, PhoneCall, MessageCircle } from 'lucide-react'

export default function Layout() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false)
  const [selectedRitual, setSelectedRitual] = useState('Rameswaram Thila Homam')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    gothram: '',
  })

  const handleOpenEnquiry = (ritualName = 'Rameswaram Thila Homam') => {
    setSelectedRitual(ritualName)
    setEnquiryModalOpen(true)
    setSubmitted(false)
  }

  const handleSubmitModal = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEnquiryModalOpen(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#182321] selection:bg-[#D8B56A]/30 selection:text-[#123C3A]">
      {/* Sticky Header */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        <Outlet context={{ onOpenEnquiry: handleOpenEnquiry }} />
      </main>

      {/* Spiritual Footer */}
      <Footer />

      {/* Quick Enquiry Modal */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl border border-[#D8B56A]/50 shadow-2xl p-6 sm:p-8 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setEnquiryModalOpen(false)}
              aria-label="Close Modal"
              className="absolute top-4 right-4 p-2 rounded-full text-[#182321]/60 hover:text-[#123C3A] hover:bg-[#EEF2ED] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="text-center mb-6">
              <span className="text-[11px] font-cinzel font-semibold tracking-[0.2em] text-[#D8B56A] uppercase">
                Sacred Vedic Consultation
              </span>
              <h3 className="font-serif-spiritual text-2xl sm:text-3xl font-bold text-[#123C3A] mt-1">
                Enquire About {selectedRitual}
              </h3>
              <p className="text-xs sm:text-sm text-[#182321]/70 mt-1">
                Connect with our head priest for auspicious date calculation and arrangements.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-serif-spiritual text-2xl font-bold text-[#123C3A]">
                  Om Namah Shivaya
                </h4>
                <p className="text-sm text-[#182321]/80 mt-1">
                  Thank you! Our Sastrigal will call you back on your number shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitModal} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#123C3A] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8B56A]/40 bg-[#F8F6F0]/50 text-sm focus:outline-none focus:border-[#123C3A] focus:bg-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123C3A] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D8B56A]/40 bg-[#F8F6F0]/50 text-sm focus:outline-none focus:border-[#123C3A] focus:bg-[#FFFFFF]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#123C3A] uppercase tracking-wider mb-1">
                      Expected Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#D8B56A]/40 bg-[#F8F6F0]/50 text-xs sm:text-sm focus:outline-none focus:border-[#123C3A] focus:bg-[#FFFFFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#123C3A] uppercase tracking-wider mb-1">
                      Gothram / Nakshatram
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Koushika, Rohini"
                      value={formData.gothram}
                      onChange={(e) => setFormData({ ...formData, gothram: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#D8B56A]/40 bg-[#F8F6F0]/50 text-xs sm:text-sm focus:outline-none focus:border-[#123C3A] focus:bg-[#FFFFFF]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#123C3A] text-[#F8F6F0] font-medium text-sm border border-[#D8B56A] shadow-md hover:bg-[#0c2827] flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4 text-[#D8B56A]" />
                    <span>Submit Sacred Enquiry</span>
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-[#EEF2ED] flex items-center justify-around text-xs text-[#123C3A]">
              <a href="tel:+918754659663" className="flex items-center gap-1.5 hover:underline font-medium">
                <Phone className="w-3.5 h-3.5 text-[#D8B56A]" />
                <span>+91 87546 59663</span>
              </a>
              <span>•</span>
              <a
                href="https://wa.me/918754659663"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:underline font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D8B56A]" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons: Call & WhatsApp */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3.5">
        {/* Fixed Call Button (above WhatsApp) */}
        <a
          href="tel:+918754659663"
          className="relative group w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#123C3A] hover:bg-[#0b2725] text-white border-2 border-[#D8B56A] shadow-[0_4px_14px_rgba(18,60,58,0.45)] hover:shadow-[0_8px_22px_rgba(18,60,58,0.65)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Call Now +91 87546 59663"
          title="Call Now: +91 87546 59663"
        >
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD27D] group-hover:rotate-12 transition-transform duration-300" />

          {/* Desktop Hover Tooltip (1024px+) */}
          <span className="hidden lg:group-hover:flex absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#123C3A] text-[#F8F6F0] text-xs font-medium tracking-wide whitespace-nowrap border border-[#D8B56A]/50 shadow-xl items-center gap-1 pointer-events-none transition-opacity duration-200">
            Call: +91 87546 59663
          </span>
        </a>

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/918754659663"
          target="_blank"
          rel="noreferrer"
          className="relative group w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_22px_rgba(37,211,102,0.65)] hover:bg-[#128C7E] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Now"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current group-hover:scale-110 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Desktop Hover Tooltip (1024px+) */}
          <span className="hidden lg:group-hover:flex absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#128C7E] text-white text-xs font-medium tracking-wide whitespace-nowrap shadow-xl items-center gap-1 pointer-events-none transition-opacity duration-200">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}
