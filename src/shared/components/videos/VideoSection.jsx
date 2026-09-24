import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection({ videos, title = "Our Videos" }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#123C3A] font-serif">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-2 my-3 text-[#D8B56A]">
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
          </div>
        )}

        <div className={`grid gap-8 ${
          videos.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 
          videos.length === 4 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {videos.map((video, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-black aspect-video"
              onClick={() => setSelectedVideo(video)}
            >
              <video 
                src={video}
                className={`w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300 ${index === 3 ? 'object-[center_10%]' : 'object-center'}`}
                preload="metadata"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#D8B56A] text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-5xl mt-12 md:mt-0">
            <button 
              className="absolute -top-14 right-0 md:-top-12 md:-right-12 text-white hover:text-[#D8B56A] transition-colors bg-black/50 p-2 rounded-full z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative">
              <video 
                src={selectedVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
