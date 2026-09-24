import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flame, Waves, Droplet, Leaf, HandHeart, Flower2 } from 'lucide-react';

const colors = {
  deepGreen: '#123C3A',
  secondaryGreen: '#315A4D',
  softSage: '#DDE6D8',
  ivory: '#F7F7F0',
  cardCream: '#FFFDF6',
  mutedGold: '#C69A45',
  text: '#183C37',
  mutedText: '#8C6544',
};

const thilaHomamItems = [
  { id: '01', title: 'Ganapathi Pooja', desc: '', icon: Flower2 },
  { id: '02', title: 'Sankalpam', desc: '', icon: Flame },
  { id: '03', title: 'Punyahavachanam', desc: '', icon: Droplet },
  { id: '04', title: 'Yama Dharma Raja pooja', desc: '', icon: HandHeart },
  { id: '05', title: 'pitru Pooja', desc: '', icon: Leaf },
  { id: '06', title: 'kalasa Pooja', desc: '', icon: Waves },
  { id: '07', title: 'Japam & Homam by Vedic Priests', desc: '', icon: Flame },
  { id: '08', title: 'Pinda Pradhanam', desc: '', icon: Droplet },
  { id: '09', title: 'Maha Poornahuthi & Aasheervadam', desc: '', icon: HandHeart }
];

const thithiItems = [
  { id: '01', title: 'Ganapathi Pooja', desc: '', icon: Flower2 },
  { id: '02', title: 'Sankalpam', desc: '', icon: Flame },
  { id: '03', title: 'Vegetables & Grocery Items Pooja (Ama Sraddham)', desc: '', icon: Leaf },
  { id: '04', title: 'Kalasa Pooja', desc: '', icon: Waves },
  { id: '05', title: 'Japam and Homam by Vedic priests', desc: '', icon: Flame },
  { id: '06', title: 'Pinda Pradhanam', desc: '', icon: Droplet },
  { id: '07', title: 'Maha Poornahuthi & Aasheervadam', desc: '', icon: HandHeart }
];

const getDynamicItems = (items) => {
  const radius = 230;
  const iconRadius = 310;
  const total = items.length;
  
  return items.map((item, index) => {
    const angle = -Math.PI / 2 + (index * (2 * Math.PI)) / total;
    const nodeX = radius * Math.cos(angle);
    const nodeY = radius * Math.sin(angle);
    const iconX = iconRadius * Math.cos(angle);
    const iconY = iconRadius * Math.sin(angle);
    
    let align = 'center';
    if (Math.abs(nodeX) > 40) {
      align = nodeX > 0 ? 'right' : 'left';
    }
    
    let finalIconY = iconY;
    if (align === 'center') {
      finalIconY = nodeY < 0 ? iconY - 30 : iconY + 30;
    }

    return { ...item, nodeX, nodeY, iconX, iconY: finalIconY, align };
  });
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const LotusDecoration = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.05">
    <path d="M50 90C50 90 20 70 20 40C20 20 40 10 50 20C60 10 80 20 80 40C80 70 50 90 50 90Z" />
    <path d="M50 90C50 90 30 75 30 50C30 35 45 25 50 35C55 25 70 35 70 50C70 75 50 90 50 90Z" />
    <path d="M50 90C50 90 40 80 40 60C40 50 48 40 50 45C52 40 60 50 60 60C60 80 50 90 50 90Z" />
  </svg>
);

const defaultIcons = [Flower2, Flame, Droplet, HandHeart, Leaf, Waves];

