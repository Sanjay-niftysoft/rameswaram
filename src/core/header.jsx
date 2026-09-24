import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function Header({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [poojaDropdownOpen, setPoojaDropdownOpen] = useState(false)
  
  const navigate = useNavigate()
  const location = useLocation()
  const activeTab = location.pathname.substring(1) || 'home'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    {
      id: 'pooja-homam',
      label: 'Pooja & Homam',
      hasDropdown: true,
      subItems: [
        { id: 'thila-homam', label: 'Thila Homam At Rameswaram' },
        { id: 'thithi', label: 'Thithi At Rameswaram' },
        { id: 'kasi-yatra', label: 'Kasi & Rameswaram Yatra' },
        { id: 'asthi-visarjan', label: 'Asthi Visarjan In Rameswaram' },
        { id: 'pitru-paksha', label: 'Pitru Paksha Shradh In Rameswaram' },
        { id: 'kala-sarpa', label: 'Sarpa Shanthi Pooja' },
      ],
    },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
  ]

  const handleNavClick = (id) => {
    if (id === 'home') {
      navigate('/')
    } else {
      navigate(`/${id}`)
    }
    setMobileMenuOpen(false)
    setPoojaDropdownOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(18,60,58,0.06)] border-b border-[#D8B56A]/30 py-1.5 md:py-2'
          : 'bg-[#F8F6F0] border-b border-[#D8B56A]/20 py-2 md:py-3'
      }`}
    >
      <div className="w-full px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto flex items-center justify-between gap-2">
        {/* Left: Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-1 min-w-0"
        >
          <div className="relative flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Rameswaram Thila Homam Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <img
              src={`${import.meta.env.BASE_URL}logo2.png`}
              alt="Rameswaram Thila Homam Text"
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain object-left"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        </button>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-10 flex-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setPoojaDropdownOpen(true)}
                  onMouseLeave={() => setPoojaDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2 xl:px-3 py-2.5 text-[14px] lg:text-[15px] xl:text-[16px] font-medium transition-colors flex items-center gap-1 xl:gap-1.5 cursor-pointer whitespace-nowrap ${
                      isActive || poojaDropdownOpen
                        ? 'text-[#000000] font-semibold'
                        : 'text-[#000000] hover:text-[#123C3A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 xl:w-4 xl:h-4 text-[#D8B56A] transition-transform duration-200 ${
                        poojaDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 w-72 xl:w-80 pt-2 transition-all duration-200 ${
                      poojaDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 translate-y-2 pointer-events-none invisible'
                    }`}
                  >
                    <div className="bg-[#FFFFFF] rounded-xl shadow-[0_10px_30px_rgba(18,60,58,0.12)] border border-[#D8B56A]/30 p-2 overflow-hidden">
                      <div className="text-[11px] xl:text-[12px] font-semibold tracking-wider text-[#D8B56A] uppercase px-3 py-1.5 border-b border-[#EEF2ED]">
                        Sacred Vedic Services
                      </div>
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className="w-full text-left px-3 py-2 xl:py-2.5 rounded-lg hover:bg-[#EEF2ED] transition-colors group/sub cursor-pointer"
                        >
                          <div className="text-[14px] lg:text-[15px] xl:text-[15px] font-sans font-medium text-[#000000] group-hover/sub:text-[#D8B56A] transition-colors">
                            {sub.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-2 xl:px-3 py-2.5 text-[14px] lg:text-[15px] xl:text-[16px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#000000] font-semibold'
                    : 'text-[#000000] hover:text-[#123C3A]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[3px] bg-[#D8B56A] rounded-full transition-all" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right: Contact Us CTA Button */}
        <div className="hidden lg:flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#123C3A] text-[#F8F6F0] font-sans font-medium text-sm tracking-wide shadow-md hover:shadow-lg hover:bg-[#0c2827] active:scale-90 active:bg-[#D8B56A] active:text-[#000000] border border-[#D8B56A]/40 transition-all duration-200 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-[#D8B56A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-2 sm:px-3 py-1.5 rounded-lg bg-[#123C3A] text-[#F8F6F0] text-[11px] sm:text-xs font-medium border border-[#D8B56A]/40 flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3 h-3 text-[#D8B56A] hidden sm:block" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1 sm:p-2 rounded-lg text-[#123C3A] hover:bg-[#EEF2ED] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F8F6F0] border-b border-[#D8B56A]/30 px-5 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn z-50">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            if (item.hasDropdown) {
              return (
                <div key={item.id} className="py-1">
                  <button
                    onClick={() => setPoojaDropdownOpen(!poojaDropdownOpen)}
                    className="w-full flex items-center justify-between py-2 text-[17px] font-medium text-black"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D8B56A] transition-transform ${
                        poojaDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {poojaDropdownOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-2 border-l-2 border-[#D8B56A]/40 ml-2 mt-1">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className="w-full text-left py-2 text-[15px] font-medium text-black hover:text-[#C89B4A]"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2.5 text-[17px] font-medium border-b border-[#EEF2ED] transition-colors flex items-center justify-between ${
                  isActive ? 'text-[#000000] font-semibold' : 'text-[#000000]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#D8B56A]" />}
              </button>
            )
          })}


        </div>
      )}
    </header>
  )
}
