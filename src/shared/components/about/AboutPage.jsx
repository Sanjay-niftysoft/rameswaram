import React from 'react';
import { 
  CheckCircle2, 
  Flame, 
  MapPin, 
  HeartHandshake, 
  Users, 
  BookOpen, 
  Calendar,
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  Play,
  Heart,
  Flower2,
  Leaf
} from 'lucide-react';
import VideoSection from '../videos/VideoSection';

export default function AboutPage({ onOpenEnquiry, onNavigate }) {
  const [bookDropdownOpen, setBookDropdownOpen] = React.useState(false);

  const servicesList = [
    {
      title: "Thila Homam & Pitru Rituals",
      desc: "Thila Homam, Tarpanam, Pind Daan, Thithi, Sraddham, Hiranya Sraddham, Divasam, and other ancestral ceremonies.",
      icon: Flame
    },
    {
      title: "Sacred Homams",
      desc: "Ganapathy Homam, Sudarshana Homam, Mruthyunjaya Homam, Ayushya Homam, Navagraha Shanthi Homam, and Santana Gopala Krishna Homam.",
      icon: Flame
    },
    {
      title: "Parihara Poojas",
      desc: "Sarpa Shanthi, Rahu Ketu Shanthi, Naga Prathishta, Kalathra Dosham Pariharam, and Swayamvara Kala Parvathi Pooja.",
      icon: HeartHandshake
    },
    {
      title: "Other Rameswaram Rituals",
      desc: "Rudra Abhishekam, Veda Parayanam, Saikata Pooja at Dhanushkodi, Kasi Yatra Sankalpam, and complete pooja arrangements.",
      icon: MapPin
    }
  ];

  const whyChooseUs = [
    {
      title: "Experienced Vedic Priests",
      desc: "Our rituals are guided by experienced priests with knowledge of traditional Vedic procedures.",
      icon: Users
    },
    {
      title: "Traditional Practices",
      desc: "We respect established Vedic traditions and perform ceremonies with devotion and care.",
      icon: BookOpen
    },
    {
      title: "Complete Assistance",
      desc: "From understanding the ritual requirements to arranging the ceremony, we provide support for devotees.",
      icon: HeartHandshake
    },
    {
      title: "Support for Families",
      desc: "We assist families travelling from different parts of India and abroad to perform their sacred rituals.",
      icon: ShieldCheck
    },
    {
      title: "Significance of Rameswaram",
      desc: "A renowned pilgrimage destination whose spiritual significance makes it a meaningful place for ancestral rituals.",
      icon: MapPin
    }
  ];

  return (
    <div className="w-full bg-[#F8F6F0] text-[#182321] animate-fadeIn overflow-x-hidden">
      <style>{`
        @keyframes subtle-pan {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.05) translate(-1%, 1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-img {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .animate-subtle-pan {
          animation: subtle-pan 25s ease-in-out infinite;
        }
        .animate-float-badge {
          animation: float-badge 6s ease-in-out infinite;
        }
        .animate-float-img {
          animation: float-img 8s ease-in-out infinite;
        }
      `}</style>
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] flex items-center justify-center overflow-hidden bg-[#123C3A]">
        <img 
          src={`${import.meta.env.BASE_URL}images/about-hero.jpg`} 
          alt="Rameswaram Temple Beach" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123C3A]/70 via-[#123C3A]/20 to-transparent"></div>
        {/* Soft dark radial gradient specifically behind the text to improve readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.4)_0%,_transparent_50%)]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="font-serif-spiritual text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F5EE] mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F8F5EE] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Experience traditional Thila Homam in Rameswaram
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-[1px] bg-[#D8B56A]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#D8B56A]"></div>
            <div className="w-12 h-[1px] bg-[#D8B56A]"></div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (Image 1 Layout) */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start lg:pr-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="uppercase font-bold tracking-[0.15em] text-[12px] text-[#C89B4A]">
                ABOUT US
              </span>
              <div className="h-[2px] w-12 bg-[#C89B4A]/50"></div>
            </div>
            
            <h2 className="font-serif text-[#123C3A] text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] mb-6 font-bold">
              Preserving Sacred<br className="hidden md:block" /> Vedic Traditions
            </h2>
            
            <p className="text-[#4a423a] text-[15px] sm:text-[17px] leading-relaxed mb-6 max-w-2xl">
              We are dedicated to helping devotees perform <strong className="font-semibold text-[#123C3A]">Thila Homam, Pitru rituals, Homams, and Parihara Poojas in Rameswaram</strong> following traditional Vedic practices.
            </p>
            <p className="text-[#4a423a] text-[15px] sm:text-[17px] leading-relaxed mb-10 max-w-2xl">
              With 20+ years of experience in conducting sacred rituals, our experienced priests provide sincere guidance and support to families seeking to perform their religious ceremonies. Every ritual is approached with devotion, traditional knowledge, and respect for the practices followed by each family. Our aim is to make every devotee's spiritual experience peaceful, meaningful, and well organized.
            </p>

            {/* 4 Features row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full">
              <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#D8B56A]/10 flex items-center justify-center shrink-0 border border-[#D8B56A]/20 transition-all duration-300 group-hover:bg-[#D8B56A] group-hover:shadow-[0_4px_12px_rgba(216,181,106,0.4)]">
                  <Leaf className="w-5 h-5 text-[#C89B4A] transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6" />
                </div>
                <span className="text-[#4a423a] text-[12px] sm:text-[13px] font-medium leading-tight transition-colors duration-300 group-hover:text-[#123C3A]">Authentic<br/>Vedic Rituals</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#D8B56A]/10 flex items-center justify-center shrink-0 border border-[#D8B56A]/20 transition-all duration-300 group-hover:bg-[#D8B56A] group-hover:shadow-[0_4px_12px_rgba(216,181,106,0.4)]">
                  <Users className="w-5 h-5 text-[#C89B4A] transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                </div>
                <span className="text-[#4a423a] text-[12px] sm:text-[13px] font-medium leading-tight transition-colors duration-300 group-hover:text-[#123C3A]">Experienced<br/>Priests</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#D8B56A]/10 flex items-center justify-center shrink-0 border border-[#D8B56A]/20 transition-all duration-300 group-hover:bg-[#D8B56A] group-hover:shadow-[0_4px_12px_rgba(216,181,106,0.4)]">
                  <Heart className="w-5 h-5 text-[#C89B4A] transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:scale-110" />
                </div>
                <span className="text-[#4a423a] text-[12px] sm:text-[13px] font-medium leading-tight transition-colors duration-300 group-hover:text-[#123C3A]">Personalized<br/>Guidance</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#D8B56A]/10 flex items-center justify-center shrink-0 border border-[#D8B56A]/20 transition-all duration-300 group-hover:bg-[#D8B56A] group-hover:shadow-[0_4px_12px_rgba(216,181,106,0.4)]">
                  <Flower2 className="w-5 h-5 text-[#C89B4A] transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <span className="text-[#4a423a] text-[12px] sm:text-[13px] font-medium leading-tight transition-colors duration-300 group-hover:text-[#123C3A]">Complete Support<br/>for Families</span>
              </div>
            </div>

            {/* Buttons row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <button 
                onClick={() => onNavigate && onNavigate('thila-homam')}
                className="inline-flex items-center justify-center gap-2 bg-[#123C3A] text-[#F8F5EE] px-8 py-4 rounded-xl font-sans font-semibold text-[15px] transition-all hover:bg-[#0c2827] shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Book Pooja & Homam</span>
                <ArrowRight className="w-4 h-4 text-[#D8B56A] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="w-full lg:w-5/12 relative mt-8 lg:mt-0 group cursor-pointer">
            {/* Soft decorative background element */}
            <div className="absolute -inset-4 sm:-inset-10 bg-[#D8B56A]/5 rounded-full blur-3xl z-0 transition-transform duration-700 group-hover:scale-110"></div>
            
            {/* Main Image with special border radius */}
            <div 
              className="relative z-10 overflow-hidden border-[6px] border-white bg-white transition-all duration-700 ease-in-out group-hover:-translate-y-2 group-hover:border-[#F8F6F0]" 
              style={{ borderRadius: '140px 40px 140px 40px' }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}gallery/1.png`} 
                alt="Vedic Priest performing ritual" 
                className="w-full h-auto object-cover aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] animate-subtle-pan transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800' }}
              />
            </div>
            
            {/* Floating Badge (Left bottom) */}
            <div className="absolute -bottom-6 -left-2 sm:-left-12 z-20 bg-[#123C3A] text-[#F8F5EE] px-6 sm:px-8 py-5 rounded-[2rem] flex items-center gap-4 border border-[#F8F5EE]/10 animate-float-badge transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-105">
              <div className="bg-[#D8B56A]/10 p-3 rounded-full shrink-0 transition-transform duration-500 group-hover:rotate-12">
                <Users className="w-7 h-7 text-[#D8B56A]" />
              </div>
              <div className="flex flex-col">
                <div className="text-[22px] font-bold font-sans leading-none mb-1">20+</div>
                <div className="text-[11px] sm:text-[12px] tracking-wide text-[#F8F5EE]/80 leading-[1.2]">Years of<br/>Experience</div>
              </div>
            </div>
            
            {/* Secondary Image overlapping (Top right) */}
            <div 
              className="absolute -right-4 sm:-right-8 top-12 sm:top-16 z-20 w-32 sm:w-48 overflow-hidden border-4 border-white bg-white animate-float-img transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:-translate-y-6"
              style={{ borderRadius: '24px' }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}gallery/2.png`} 
                alt="Ritual elements" 
                className="w-full h-auto object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1590050862025-06c8b92b67f1?auto=format&fit=crop&q=80&w=400' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT THILA HOMAM (Premium Two-Column Layout) */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        {/* Subtle oversized Om symbol */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <svg width="600" height="600" viewBox="0 0 100 100">
            <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="80" fontFamily="serif" className="fill-[#123D35]">ॐ</text>
          </svg>
        </div>
        


        <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Side: Image (Reduced width on desktop) */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-[38%] lg:w-[32%] xl:w-[28%] mx-auto md:mx-0 relative shrink-0">
            {/* Elegant curved border wrapper */}
            <div 
              className="relative overflow-hidden shadow-2xl border-[3px] border-[#B88635]/20 bg-[#F1EBDD]"
              style={{ borderRadius: '180px' }}
            >
              {/* Thin elegant gold line inner border */}
              <div 
                className="absolute inset-2 border-[1.5px] border-[#B88635]/60 z-10 pointer-events-none"
                style={{ borderRadius: '170px' }}
              />
              <img 
                src='/images/about-thila-homam.jpg'
                alt="Sacred Rameswaram Thila Homam Ritual" 
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
          </div>

          {/* Right Side: Content (60% width on desktop) */}
          <div className="w-full md:w-[58%] lg:w-[60%] flex flex-col justify-center">
            
            <div className="flex flex-col items-start mb-8">
              <span className="uppercase font-semibold tracking-[0.25em] text-[11px] lg:text-xs text-[#B88635] mb-5 block">
                A Traditional Ancestral Ritual
              </span>
              
              <h2 className="font-serif-spiritual text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[#123D35]">
                About <span className="text-[#B88635] font-serif italic font-medium">Thila Homam</span>
              </h2>
              
              {/* Divider */}
              <div className="flex items-center gap-3 mt-8 mb-4">
                <div className="w-16 h-[1px] bg-[#B88635]/40"></div>
                <Flower2 className="w-4 h-4 text-[#B88635]/80" />
                <div className="w-16 h-[1px] bg-[#B88635]/40"></div>
              </div>
            </div>
            
            <div className="space-y-6 text-[#3D3A34] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] font-sans font-medium">
              <p>
                <span className="font-semibold text-[#123D35]">Thila Homam</span> is a traditional Hindu ritual associated with ancestral worship and Pitru-related ceremonies. The ritual includes offerings such as sesame seeds (Til/Ellu) along with prescribed Vedic mantras and other traditional offerings.
              </p>
              
              <p>
                <span className="font-semibold text-[#B88635]">Rameswaram</span> is an important pilgrimage destination where devotees visit sacred temples and locations to perform various religious and ancestral rituals. Many families choose to perform Thila Homam in Rameswaram as part of their traditional spiritual practices.
              </p>
              
              <p className="text-[#3D3A34]/80 italic border-l-2 border-[#B88635]/40 pl-4 py-1">
                The exact procedures, offerings, and prayers may vary according to family tradition and the guidance of the Vedic priest.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <button 
                onClick={() => onNavigate && onNavigate('thila-homam')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#B88635] hover:bg-[#a1742a] text-white px-8 py-3.5 rounded-xl font-sans font-medium text-[15px] transition-all shadow-[0_8px_20px_rgba(184,134,53,0.25)] hover:shadow-[0_12px_25px_rgba(184,134,53,0.35)] hover:-translate-y-0.5 group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR SACRED RITUAL SERVICES (Premium Organic Layout) */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F6EF] relative overflow-hidden">
        
        {/* Subtle Background Foliage Textures */}
        {/* Top Left Leaves */}
        <div className="absolute -top-20 -left-20 opacity-30 pointer-events-none blur-[2px] transform -scale-x-100">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
             <path d="M50 0 C70 20 80 40 50 60 C30 40 20 20 50 0Z" fill="#123F3A" opacity="0.15"/>
             <path d="M20 10 C40 30 50 50 20 70 C0 50 -10 30 20 10Z" fill="#123F3A" opacity="0.1"/>
          </svg>
        </div>
        {/* Bottom Right Leaves */}
        <div className="absolute -bottom-20 -right-20 opacity-20 pointer-events-none blur-[1px]">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
             <path d="M50 100 C30 80 20 60 50 40 C70 60 80 80 50 100Z" fill="#123F3A" opacity="0.2"/>
             <path d="M80 90 C60 70 50 50 80 30 C100 50 110 70 80 90Z" fill="#123F3A" opacity="0.15"/>
          </svg>
        </div>

        {/* Right Decorative Text */}
        <div className="hidden lg:block absolute top-24 right-12 xl:right-24 rotate-[-6deg] z-10 pointer-events-none">
           <div className="text-[#B8832F]/60 font-serif italic text-4xl xl:text-[42px] leading-snug flex flex-col items-end">
             <span>Faith</span>
             <span>Tradition</span>
             <span>Blessings</span>
           </div>
           <div className="flex justify-end mt-4">
             <div className="flex items-center gap-2">
                <div className="w-12 h-[1px] bg-[#B8832F]/30"></div>
                <Flower2 className="w-4 h-4 text-[#B8832F]/50" />
             </div>
           </div>
        </div>

        {/* Top Heading Area */}
        <div className="max-w-4xl mx-auto text-center relative z-20 mb-16">
          <div className="flex justify-center mb-4">
             <Flower2 className="w-5 h-5 text-[#B8832F]" />
          </div>
          <span className="uppercase font-semibold tracking-[0.25em] text-[11px] lg:text-xs text-[#B8832F] mb-4 block">
            // What We're Offering
          </span>
          <h2 className="font-serif-spiritual text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] mb-8">
            <span className="text-[#123F3A]">Our Sacred </span>
            <span className="text-[#B8832F] italic font-medium">Ritual Services</span>
          </h2>
          <p className="text-[#4D4A43] text-[16px] lg:text-[18px] leading-[1.7] max-w-[850px] mx-auto mb-8 font-sans">
            We provide arrangements for a range of sacred rituals and ceremonies in Rameswaram, 
            guided by experienced Vedic priests with devotion and traditional practices.
          </p>
          <div className="flex items-center justify-center gap-3">
             <div className="w-12 h-[1px] bg-[#B8832F]/30"></div>
             <Flower2 className="w-4 h-4 text-[#B8832F]/70" />
             <div className="w-12 h-[1px] bg-[#B8832F]/30"></div>
          </div>
        </div>

        {/* Cards Area */}
        <div className="max-w-[1350px] mx-auto relative z-20 px-2 lg:px-8">
          
          {/* Golden Connecting Line (Desktop/Tablet) */}
          <div className="hidden md:block absolute top-[45px] left-[-5%] right-[-5%] z-0 pointer-events-none">
             <svg width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" className="stroke-[#B8832F]/30 stroke-[1.5] fill-none">
                <path d="M 0,40 Q 150,0 300,40 T 600,40 T 900,40 T 1200,40" />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 lg:gap-y-0 relative z-10">
            
            {/* Card 01 */}
            <div 
              className="bg-[#FFFDF9] relative h-full pt-16 pb-12 px-8 flex flex-col shadow-[0_8px_30px_rgba(18,63,58,0.04)] hover:shadow-[0_15px_40px_rgba(18,63,58,0.08)] transition-all duration-500 hover:-translate-y-2 group"
              style={{ borderRadius: '60px 40px 80px 30px' }}
            >
              {/* Badge */}
              <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-[90px] h-[90px] bg-[#F3E9D9] rounded-full flex items-center justify-center shadow-md border-4 border-[#F8F6EF]">
                 <Flame className="w-10 h-10 text-[#B8832F]" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif-spiritual text-[#123F3A] text-2xl lg:text-[26px] font-bold leading-tight mb-4">
                Thila Homam & <br/>Pitru Rituals
              </h3>
              <p className="text-[#4D4A43] text-[15px] font-medium leading-[1.6] mb-8 flex-grow">
                Thila Homam, Tarpanam, Pind Daan, Thithi, Sraddham, Hiranya Sraddham, Divasam and more.
              </p>
              
              {/* Subtle Leaf */}
              <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                 <Leaf className="w-12 h-12 text-[#B8832F]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Card 02 */}
            <div 
              className="bg-[#FFFDF9] relative h-full pt-16 pb-12 px-8 flex flex-col shadow-[0_8px_30px_rgba(18,63,58,0.04)] hover:shadow-[0_15px_40px_rgba(18,63,58,0.08)] transition-all duration-500 hover:-translate-y-2 group"
              style={{ borderRadius: '40px 80px 30px 60px' }}
            >
              {/* Badge */}
              <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-[90px] h-[90px] bg-[#E8EEE6] rounded-full flex items-center justify-center shadow-md border-4 border-[#F8F6EF]">
                 <Flower2 className="w-10 h-10 text-[#123F3A]" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif-spiritual text-[#123F3A] text-2xl lg:text-[26px] font-bold leading-tight mb-4 mt-6">
                Sacred Homams
              </h3>
              <p className="text-[#4D4A43] text-[15px] font-medium leading-[1.6] mb-8 flex-grow">
                Ganapathy Homam, Sudarshana Homam, Mruthyunjaya Homam, Ayushya Homam, Navagraha Shanthi Homam, Santana Gopala Krishna Homam and more.
              </p>
              
              {/* Subtle Leaf */}
              <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                 <Leaf className="w-12 h-12 text-[#123F3A]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Card 03 */}
            <div 
              className="bg-[#FFFDF9] relative h-full pt-16 pb-12 px-8 flex flex-col shadow-[0_8px_30px_rgba(18,63,58,0.04)] hover:shadow-[0_15px_40px_rgba(18,63,58,0.08)] transition-all duration-500 hover:-translate-y-2 group"
              style={{ borderRadius: '70px 30px 50px 70px' }}
            >
              {/* Badge */}
              <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-[90px] h-[90px] bg-[#F3E9D9] rounded-full flex items-center justify-center shadow-md border-4 border-[#F8F6EF]">
                 {/* Trident SVG */}
                 <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B8832F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V3" />
                    <path d="M12 3L10 6" />
                    <path d="M12 3L14 6" />
                    <path d="M6 7V11C6 14 8 16 12 16C16 16 18 14 18 11V7" />
                    <path d="M6 7L4 9" />
                    <path d="M18 7L20 9" />
                    <path d="M9 22H15" />
                    <path d="M10 16H14" />
                 </svg>
              </div>
              
              <h3 className="font-serif-spiritual text-[#123F3A] text-2xl lg:text-[26px] font-bold leading-tight mb-4 mt-6">
                Parihara Poojas
              </h3>
              <p className="text-[#4D4A43] text-[15px] font-medium leading-[1.6] mb-8 flex-grow">
                Sarpa Shanthi, Rahu Ketu Shanthi, Naga Prathishta, Kalathra Dosham Pariharam, Swayamvara Kala Parvathi Pooja, Navagraha Dosha Nivarana and complete ritual arrangements.
              </p>
              
              {/* Subtle Leaf */}
              <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                 <Leaf className="w-12 h-12 text-[#B8832F]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Card 04 */}
            <div 
              className="bg-[#FFFDF9] relative h-full pt-16 pb-12 px-8 flex flex-col shadow-[0_8px_30px_rgba(18,63,58,0.04)] hover:shadow-[0_15px_40px_rgba(18,63,58,0.08)] transition-all duration-500 hover:-translate-y-2 group"
              style={{ borderRadius: '30px 70px 60px 40px' }}
            >
              {/* Badge */}
              <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-[90px] h-[90px] bg-[#E8EEE6] rounded-full flex items-center justify-center shadow-md border-4 border-[#F8F6EF]">
                 {/* Temple Gopuram SVG */}
                 <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#123F3A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L9 7H15L12 2Z" />
                    <path d="M8 7L6 14H18L16 7" />
                    <path d="M5 14L3 22H21L19 14" />
                    <path d="M10 22V16H14V22" />
                    <path d="M8 10H16" />
                    <path d="M6 18H18" />
                 </svg>
              </div>
              
              <h3 className="font-serif-spiritual text-[#123F3A] text-2xl lg:text-[26px] font-bold leading-tight mb-4 mt-6">
                Other Rameswaram <br className="hidden xl:block"/>Rituals
              </h3>
              <p className="text-[#4D4A43] text-[15px] font-medium leading-[1.6] mb-8 flex-grow">
                Rudra Abhishekam, Veda Parayanam, Saikata Pooja at Dhanushkodi, Kasi Yatra Sankalpam and complete pooja arrangements.
              </p>
              
              {/* Subtle Leaf */}
              <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                 <Leaf className="w-12 h-12 text-[#123F3A]" strokeWidth={1.5} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & WHY RAMESWARAM? (Razor Staggered Layout) */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F6F0] text-[#123C3A] relative">
        <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row relative">
          
          {/* Left Side: Title Area */}
          <div className="w-full lg:w-5/12 lg:pr-16 mb-16 lg:mb-0">
            <span className="font-semibold tracking-[0.1em] text-[13px] text-[#4D4A43] mb-6 block uppercase">
              Sacred Place. Traditional Guidance.
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold mb-8 text-[#123C3A] leading-[1.1] tracking-tight">
              <span className="whitespace-nowrap">Why Choose Us </span> <br className="hidden lg:block"/>Rameswaram?
            </h2>
            
            <p className="text-[#4D4A43] text-[15px] leading-[1.8] mb-12 max-w-md font-medium">
              Our priority is providing sincere service and traditional guidance for your spiritual journey in the holy city of Rameswaram.
            </p>

            <div className="flex items-center gap-6 text-[#A53A2A] font-bold text-[14px] uppercase tracking-wider">
               <button onClick={() => onNavigate && onNavigate('contact')} className="hover:text-[#123C3A] transition-colors flex items-center gap-2">
                 Contact Us Today <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
          
          {/* Right Side: Staggered Grid */}
          <div className="w-full lg:w-7/12 relative flex flex-col md:flex-row">
            {/* The Vertical Divider (Centered) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#E5E0D5]"></div>
            
            {/* Column 1 (Left - Staggered Down) */}
            <div className="flex-1 flex flex-col pt-0 md:pt-16">
               {/* Item 1 */}
               <div className="pb-12 border-b-2 border-[#E5E0D5]">
                  <div className="flex gap-5 md:pr-12">
                    <div className="shrink-0 mt-1">
                      <div className="text-[#B8832F]">
                        {(() => { const Icon = whyChooseUs[0].icon; return <Icon className="w-8 h-8" /> })()}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-[22px] font-bold text-[#123C3A] mb-3">{whyChooseUs[0].title}</h4>
                      <p className="text-[#4D4A43] text-[15px] leading-[1.6]">
                        {whyChooseUs[0].desc}
                      </p>
                    </div>
                  </div>
               </div>

               {/* Item 3 */}
               <div className="pt-12 pb-12 border-b-2 border-[#E5E0D5] md:border-none md:pb-0">
                  <div className="flex gap-5 md:pr-12">
                    <div className="shrink-0 mt-1">
                      <div className="text-[#B8832F]">
                        {(() => { const Icon = whyChooseUs[2].icon; return <Icon className="w-8 h-8" /> })()}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-[22px] font-bold text-[#123C3A] mb-3">{whyChooseUs[2].title}</h4>
                      <p className="text-[#4D4A43] text-[15px] leading-[1.6]">
                        {whyChooseUs[2].desc}
                      </p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Column 2 (Right - Top) */}
            <div className="flex-1 flex flex-col mt-12 md:mt-0">
               {/* Item 2 */}
               <div className="pb-12 border-b-2 border-[#E5E0D5]">
                  <div className="flex gap-5 md:pl-12">
                    <div className="shrink-0 mt-1">
                      <div className="text-[#B8832F]">
                        {(() => { const Icon = whyChooseUs[1].icon; return <Icon className="w-8 h-8" /> })()}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-[22px] font-bold text-[#123C3A] mb-3">{whyChooseUs[1].title}</h4>
                      <p className="text-[#4D4A43] text-[15px] leading-[1.6]">
                        {whyChooseUs[1].desc}
                      </p>
                    </div>
                  </div>
               </div>

               {/* Item 4 */}
               <div className="pt-12 pb-12 md:pb-0">
                  <div className="flex gap-5 md:pl-12">
                    <div className="shrink-0 mt-1">
                      <div className="text-[#B8832F]">
                        {(() => { const Icon = whyChooseUs[3].icon; return <Icon className="w-8 h-8" /> })()}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-[22px] font-bold text-[#123C3A] mb-3">{whyChooseUs[3].title}</h4>
                      <p className="text-[#4D4A43] text-[15px] leading-[1.6]">
                        {whyChooseUs[3].desc}
                      </p>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR MISSION & VISION (Split Cards Layout) */}
      <section className="py-10 md:py-16 bg-[#EEF2ED]">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase font-bold tracking-[0.2em] text-[11px] text-[#C89B4A] mb-4 block">
              Tradition · Devotion · Service
            </span>
            <h2 className="font-serif text-[#123C3A] text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Mission & Vision
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center max-w-[75rem] mx-auto">
            {/* Mission Card */}
            <div className="flex-1 bg-[#FDFBF7] rounded-[2rem] p-8 sm:p-12 border border-[#D8B56A]/20 shadow-md relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-[#D8B56A]/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              <Target className="w-12 h-12 text-[#C89B4A] mb-8 relative z-10" />
              <h3 className="text-3xl font-serif font-bold text-[#123C3A] mb-6 relative z-10">Our Mission</h3>
              <p className="text-[#4a423a] text-[16px] leading-[1.8] relative z-10 font-medium">
                Our mission is to preserve and support traditional Vedic rituals in Rameswaram by providing devotees with experienced priest guidance, authentic ceremonies, and respectful service. We are deeply committed to ensuring that every family can perform their sacred duties with complete peace of mind, guided by our knowledgeable Vadhyars who uphold the purest traditions passed down through generations.
              </p>
            </div>

            {/* Vision Card */}
            <div className="flex-1 bg-[#FDFBF7] rounded-[2rem] p-8 sm:p-12 border border-[#D8B56A]/20 shadow-md relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-[#D8B56A]/10 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              <Eye className="w-12 h-12 text-[#123C3A] mb-8 relative z-10" />
              <h3 className="text-3xl font-serif font-bold text-[#123C3A] mb-6 relative z-10">Our Vision</h3>
              <p className="text-[#4a423a] text-[16px] leading-[1.8] relative z-10 font-medium">
                We aim to become a trusted destination for devotees seeking Thila Homam, Pitru rituals, and traditional Pooja services in Rameswaram, while helping preserve India's sacred Vedic heritage for future generations. Our vision is to bridge the gap between ancient spiritual practices and the modern devotee, ensuring the eternal flame of our spiritual heritage continues to shine brightly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoSection videos={[`${import.meta.env.BASE_URL}videos/2 video.mp4`]} title="About Our Rituals" />

      {/* 6. CALL TO ACTION */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#123C3A] relative overflow-hidden">
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
  );
}

