import React, { useEffect } from 'react';
import { Quote, Star, CalendarDays } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Ramesh Iyer",
    location: "Chennai, Tamil Nadu",
    text: "We performed the Thila Homam for my late father. The priests were extremely knowledgeable, and the entire ritual was conducted with utmost devotion and adherence to Vedic scriptures. I felt a profound sense of peace afterwards.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sujatha Krishnan",
    location: "Bangalore, Karnataka",
    text: "The arrangements made for our Asthi Visarjan were seamless. From the Agni Theertham bath to the final Pinda Daan, everything was organized perfectly. The guidance provided by the acharyas helped us complete the rites properly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Venkat Reddy",
    location: "Hyderabad, Telangana",
    text: "I was initially worried about managing the crowd and the rituals in Rameswaram, but their team took care of everything. The Sarpa Shanthi Pooja was performed beautifully. Highly recommended.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anand Sharma",
    location: "Mumbai, Maharashtra",
    text: "Performing Pitru Paksha Tarpanam here was a deeply spiritual experience. The serene environment and the disciplined approach of the pandits made us feel that our ancestors were truly honored.",
    rating: 5,
  },
  {
    id: 5,
    name: "Kavitha Menon",
    location: "Kochi, Kerala",
    text: "A highly authentic and trustworthy service. We booked a Mahalaya Amavasya Thithi, and the transparency and dedication shown by the team were commendable. The prasadam was also arranged thoughtfully.",
    rating: 5,
  },
  {
    id: 6,
    name: "Srinivasan N.",
    location: "Delhi",
    text: "The dedication of the priests is unmatched. They explain the meaning behind every mantra, which makes you connect deeply with the ritual. The entire process of Thila Homam was flawless.",
    rating: 5,
  }
];

export default function TestimonialsPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF6EC] font-body">
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] flex items-center justify-center overflow-hidden bg-[#123C3A]">
        <img 
          src={`${import.meta.env.BASE_URL}banner/testional.png`} 
          alt="Devotees performing rituals" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123C3A]/70 via-[#123C3A]/20 to-transparent"></div>
        {/* Soft dark radial gradient specifically behind the text to improve readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5)_0%,_transparent_60%)]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F5EE] mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Devotee Experiences
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F8F5EE] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Read what our yajamanas (patrons) have to say about the authenticity and devotion of our Vedic rituals in sacred Rameswaram.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-[1px] bg-[#D8B56A]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#D8B56A]"></div>
            <div className="w-12 h-[1px] bg-[#D8B56A]"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="relative px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto py-16 z-20 pb-20 md:pb-32">
        <div className="w-full min-h-[400px]">
          <div className="elfsight-app-4e4e4242-fb7a-4d69-ac54-e8554a52b8fe" data-elfsight-app-lazy="true"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#123C3A] relative overflow-hidden mt-10">
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
            <CalendarDays className="w-5 h-5 text-[#123C3A] group-hover:scale-110 transition-transform duration-300" />
            <span>Book Your Ritual Now</span>
          </button>
        </div>
      </section>

    </div>
  );
}