export default function SacredProcess({ centerImage, items }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px' });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Use provided items or fallback to thilaHomamItems
  const baseItems = items && items.length > 0 ? items : thilaHomamItems;
  
  // Assign default icons if they are missing
  const itemsWithIcons = baseItems.map((item, i) => ({
    ...item,
    icon: item.icon || defaultIcons[i % defaultIcons.length]
  }));

  const processItems = getDynamicItems(itemsWithIcons);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView, processItems.length]);

  const currentActive = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden"
      style={{ backgroundColor: colors.ivory }}
    >
      {/* Organic Blurred Background Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
        style={{
          backgroundImage: `url(${centerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(16px)'
        }}
      />
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${colors.softSage}40 100%)`
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10"
      >
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 flex flex-col items-center">
          <h2 
            className="font-display font-normal leading-[1.15] text-[1.9rem] sm:text-4xl md:text-[2.65rem]"
            style={{ color: colors.deepGreen }}
          >
            The Sacred Process
          </h2>

          {/* Removed Process Toggle */}
        </div>

        {/* Mobile View (< 1200px approx) */}
        <div className="flex flex-col items-center gap-6 xl:hidden">
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full mb-8 z-20 p-[6px] overflow-hidden"
            style={{ border: `1px solid ${colors.mutedGold}`, backgroundColor: colors.cardCream }}
          >
            <div className="w-full h-full rounded-full border-[1px] p-[2px] overflow-hidden" style={{ borderColor: colors.deepGreen }}>
              <motion.img 
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={centerImage} 
                alt="Ritual Process" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </motion.div>

          {/* Cards for Mobile */}
          <div className="relative w-full max-w-lg flex flex-col gap-8">
            <div className="absolute left-[38px] top-10 bottom-10 w-[1px] border-l-2 border-dashed" style={{ borderColor: `${colors.deepGreen}40` }} />
            {processItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentActive === index;
              return (
                <motion.div 
                  key={item.id} 
                  variants={cardVariants} 
                  className="relative z-10 w-full pl-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="relative flex items-center rounded-[24px] p-4 pr-5 transition-all duration-500"
                    style={{ 
                      backgroundColor: colors.cardCream, 
                      border: `1px solid ${isActive ? colors.mutedGold : colors.mutedGold + '40'}`,
                      boxShadow: isActive ? '0 12px 30px rgba(198,154,69,0.15)' : '0 4px 16px rgba(0,0,0,0.03)',
                      transform: isActive ? 'scale(1.02) translateY(-4px)' : 'none'
                    }}
                  >
                    <div 
                      className="w-[60px] h-[60px] shrink-0 rounded-full border-[1.5px] flex items-center justify-center relative z-10 p-[3px] transition-all duration-500" 
                      style={{ 
                        borderColor: isActive ? colors.deepGreen : colors.mutedGold,
                        transform: isActive ? 'scale(1.08)' : 'scale(1)'
                      }}
                    >
                      <div 
                        className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-500" 
                        style={{ backgroundColor: isActive ? colors.mutedGold : colors.deepGreen }}
                      >
                        <Icon className="w-5 h-5 transition-colors duration-500" style={{ color: isActive ? colors.deepGreen : '#FFF' }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className={`font-display font-semibold ${item.desc ? 'text-[1.1rem] mb-1' : 'text-[1.15rem]'}`} style={{ color: colors.deepGreen }}>{item.title}</h4>
                      {item.desc && (
                        <p className="text-[13px] leading-relaxed" style={{ color: colors.mutedText }}>{item.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop Radial View (xl and above) */}
        <div className="hidden xl:block relative w-full h-[950px] max-w-[1200px] mx-auto mt-4">
          
          {/* Background SVG for Circular Lines & Nodes */}
          {isInView && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Outer dashed circle */}
              <motion.circle 
                cx="50%" cy="50%" r="230" 
                fill="none" 
                stroke={colors.deepGreen} 
                strokeWidth="1.2"
                strokeDasharray="4 6"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Radial connecting lines and nodes */}
              {processItems.map((item, index) => {
                const isActive = currentActive === index;
                return (
                  <g key={item.id}>
                    <line 
                      x1={`calc(50% + ${item.nodeX}px)`} y1={`calc(50% + ${item.nodeY}px)`}
                      x2={`calc(50% + ${item.iconX}px)`} y2={`calc(50% + ${item.iconY}px)`}
                      stroke={isActive ? colors.mutedGold : colors.deepGreen} 
                      strokeWidth={isActive ? "2" : "1.2"} 
                      strokeDasharray="3 4" 
                      opacity={isActive ? "0.8" : "0.3"}
                      style={{ transition: 'all 0.5s ease' }}
                    />
                    <circle cx={`calc(50% + ${item.nodeX}px)`} cy={`calc(50% + ${item.nodeY}px)`} r="5" fill={colors.deepGreen} />
                    <circle 
                      cx={`calc(50% + ${item.nodeX}px)`} cy={`calc(50% + ${item.nodeY}px)`} 
                      r={isActive ? "2.5" : "1.5"} 
                      fill={colors.mutedGold} 
                      style={{ transition: 'r 0.3s ease' }} 
                    />
                  </g>
                );
              })}
            </svg>
          )}

          {/* Central Animated Image */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] z-10 p-[6px] shadow-[0_0_40px_rgba(198,154,69,0.12)] rounded-full bg-white/40 overflow-hidden"
            style={{ border: `1px solid ${colors.mutedGold}` }}
          >
            <motion.div 
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border-[1px] p-[2px] overflow-hidden" 
              style={{ borderColor: colors.deepGreen }}
            >
              <motion.img 
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={centerImage} 
                alt="Sacred Ritual" 
                className="w-full h-full object-cover rounded-full" 
              />
            </motion.div>
          </motion.div>

          {/* Radially Placed Cards */}
          {processItems.map((item, index) => {
            const Icon = item.icon;
            const isLeftCard = item.align === 'left';
            const isActive = currentActive === index;
            
            // Icon center is 48px (16px padding + 32px half-icon) from the card edge.
            const iconOffset = 48; 
            
            let transform;
            if (item.align === 'left') {
              transform = `translate(calc(-100% + ${item.iconX + iconOffset}px), calc(-50% + ${item.iconY}px))`;
            } else if (item.align === 'right') {
              transform = `translate(${item.iconX - iconOffset}px, calc(-50% + ${item.iconY}px))`;
            } else { // 'center'
              transform = `translate(calc(-50% + ${item.iconX}px), calc(-50% + ${item.iconY}px))`;
            }

            return (
              <div 
                key={item.id} 
                className="absolute top-1/2 left-1/2 w-[360px] z-20 cursor-default"
                style={{ transform }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div 
                  variants={cardVariants}
                  animate={isActive ? { y: -6, scale: 1.02 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`relative flex items-center rounded-[24px] p-4 transition-all duration-500
                    ${isLeftCard ? 'flex-row-reverse text-right pr-5' : 'pr-5'}
                  `}
                  style={{ 
                    backgroundColor: colors.cardCream, 
                    border: `1px solid ${isActive ? colors.mutedGold : colors.mutedGold + '40'}`,
                    boxShadow: isActive ? '0 12px 30px rgba(198,154,69,0.15)' : '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                >
                  
                  {/* Icon Circle */}
                  <div className={`relative shrink-0 ${isLeftCard ? 'ml-4' : 'mr-4'}`}>
                    <div 
                      className="w-[64px] h-[64px] rounded-full border-[1.5px] p-[3px] flex items-center justify-center transition-all duration-500" 
                      style={{ 
                         borderColor: isActive ? colors.deepGreen : colors.mutedGold,
                         transform: isActive ? 'scale(1.08)' : 'scale(1)'
                      }}
                    >
                      <div 
                         className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-500" 
                         style={{ backgroundColor: isActive ? colors.mutedGold : colors.deepGreen }}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.6 + (parseInt(item.id) * 0.1) }}
                        >
                          <Icon className="w-[22px] h-[22px] transition-colors duration-500" style={{ color: isActive ? colors.deepGreen : '#FFF' }} strokeWidth={1.5} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h4 className={`font-display font-semibold ${item.desc ? 'text-[1.1rem] mb-1' : 'text-[1.15rem]'}`} style={{ color: colors.deepGreen }}>
                      {item.title}
                    </h4>
                    {item.desc && (
                      <p className="text-[12.5px] leading-relaxed" style={{ color: colors.mutedText }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
