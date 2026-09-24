import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, ZoomIn } from 'lucide-react';
import VideoSection from '../videos/VideoSection';

const galleryFiles = [
  'image.png',
  'image copy.png',
  'image copy 2.png',
  'image copy 3.png',
  'image copy 4.png',
  'image copy 5.png',
  'image copy 6.png',
  'image copy 7.png',
  'image copy 8.png',
  'image copy 9.png',
  'image copy 10.png',
  'image copy 11.png',
  'image copy 12.png',
  'image copy 13.png',
  'image copy 14.png',
  'image copy 15.png',
  'image copy 16.png',
];

const images = galleryFiles.map(
  (filename) => `${import.meta.env.BASE_URL}main-gallery-page/${encodeURIComponent(filename)}`
);

export default function GalleryPage({ onOpenEnquiry, onNavigate }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, images.length));
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="w-full bg-[#F8F6F0] min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] flex items-center justify-center overflow-hidden bg-[#123C3A]">
        <img 
          src={`${import.meta.env.BASE_URL}images/gallery-hero.jpg`} 
          alt="Rameswaram Temple Beach" 
          className="absolute inset-0 w-full h-full object-cover object-[center_65%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123C3A]/90 via-[#123C3A]/30 to-black/20"></div>
        {/* Soft dark radial gradient specifically behind the text to improve readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.4)_0%,_transparent_50%)]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="font-serif-spiritual text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F5EE] mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Our Sacred Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F8F5EE] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Glimpses of divine rituals and the spiritual aura of Rameswaram
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-[1px] bg-[#D8B56A]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#D8B56A]"></div>
            <div className="w-12 h-[1px] bg-[#D8B56A]"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-16 md:pt-24 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Gallery Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-[#123C3A] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Photo Gallery
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-[2px] bg-[#D8B56A]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#D8B56A]"></div>
            <div className="w-12 h-[2px] bg-[#D8B56A]"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.slice(0, visibleCount).map((src, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-[0_20px_40px_rgba(18,60,58,0.15)] hover:-translate-y-1.5 transition-all duration-300 bg-[#EEF2ED]"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay with Zoom icon */}
              <div className="absolute inset-0 bg-[#123C3A]/0 group-hover:bg-[#123C3A]/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-lg">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < images.length && (
          <div className="mt-10 md:mt-12 flex justify-center">
            <button 
              onClick={handleSeeMore}
              className="px-10 py-3.5 border-2 border-[#123C3A] text-[#123C3A] hover:bg-[#123C3A] hover:text-[#F8F6F0] rounded-xl font-bold font-sans tracking-wider transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* Videos Section */}
      <VideoSection 
        videos={[
          `${import.meta.env.BASE_URL}videos/1 video.mp4`,
          `${import.meta.env.BASE_URL}videos/2 video.mp4`,
          `${import.meta.env.BASE_URL}videos/3 video.mp4`,
          `${import.meta.env.BASE_URL}videos/4.mp4`
        ]} 
        title="Our Videos" 
      />

      {/* CTA Section */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-20 bg-[#123C3A] relative overflow-hidden mt-10">
        {/* Subtle decorative elements for the dark background */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D8B56A]/30 via-transparent to-transparent blur-2xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-serif font-bold tracking-[0.2em] text-[#D8B56A] uppercase mb-4 block">
            Plan Your Holy Visit
          </span>
          <h2 className="font-serif-spiritual text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F5EE] mb-6 leading-[1.2]">
            Perform Authentic Vedic Rituals in Rameswaram
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-[#F8F5EE]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Consult with our experienced Vedic priests to find the most auspicious muhurtham and arrange all samagri for your sacred pooja.
          </p>
          
          <button 
            onClick={() => onNavigate && onNavigate('contact')}
            className="inline-flex items-center justify-center gap-3 bg-[#D8B56A] text-[#123C3A] px-10 py-4 rounded-xl font-sans font-bold text-[16px] tracking-wide shadow-[0_8px_20px_rgba(216,181,106,0.2)] hover:shadow-[0_12px_30px_rgba(216,181,106,0.3)] hover:-translate-y-1 hover:bg-[#C89B4A] transition-all duration-300 group cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#123C3A] group-hover:scale-110 transition-transform duration-300" />
            <span>Book Your Ritual Now</span>
          </button>
        </div>
      </section>

      {/* Lightroom Lightbox Overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-end z-20">
            <button 
              onClick={closeLightbox}
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer backdrop-blur-md"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center relative px-4 md:px-16 w-full h-full">
            {/* Prev Button */}
            <button 
              onClick={prevImage}
              className="absolute left-2 md:left-6 lg:left-10 w-10 h-10 md:w-14 md:h-14 bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 pr-1" />
            </button>

            {/* Current Image Container */}
            <div 
              className="relative max-w-full w-full h-full max-h-[85vh] md:max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[currentIndex]} 
                alt={`Gallery preview ${currentIndex + 1}`}
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain shadow-2xl transition-transform duration-300"
              />
              {/* Pagination text under image */}
              <div className="mt-4 text-center text-white/70 text-sm font-sans tracking-widest bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextImage}
              className="absolute right-2 md:right-6 lg:right-10 w-10 h-10 md:w-14 md:h-14 bg-black/40 hover:bg-black/70 border border-white/20 hover:border-white/50 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 pl-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


