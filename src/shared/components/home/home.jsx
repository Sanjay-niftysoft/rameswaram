import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ChevronLeft, ChevronRight, ArrowRight, Flame, Users, ShieldCheck, 
  Image as ImageIcon, Star, BookOpen, Flower2, HeartHandshake, Sparkles, 
  Calendar, CheckCircle2, Clock, MapPin, PhoneCall, MessageCircle, Send
} from "lucide-react";
import VideoSection from "../videos/VideoSection";


// Lotus icon component matching traditional Vedic symbolism
const LotusMotif = ({ className = 'w-7 h-7 text-[#D8B56A]' }) => (
  <svg
    viewBox="0 0 48 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 2C22.5 7.5 19 14 13 18C17.5 18 22 15 24 9C26 15 30.5 18 35 18C29 14 25.5 7.5 24 2Z" />
    <path d="M24 10C21.5 16 16.5 22 8 24C13.5 24.5 19.5 22 24 16.5C28.5 22 34.5 24.5 40 24C31.5 22 26.5 16 24 10Z" opacity="0.85" />
    <path d="M24 18C20 23.5 13.5 28 3 29C9.5 29.5 17 27 24 22C31 27 38.5 29.5 45 29C34.5 28 28 23.5 24 18Z" opacity="0.7" />
    <circle cx="24" cy="30.5" r="1.5" />
  </svg>
)

// Traditional brass floral flourish divider beneath heading
const VedicFlourish = ({ className = 'text-[#D8B56A]' }) => (
  <div className={`flex items-center justify-center gap-2 my-3 ${className}`}>
    <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-current opacity-70" />
    <svg viewBox="0 0 60 16" className="w-10 sm:w-14 h-4 fill-current opacity-90">
      <path d="M30 3C32 6 36 8 40 8C36 8.5 32 10 30 13C28 10 24 8.5 20 8C24 8 28 6 30 3Z" />
      <circle cx="14" cy="8" r="1.5" />
      <circle cx="46" cy="8" r="1.5" />
      <line x1="2" y1="8" x2="10" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="8" x2="58" y2="8" stroke="currentColor" strokeWidth="1" />
    </svg>
    <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-current opacity-70" />
  </div>
)

const slidesData = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}banner/banner1.png`,
    alt: 'Rameswaram Thila Homam Sacred Gold Mandala with Ganesha and Deepam',
    eyebrow: 'SACRED VEDIC RITUALS',
    heading: 'Rameswaram Thila Homam',
    description:
      'Traditional Vedic rituals performed with devotion for ancestral blessings and spiritual peace.',
    ctaText: 'Enquiry Now',
    ctaTarget: 'contact',
    textColor: 'text-[#123C3A]',
    eyebrowColor: 'text-[#123C3A]/90',
    descColor: 'text-[#182321]/90',
    accentColor: 'text-[#D8B56A]',
    overlayClass: 'bg-gradient-to-b from-amber-50/10 via-transparent to-amber-900/10',
    imageClass: 'object-center md:object-right xl:object-center',
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}banner/banner2.png`,
    alt: 'Sacred Ritual with Hanging Diya Lamps and Nandi Temple Mandapam',
    eyebrow: 'ANCESTRAL BLESSINGS',
    heading: 'Rameswaram Thila Homam',
    description:
      'Alleviate generational afflictions and seek the divine grace of your ancestors through sacred rites.',
    ctaText: 'Thila Homam',
    ctaTarget: 'thila-homam',
    textColor: 'text-[#FFFFFF]',
    eyebrowColor: 'text-[#FFD27D]',
    descColor: 'text-amber-50/95',
    accentColor: 'text-[#FFD27D]',
    overlayClass: 'bg-black/20 backdrop-brightness-[0.92]',
    imageClass: 'object-center md:object-right xl:object-center',
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}banner/banner3.png`,
    alt: 'Rameswaram Ramanathaswamy Temple Gopurams and Holy Corridors',
    eyebrow: 'SACRED CLEANSING',
    heading: 'Rameswaram Thila Homam',
    description:
      'Purify your soul with a holy bath at the sacred theerthams before the auspicious rituals.',
    ctaText: 'About Us',
    ctaTarget: 'about',
    textColor: 'text-[#123C3A]',
    eyebrowColor: 'text-[#123C3A]/90',
    descColor: 'text-[#182321]/90',
    accentColor: 'text-[#D8B56A]',
    overlayClass: 'bg-gradient-to-b from-amber-50/10 via-transparent to-amber-900/10',
  },
]

function HomeBannerSlider({ onOpenEnquiry, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length)
  }, [])

  // Auto-slide every 5.5 seconds unless hovered/paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
  }

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide() // swiped left
      } else {
        prevSlide() // swiped right
      }
    }
  }

  return (
    <section
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Rameswaram Thila Homam Hero Slider"
      className="relative w-full min-h-[480px] h-[500px] sm:h-[530px] md:h-[570px] lg:h-[620px] overflow-hidden select-none focus:outline-none bg-[#F8F6F0]"
    >
      {/* Slides Background Images */}
      {slidesData.map((slide, index) => {
        const isActive = index === currentSlide
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover ${slide.imageClass || 'object-center'}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Subtle Overlay */}
            <div className={`absolute inset-0 ${slide.overlayClass}`} />
          </div>
        )
      })}

      {/* Center Fixed Content Overlay - Consistent for all slides */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl mx-auto px-4 xs:px-6 sm:px-12 md:px-16 lg:px-8 text-center flex flex-col items-center justify-center pointer-events-auto mt-2 sm:mt-0">
          {slidesData.map((slide, index) => {
            const isActive = index === currentSlide
            if (!isActive) return null

            return (
              <div
                key={slide.id}
                className="flex flex-col items-center animate-fadeIn duration-500 w-full"
              >
                {/* Decorative Lotus and Eyebrow */}
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-3">
                  <div className="w-6 sm:w-14 h-[1px] bg-[#D8B56A] opacity-70" />
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <LotusMotif className={`w-4 h-4 sm:w-6 sm:h-6 ${slide.accentColor}`} />
                    <span
                      className={`text-[11px] sm:text-sm font-cinzel font-semibold tracking-[0.2em] sm:tracking-[0.28em] uppercase ${slide.eyebrowColor}`}
                    >
                      {slide.eyebrow}
                    </span>
                  </div>
                  <div className="w-6 sm:w-14 h-[1px] bg-[#D8B56A] opacity-70" />
                </div>

                {/* Main Heading */}
                <h1
                  className={`font-serif-spiritual text-[22px] xs:text-[25px] sm:text-3xl md:text-5xl lg:text-[62px] xl:text-[68px] leading-[1.15] font-bold tracking-tight lg:leading-[1.1] max-w-3xl drop-shadow-sm ${slide.textColor}`}
                >
                  {slide.heading}
                </h1>

                {/* Traditional Decorative Divider Motif */}
                <VedicFlourish className={slide.accentColor} />

                {/* Supporting Text */}
                <p
                  className={`font-sans text-[12px] sm:text-base md:text-lg lg:text-[19px] font-normal leading-relaxed max-w-[280px] sm:max-w-xl md:max-w-2xl text-balance mt-1 sm:mt-2 drop-shadow-xs ${slide.descColor}`}
                >
                  {slide.description}
                </p>

                {/* CTA Button(s) */}
                <div className="mt-3.5 sm:mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full">
                  <button
                    onClick={() => onNavigate && onNavigate(slide.ctaTarget || 'contact')}
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-2 sm:py-3 rounded-xl bg-[#123C3A] text-[#F8F6F0] font-sans font-medium text-xs sm:text-base tracking-wide shadow-[0_6px_20px_rgba(18,60,58,0.35)] hover:shadow-[0_10px_25px_rgba(18,60,58,0.5)] hover:bg-[#0c2827] border border-[#D8B56A] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8B56A] group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>

                  {/* Call Now button beside Enquiry Now - Green Color */}
                  {slide.id === 1 && (
                    <a
                      href="tel:+918754659663"
                      className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-2 sm:py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-sans font-semibold text-xs sm:text-base tracking-wide shadow-[0_6px_20px_rgba(21,128,61,0.35)] hover:shadow-[0_8px_25px_rgba(21,128,61,0.5)] border border-[#4ade80] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4ade80] group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                      <span>Call Now</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-3.5 rounded-full bg-[#F8F6F0]/80 hover:bg-[#FFFFFF] text-[#123C3A] border border-[#D8B56A]/60 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-[#123C3A]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-3.5 rounded-full bg-[#F8F6F0]/80 hover:bg-[#FFFFFF] text-[#123C3A] border border-[#D8B56A]/60 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#123C3A]" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
              index === currentSlide
                ? 'w-7 sm:w-9 h-2.5 bg-[#D8B56A] shadow-sm'
                : 'w-2.5 h-2.5 bg-white/70 hover:bg-white border border-black/10'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

// Lotus SVG for the top of right section
const LotusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c-4-4-6-8.5-6-13a6 6 0 0 1 12 0c0 4.5-2 9-6 13Z" />
    <path d="M12 22c2-4 3.5-7.5 3.5-11.5a3.5 3.5 0 0 0-7 0C8.5 14.5 10 18 12 22Z" />
    <path d="M12 22c1-3 1.5-5 1.5-8.5a1.5 1.5 0 0 0-3 0C10.5 17 11 19 12 22Z" />
  </svg>
)

function WelcomeSection({ onNavigate }) {
  return (
    <section className="w-full bg-[#F8F5EE] py-8 lg:py-12 relative overflow-hidden">
      
      {/* Container */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-14 lg:px-8 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-20 items-center">
        
        {/* Left Side: Visual Composition */}
        <div className="relative w-full aspect-[4/3] lg:aspect-[4/3.5] flex items-center justify-center">
          
          {/* Main Composite Image */}
          <div className="absolute inset-0 w-full h-full lg:scale-110 xl:scale-100 lg:-ml-6 xl:-ml-12 lg:origin-center">
            <img 
              src={`${import.meta.env.BASE_URL}aboutus.png`} 
              alt="Priest performing homam and Vedic Ritual" 
              className="w-full h-full object-contain object-center lg:object-left"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 45% 50%, black 80%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 95% 95% at 45% 50%, black 80%, transparent 100%)'
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full flex flex-col items-start text-left z-10">
          
          {/* About Us Label */}
          <div className="flex flex-col items-start gap-3 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#C89B4A]/50 block" />
              <span className="uppercase font-serif tracking-[0.3em] text-[11px] font-bold text-[#C89B4A]">
                About Us
              </span>
              <div className="w-8 h-[1px] bg-[#C89B4A]/50" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-[#173F3B] text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] leading-[1.15] mb-6 tracking-tight font-medium">
            A Sacred Tradition,<br />
            Performed with Devotion
          </h2>
          

          {/* Body Text */}
          <div className="text-[#405754] text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-2xl space-y-2" style={{color:'black'}}>
            <p>
              Thila Homam is a powerful vedic ritual performed for the peace of souls of the ancestors and family members who died unnaturally. It is also a remedy for someone who is suffering from Pitru Dosha in horoscope. Rameshwaram is the main place for performing Thila homam.
            </p>
            <p>
              We organize the entire homam as per the devotee's requirement including swamy darshan in Rameswaram to performing Visarjanam in Dhanushkodi along with the homam.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 font-medium text-[#173F3B] text-[13px] md:text-[14px]">
              <li className="flex items-start gap-2"><span className="text-[#C89B4A]">•</span> Experienced priests</li>
              <li className="flex items-start gap-2"><span className="text-[#C89B4A]">•</span> Accommodation & Travel</li>
              <li className="flex items-start gap-2"><span className="text-[#C89B4A]">•</span> High quality service</li>
              <li className="flex items-start gap-2"><span className="text-[#C89B4A]">•</span> Complete guidance</li>
            </ul>
          </div>


          {/* Statistics */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mb-10 gap-x-6 sm:gap-x-8 gap-y-6 lg:gap-4 xl:gap-8">
            <div className="flex flex-col items-start text-left shrink-0">
              <span className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-3xl xl:text-[42px] font-semibold text-[#8B5E32] mb-1 tracking-tight leading-none">20+</span>
              <span className="text-[10px] font-bold tracking-wider text-[#405754] uppercase mt-1">Years of Service</span>
            </div>
            
            <div className="hidden md:block w-[1px] h-10 sm:h-12 bg-[#C89B4A]/30 shrink-0" />
            
            <div className="flex flex-col items-start text-left shrink-0">
              <span className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-3xl xl:text-[42px] font-semibold text-[#8B5E32] mb-1 tracking-tight leading-none">10,000+</span>
              <span className="text-[10px] font-bold tracking-wider text-[#405754] uppercase mt-1">Families Guided</span>
            </div>
            
            <div className="hidden md:block w-[1px] h-10 sm:h-12 bg-[#C89B4A]/30 shrink-0" />

            <div className="flex flex-col items-start text-left shrink-0">
              <span className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-3xl xl:text-[42px] font-semibold text-[#8B5E32] mb-1 tracking-tight leading-none">100%</span>
              <span className="text-[10px] font-bold tracking-wider text-[#405754] uppercase mt-1">Tradition & Trust</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => onNavigate && onNavigate('about')}
            className="group inline-flex items-center justify-center gap-3 bg-[#123F3A] text-white px-9 py-4 rounded-xl font-medium text-[15px] hover:bg-[#0d2e2a] hover:shadow-[0_8px_25px_rgba(18,63,58,0.25)] transition-all duration-300 cursor-pointer"
          >
            Know More About Us
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>
      


    </section>
  )
}

const ServiceCard = ({ bgColor, image, title, titleColor, desc, descColor, linkColor, dividerColor, path, onNavigate }) => {
  return (
    <div 
      className={`${bgColor} relative rounded-[18px] hover:rounded-tl-[40px] hover:rounded-br-[40px] p-6 lg:p-7 flex flex-col h-full min-h-[440px] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:z-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-black/5`}
    >
      <div className="flex-1 flex flex-col items-center text-center">
        {/* Icon Image */}
        <div className="mb-5 h-[70px] w-full flex items-center justify-center">
          <img src={image} alt="Service Icon" className="h-full object-contain mix-blend-luminosity" style={{ mixBlendMode: 'normal' }} />
        </div>
        
        {/* Title */}
        <div className="h-[72px] flex items-center justify-center mb-2">
          <h3 className={`font-serif text-[19px] lg:text-[21px] font-bold ${titleColor} leading-[1.25] tracking-wide`}>
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>
        
        {/* Divider */}
        <div className="flex items-center justify-center w-full mb-4 opacity-70">
          <div className={`h-[1px] w-5 ${dividerColor}`}></div>
          <div className={`mx-2 text-[9px] ${dividerColor}`}>✧</div>
          <div className={`h-[1px] w-5 ${dividerColor}`}></div>
        </div>
        
        {/* Description */}
        <div className="h-[110px] flex items-start justify-center px-1">
          <p className={`text-[14px] xl:text-[15px] leading-[1.6] font-medium ${descColor}`}>
            {desc}
          </p>
        </div>
      </div>
      
      {/* Footer / Button */}
      <div className="mt-auto pt-2 flex justify-center">
        <button 
          onClick={() => onNavigate && onNavigate(path)}
          className={`group flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors cursor-pointer ${linkColor}`}
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const LotusIcon2 = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s-8-4-8-12c0-4 4-6 8-6 4 0 8 2 8 6 0 8-8 12-8 12z" />
    <path d="M12 22s-4-6-4-10c0-3 2-4 4-4 2 0 4 1 4 4 0 4-4 10-4 10z" />
    <path d="M12 22v-8" />
  </svg>
);

function Services({ onNavigate }) {
  const services = [
    {
      title: "Thila Homam\nAt Rameswaram",
      desc: "A sacred Vedic ritual performed with sesame offerings to honour ancestors and seek peace, blessings and spiritual well-being.",
      bgColor: "bg-[#5D222A]",
      titleColor: "text-[#FDFBF7]",
      descColor: "text-white",
      linkColor: "text-[#E5C16C] hover:text-[#f8d788]",
      dividerColor: "bg-[#E5C16C]",
      path: "thila-homam",
      image: `${import.meta.env.BASE_URL}services/thila.png`
    },
    {
      title: "Thithi At\nRameswaram",
      desc: "Performing ancestral rituals with deep devotion to departed family members, offer prayers for their eternal peace.",
      bgColor: "bg-[#D3673D]",
      titleColor: "text-[#FDFBF7]",
      descColor: "text-white",
      linkColor: "text-[#FDFBF7] hover:text-[#fff0d6]",
      dividerColor: "bg-[#FDFBF7]",
      path: "thithi",
      image: `${import.meta.env.BASE_URL}services/thithi.png`
    },
    {
      title: "Asthi Visarjan\nIn Rameswaram",
      desc: "A sacred ritual immersing the ashes of departed loved ones in Rameswaram's holy waters, seeking moksha and eternal peace.",
      bgColor: "bg-[#F4EFE1]",
      titleColor: "text-[#3D171C]",
      descColor: "text-[#2a1013]",
      linkColor: "text-[#5D222A] hover:text-[#8a333e]",
      dividerColor: "bg-[#5D222A]",
      path: "asthi-visarjan",
      image: `${import.meta.env.BASE_URL}services/Asthi.png`
    },
    {
      title: "Pitru Paksha\nShradh In\nRameswaram",
      desc: "Special Shradh rituals performed during the auspicious Pitru Paksha period to deeply honour ancestors and seek their divine blessings.",
      bgColor: "bg-[#E0C070]",
      titleColor: "text-[#3D171C]",
      descColor: "text-[#2a1013]",
      linkColor: "text-[#5D222A] hover:text-[#8a333e]",
      dividerColor: "bg-[#5D222A]",
      path: "pitru-paksha",
      image: `${import.meta.env.BASE_URL}services/pitru.png`
    },
    {
      title: "Sarpa Shanthi\nPooja",
      desc: "A traditional Vedic pooja for Sarpa Shanthi, featuring prayers and rituals to reduce malefic effects and restore harmony.",
      bgColor: "bg-[#5D222A]",
      titleColor: "text-[#FDFBF7]",
      descColor: "text-white",
      linkColor: "text-[#E5C16C] hover:text-[#f8d788]",
      dividerColor: "bg-[#E5C16C]",
      path: "kala-sarpa",
      image: `${import.meta.env.BASE_URL}services/kala.png`
    },
    {
      title: "Kasi &\nRameswaram Yatra",
      desc: "Embark on the sacred Kasi & Rameswaram Yatra to attain spiritual liberation and ancestral blessings.",
      bgColor: "bg-[#173F3B]",
      titleColor: "text-[#FDFBF7]",
      descColor: "text-white",
      linkColor: "text-[#E5C16C] hover:text-[#f8d788]",
      dividerColor: "bg-[#E5C16C]",
      path: "kasi-yatra",
      image: `${import.meta.env.BASE_URL}services/thila.png`
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#F0E9D9] pt-8 lg:pt-12 pb-4">
      
      {/* Composite Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/services-bg.jpg`} 
          alt="Spiritual Background" 
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-[120rem] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center text-center mt-4 mb-10 lg:mb-12">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-[#C89B4A]/60" />
            <span className="uppercase font-serif tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold text-[#5D222A] flex items-center gap-1.5 sm:gap-2 text-center">
              <span className="text-[#C89B4A] text-base sm:text-lg">ॐ</span> OUR SERVICES
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-[#C89B4A]/60" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-[#173F3B] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-4 sm:mb-6 font-bold tracking-tight px-2">
            Sacred Vedic Services
          </h2>

          {/* Subtitle */}
          <p className="text-[#4a423a] text-base md:text-[17px] max-w-2xl leading-relaxed mb-6">
            Experience traditional Vedic rituals performed with devotion and<br className="hidden sm:block" /> proper guidance in the sacred land of Rameswaram.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 w-full max-w-[200px]">
            <div className="flex-1 h-[1px] bg-[#C89B4A]/40" />
            <LotusIcon2 className="w-5 h-5 text-[#C89B4A]" />
            <div className="flex-1 h-[1px] bg-[#C89B4A]/40" />
          </div>

        </div>

        {/* Cards Container (Responsive Flex for Centered Orphans) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4 pb-4">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-[340px] md:max-w-none md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] h-auto flex flex-col"
            >
              <ServiceCard {...service} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Gallery = ({ onNavigate }) => {
  const images = [
    { id: 1, src: `${import.meta.env.BASE_URL}gallery/1.png`, alt: 'Sacred Ritual Moment 1' },
    { id: 2, src: `${import.meta.env.BASE_URL}2ndimage.png`, alt: 'Sacred Ritual Moment 2' },
    { id: 3, src: `${import.meta.env.BASE_URL}gallery/3.png`, alt: 'Sacred Ritual Moment 3' },
    { id: 4, src: `${import.meta.env.BASE_URL}gallery/4.png`, alt: 'Sacred Ritual Moment 4' },
    { id: 5, src: `${import.meta.env.BASE_URL}gallery/5.png`, alt: 'Sacred Ritual Moment 5' },
    { id: 6, src: `${import.meta.env.BASE_URL}3ndimage.png`, alt: 'Sacred Ritual Moment 6' },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#F8F5EE] pt-8 lg:pt-12 pb-16 lg:pb-24 border-t border-[#C89B4A]/20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center text-center mb-12 lg:mb-16">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <div className="w-8 sm:w-12 h-[1px] bg-[#C89B4A]/60" />
            <span className="uppercase font-serif tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold text-[#5D222A] flex items-center gap-1.5 sm:gap-2 text-center">
              <span className="text-[#C89B4A] text-base sm:text-lg">ॐ</span> SACRED MOMENTS
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-[#C89B4A]/60" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-[#173F3B] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.15] mb-4 sm:mb-6 font-bold tracking-tight">
            A Glimpse of Devotion
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#4a423a] text-sm md:text-base max-w-2xl leading-relaxed">
            Witness the authenticity, deep devotion, and serene environment in which the Vedic rituals are performed at the holy land of Rameswaram.
          </p>
        </div>

        {/* Gallery Grid (Responsive Flex for Centered Orphans) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#C89B4A]/10 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F3B]/90 via-[#173F3B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <ImageIcon className="w-6 h-6 text-[#C89B4A] mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                <span className="font-serif text-[#F8F5EE] text-lg font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  Vedic Ritual
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="w-full flex justify-center">
          <button 
            onClick={() => onNavigate && onNavigate('gallery')}
            className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#123F3A] text-[#123F3A] px-8 py-3.5 rounded-xl font-medium text-[15px] hover:bg-[#123F3A] hover:text-[#F8F5EE] hover:shadow-[0_8px_25px_rgba(18,63,58,0.2)] transition-all duration-300 cursor-pointer"
          >
            View Complete Gallery
            <ArrowRight className="w-4 h-4 text-[#123F3A] group-hover:text-[#F8F5EE] group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced Vedic Priests",
      desc: "Guided by knowledgeable priests who follow traditional Vedic procedures with sincerity."
    },
    {
      icon: Flame,
      title: "Authentic Rituals & Traditions",
      desc: "Rituals are performed according to established Vedic customs and sacred practices."
    },
    {
      icon: BookOpen,
      title: "Personalised Guidance",
      desc: "We help families understand each ritual and prepare everything required with care."
    },
    {
      icon: Sparkles,
      title: "Complete Ritual Arrangements",
      desc: "From pooja materials to sacred arrangements, we make the process simple and organised."
    },
    {
      icon: Flower2,
      title: "Peaceful Sacred Environment",
      desc: "Experience your rituals in a calm, respectful and spiritually focused setting in Rameswaram."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Family Support",
      desc: "Our team stays available before, during and after the ritual for a smooth experience."
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#EEF2ED] pt-8 lg:pt-12 pb-8 lg:pb-12 border-t border-[#C89B4A]/10">
      
      {/* Decorative Background Elements */}
      {/* Left Temple Illustration Placeholder */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[500px] opacity-[0.04] pointer-events-none mix-blend-multiply flex items-end justify-start">
        <img 
          src={`${import.meta.env.BASE_URL}images/temple-left-bg.png`} 
          alt="" 
          className="w-full object-contain object-bottom origin-bottom-left"
          onError={(e) => e.target.style.display = 'none'}
        />
        {/* Fallback CSS pattern if image is missing */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#173F3B]/40 to-transparent rounded-tr-[100%] blur-3xl -z-10"></div>
      </div>

      {/* Right Mandala & Diya Illustration Placeholder */}
      <div className="absolute right-0 top-0 w-[500px] h-full opacity-[0.03] pointer-events-none mix-blend-multiply flex flex-col justify-between items-end">
        <div className="w-full h-[300px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C89B4A] via-transparent to-transparent opacity-40"></div>
        <img 
          src={`${import.meta.env.BASE_URL}images/mandala-right-bg.png`} 
          alt="" 
          className="w-[300px] object-contain object-right"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#173F3B]/40 to-transparent blur-3xl -z-10"></div>
      </div>

      <div className="max-w-[75rem] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center text-center mb-14 lg:mb-16">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[#C89B4A]/60" />
            <Flower2 className="w-4 h-4 text-[#C89B4A]" />
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#4a423a]">
              WHY CHOOSE US
            </span>
            <div className="w-10 h-[1px] bg-[#C89B4A]/60" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-[#173F3B] text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] mb-5 font-bold tracking-tight">
            Why Families Trust Our Sacred Services
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#4a423a] text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
            A trusted way to perform traditional Vedic rituals in Rameswaram with devotion, authenticity and care.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-[#FDFBF7] border border-[#C89B4A]/20 rounded-[20px] p-6 lg:px-8 lg:py-7 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(23,63,59,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 text-[#C89B4A] transform group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-[42px] h-[42px] stroke-[1.25]" />
              </div>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center w-full mb-5 opacity-60">
                <div className="h-[1px] w-6 bg-[#C89B4A]"></div>
                <div className="mx-2 text-[10px] text-[#C89B4A]">✧</div>
                <div className="h-[1px] w-6 bg-[#C89B4A]"></div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[#173F3B] text-[20px] font-bold mb-3 tracking-wide leading-snug">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#4a423a] text-[14px] leading-[1.65] font-medium opacity-90">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'R. Balasubramanian',
      role: 'Chennai, Tamil Nadu',
      review:
        'We performed Thila Homam for my paternal ancestors with the guidance of the Vadhyar. The rituals were performed with utmost devotion and authenticity right on time. We felt profound peace of mind afterwards.',
    },
    {
      name: 'Suresh Kulkarni',
      role: 'Bengaluru, Karnataka',
      review:
        'Our family was facing persistent marriage delays due to Pithru Dosham. The pandit ji explained each mantra clearly in our mother tongue and conducted the entire homam with complete samagri arranged.',
    },
    {
      name: 'Dr. Venkat Raman',
      role: 'Hyderabad, Telangana',
      review:
        'Clean arrangements, knowledgeable Vedic priests, and peaceful atmosphere. Everything was coordinated seamlessly from Agni Theertham bath to the temple darshan. Highly recommended for every Hindu family.',
    },
    {
      name: 'Priyanka Desai',
      role: 'Pune, Maharashtra',
      review:
        'The priests were highly professional and the sankalpam was done very traditionally. Performing this homam at Rameswaram brought an incredible sense of relief to our entire family.',
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#F8F6F0] pt-8 lg:pt-12 pb-16 lg:pb-24">
      <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center">
        
        {/* Full-width Elfsight Reviews Widget */}
        <div className="w-full min-h-[400px]">
          <div className="elfsight-app-4e4e4242-fb7a-4d69-ac54-e8554a52b8fe" data-elfsight-app-lazy="true"></div>
        </div>

      </div>
    </section>
  );
};

import { useOutletContext } from "react-router-dom";

function Home() {
  const { onOpenEnquiry } = useOutletContext() || {};
  const navigate = useNavigate();
  const onNavigate = (path) => navigate(path === 'home' ? '/' : `/${path}`);
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    ritual: 'Thila Homam',
    date: '',
    members: '1-2',
    notes: '',
  })

  const services = [
    {
      id: 'thila-homam',
      title: 'Rameswaram Thila Homam',
      sanskrit: 'तिल होमम् • पितृ मोक्ष विधी',
      desc: 'The most revered Vedic ritual performed at the sacred sea of Rameswaram using black sesame seeds to liberate departed ancestors and remove Pithru Dosham.',
      benefits: ['Calms departed ancestor souls', 'Removes generational blockages', 'Restores peace & progeny in family'],
      duration: '3 to 4 Hours',
      badge: 'Most Sacred',
    },
    {
      id: 'pithru-tarpanam',
      title: 'Pithru Pinda Dhanam & Tarpanam',
      sanskrit: 'पिण्ड दानम् • तीर्थ तर्पणम्',
      desc: 'Sacred ceremonial offering of cooked rice pinda balls and sesame water at Agni Theertham with precise Vedic mantras for ancestral gratification.',
      benefits: ['Fulfills filial duties & debts', 'Blessings of elders & peace of mind', 'Performed on Amavasya / any holy thithi'],
      duration: '1.5 to 2 Hours',
      badge: 'Ancestral Rites',
    },
    {
      id: 'theertha-snanam',
      title: '22 Holy Theertha Snanam',
      sanskrit: 'द्वाविंशति तीर्थ स्नानम्',
      desc: 'Guided holy bath in all 22 sacred wells inside the historic Sri Ramanathaswamy Temple, starting from Agni Theertham and ending with Koti Theertham.',
      benefits: ['Cleanses accumulated sins & karmas', 'Rejuvenates mind, body & soul', 'Complete Vedic guide provided'],
      duration: '2 to 3 Hours',
      badge: 'Temple Ritual',
    },
    {
      id: 'navagraha-homam',
      title: 'Navagraha Shanti Homam',
      sanskrit: 'नवग्रह शान्ति होमम्',
      desc: 'Powerful fire ritual invoking the nine planetary deities to alleviate doshas, neutralize malefic transitions (Sade Sati, Rahu/Ketu), and usher in prosperity.',
      benefits: ['Neutralizes planetary afflictions', 'Promotes business & career growth', 'Brings auspicious harmony at home'],
      duration: '2 to 3 Hours',
      badge: 'Vedic Homam',
    },
    {
      id: 'mrityunjaya-homam',
      title: 'Maha Mrityunjaya Homam',
      sanskrit: 'महा मृत्युंजय होमम्',
      desc: 'Dedicated to Lord Shiva for good health, rejuvenation, overcoming severe illness, and granting longevity with the sacred Mrityunjaya mantra chanting.',
      benefits: ['Health recovery & longevity', 'Protective spiritual shield', 'Cures fear of untimely mishaps'],
      duration: '3 Hours',
      badge: 'Ayush & Health',
    },
    {
      id: 'sudarshana-homam',
      title: 'Sri Sudarshana Homam',
      sanskrit: 'सुदर्शन चक्र होमम्',
      desc: 'Invoke the supreme protective chakra of Lord Maha Vishnu to dispel negative energies, evil eyes (Drishti), and legal or financial impediments.',
      benefits: ['Eliminates negative energies & drishti', 'Victory over obstacles & distress', 'Invokes auspicious divine protection'],
      duration: '2.5 Hours',
      badge: 'Protection',
    },
  ]

  const ritualSteps = [
    {
      step: '01',
      title: 'Agni Theertham Snanam',
      desc: 'Purification sea bath at the consecrated Agni Theertham where Lord Rama bathed to absolve Brahmahatya dosha.',
    },
    {
      step: '02',
      title: 'Maha Sankalpam',
      desc: 'Sacred intention chanting incorporating your Gothram, Nakshatram, names of ancestors, and family lineage prayers.',
    },
    {
      step: '03',
      title: 'Vedic Thila Homam',
      desc: 'Fire ceremony invoking Agni Deva, Lord Yama, and Ancestral deities with 108 oblations of black sesame & pure cow ghee.',
    },
    {
      step: '04',
      title: 'Pinda Dhanam & Ashirvadam',
      desc: 'Immersion of consecrated pinda into the holy sea, followed by Vedic blessings and prasadam distribution.',
    },
  ]

  const testimonials = [
    {
      name: 'R. Balasubramanian',
      location: 'Chennai, Tamil Nadu',
      review:
        'We performed Thila Homam for my paternal ancestors with the guidance of the Vadhyar. The rituals were performed with utmost devotion and authenticity right on time. We felt profound peace of mind afterwards.',
      ritual: 'Thila Homam & Theertha Snanam',
    },
    {
      name: 'Suresh & Priya Kulkarni',
      location: 'Bengaluru, Karnataka',
      review:
        'Our family was facing persistent marriage delays due to Pithru Dosham. The pandit ji explained each mantra clearly in our mother tongue and conducted the entire homam with complete samagri arranged. Truly grateful.',
      ritual: 'Pithru Dosha Nivarthi',
    },
    {
      name: 'Dr. Venkat Raman',
      location: 'Hyderabad, Telangana',
      review:
        'Clean arrangements, knowledgeable Vedic priests, and peaceful atmosphere. Everything was coordinated seamlessly from Agni Theertham bath to the temple darshan. Highly recommended for every Hindu family.',
      ritual: 'Ancestral Rites & 22 Theertham',
    },
  ]

  const handleSubmitEnquiry = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        ritual: 'Thila Homam',
        date: '',
        members: '1-2',
        notes: '',
      })
    }, 4000)
  }

  return (
    <div className="w-full bg-[#F8F6F0] text-[#182321]">
      {/* 1. HERO BANNER SLIDER (Full Width) */}
      <HomeBannerSlider onOpenEnquiry={onOpenEnquiry} onNavigate={onNavigate} />

      {/* Welcome Section */}
      <WelcomeSection onNavigate={onNavigate} />

      {/* Services Section */}
      <Services onNavigate={onNavigate} />

      {/* Gallery Section */}
      <Gallery onNavigate={onNavigate} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

         {/* 5. DEVOTEE EXPERIENCES & BLESSINGS */}
      <VideoSection videos={[`${import.meta.env.BASE_URL}videos/1 video.mp4`]} title="Glimpses of Our Rituals" />

      
      <Testimonials />

         
      {/* 6. CALL TO ACTION */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-[#123C3A] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D8B56A]/30 via-transparent to-transparent blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-serif font-bold tracking-[0.24em] text-[#D8B56A] uppercase mb-4 block">
            Plan Your Holy Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#F8F5EE] mb-6 leading-[1.2]">
            Perform Authentic Vedic Rituals in Rameswaram
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#F8F5EE]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Consult with our experienced Vedic priests to find the most auspicious muhurtham and arrange all samagri for your sacred pooja.
          </p>
          
          <button 
            onClick={() => onNavigate && onNavigate('contact')}
            className="inline-flex items-center justify-center gap-3 bg-[#D8B56A] text-[#123C3A] px-10 py-4 rounded-xl font-sans font-bold text-[15px] tracking-wide shadow-[0_8px_20px_rgba(216,181,106,0.2)] hover:shadow-[0_12px_30px_rgba(216,181,106,0.3)] hover:-translate-y-1 hover:bg-[#C89B4A] transition-all duration-300 group cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#123C3A] group-hover:scale-110 transition-transform duration-300" />
            <span>Book Your Ritual Now</span>
          </button>
        </div>
      </section>





    </div>
  )
}

export default Home;


