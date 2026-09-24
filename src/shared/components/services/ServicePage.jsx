import React, { useRef, useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, PlayCircle, Star, Quote, 
  MapPin, Clock, CalendarDays, Users, ShieldCheck, 
  Flower2, Leaf, HandHeart, Sparkles, BookOpen, Flame,
  HeartHandshake, CheckCircle2
} from 'lucide-react';

import { servicesData } from '../../../data/servicesData';
import SacredProcess from './SacredProcess';

/* ============================================================================
   DESIGN TOKENS (kept as plain hex, arbitrary-value style, to match the rest
   of this codebase — no tailwind.config changes required)

   ink        #241C15   primary text
   paper      #FBF6EC   base background
   paper-dim  #F3ECDC   secondary panel background
   sanctum    #0E2E2B   dark section background
   sanctum-2  #081E1C   dark section gradient end
   brass      #C08A3E   primary accent (borders, rules, icons)
   brass-lt   #E4C27A   accent on dark backgrounds
   kumkum     #9C2E22   single sparing accent (used once, in the CTA)

   Display type: 'Rozha One'  — set headings
   Body type:    'Manrope'    — everything else
============================================================================ */

const ICONS = {
  Flame: Flame,
  ShieldCheck: ShieldCheck,
  Users: Users,
  BookOpen: BookOpen,
  HeartHandshake: HeartHandshake,
  MapPin: MapPin,
  Flower2: Flower2
};

const IconGlyph = ({ name, className }) => {
  const Cmp = ICONS[name] || CheckCircle2;
  return <Cmp className={className} strokeWidth={1.5} />;
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

/* Fires once, the moment an element enters the viewport — used to drive
   real scroll-triggered reveals instead of a blanket fade-on-every-card. */
function useReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* A faint field of brass dots — fills the dead space behind dark sections
   with texture instead of flat, empty colour. */
function DotField() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="brassDots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#E4C27A" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#brassDots)" />
    </svg>
  );
}

/* ----------------------------------------------------------------------
   Infographic benefits — restyled to match the reference: a central hub
   circle with slim, curved brass branches reaching out to small icon
   medallions, each carrying its label as plain text beside it (no big
   pill cards, no drop-shadow boxes). Connector paths are measured live
   off the actual DOM positions of the hub and each node, so the curves
   stay correct at any item count, copy length, or screen width.
---------------------------------------------------------------------- */
function InfographicBenefits({ title, subtitle, items }) {
  const containerRef = useRef(null);
  const hubRef = useRef(null);
  const nodeRefs = useRef([]);
  const [paths, setPaths] = useState([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const hub = hubRef.current;
      if (!container || !hub) return;

      const cRect = container.getBoundingClientRect();
      setSvgSize({ width: cRect.width, height: cRect.height });

      const hRect = hub.getBoundingClientRect();
      const startX = hRect.right - cRect.left;
      const startY = hRect.top - cRect.top + hRect.height / 2;

      const next = nodeRefs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const endX = r.left - cRect.left;
        const endY = r.top - cRect.top + r.height / 2;
        const midX = startX + (endX - startX) * 0.55;
        return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
      });
      setPaths(next);
    };

    measure();
    const settle = setTimeout(measure, 350);
    window.addEventListener('resize', measure);
    let ro;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(containerRef.current);
    }
    return () => {
      clearTimeout(settle);
      window.removeEventListener('resize', measure);
      if (ro) ro.disconnect();
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col lg:flex-row items-center gap-14 lg:gap-20 w-full py-10 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Curved brass connectors, measured off the live DOM */}
      {svgSize.width > 0 && (
        <svg
          width={svgSize.width}
          height={svgSize.height}
          className="hidden lg:block absolute top-0 left-0 pointer-events-none z-0"
          aria-hidden="true"
        >
          {paths.map((d, i) => d && (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#C08A3E"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.55"
            />
          ))}
        </svg>
      )}

      {/* Central Hub */}
      <div ref={hubRef} className="relative z-10 w-full lg:w-[320px] flex justify-center shrink-0">
        <div className="absolute inset-0 bg-[#C08A3E] rounded-full blur-[70px] opacity-20 animate-pulse" />
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px] rounded-full border-[6px] border-[#C08A3E] bg-[#0E2E2B] flex flex-col items-center justify-center text-center p-7 shadow-[0_0_50px_rgba(192,138,62,0.3)] hover:scale-105 transition-transform duration-500">
          <h2 className="font-display text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] text-[#FBF6EC] leading-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Nodes — small icon medallions with text set beside them */}
      <div className="relative z-10 w-full lg:flex-1 flex flex-col gap-8 lg:gap-10">
        {items.map((item, idx) => (
          <div key={idx} className="group flex items-start gap-5">
            <div
              ref={(el) => { nodeRefs.current[idx] = el; }}
              className="w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 rounded-full bg-[#FBF6EC] border-[3px] border-[#E4C27A] flex items-center justify-center text-[#8A5B1F] shadow-md group-hover:border-[#C08A3E] group-hover:bg-[#E4C27A] transition-colors duration-300"
            >
              <IconGlyph name={item.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="pt-1">
              <h4 className="font-display text-[1.15rem] sm:text-[1.3rem] text-[#E4C27A] mb-1 transition-colors">
                {item.title}
              </h4>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#FBF6EC] leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Cycle of icons for the ritual steps — the data only carries a step number,
   title and description, so each stage gets a fitting glyph by position. */
const STEP_ICONS = [Flower2, ShieldCheck, BookOpen, Flame, HeartHandshake, Users];

/* One step card for the radial layout */
function RadialProcessCard({ step, idx }) {
  const [ref, inView] = useReveal(0.2);
  const StepIcon = STEP_ICONS[idx % STEP_ICONS.length];
  const isRightSide = idx === 0 || idx === 1 || idx === 2 || idx === 3;
  
  return (
    <div
      ref={ref}
      className={`relative w-full sm:w-[280px] xl:w-[320px] transition-all duration-700 ease-out group
        ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    >
      <div className={`relative flex bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1
        ${!isRightSide ? 'flex-row-reverse' : ''}`}
      >
        <div className="w-10 xl:w-12 shrink-0 flex items-center justify-center py-4 bg-[#C08A3E]">
          <span
            className="font-display text-[11px] tracking-[0.2em] whitespace-nowrap text-[#182922]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            STEP {step.step}
          </span>
        </div>
        <div className="flex-1 p-4 xl:p-5 text-left">
          <div className={`flex items-center gap-3 mb-2 ${!isRightSide ? 'flex-row-reverse text-right' : ''}`}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#C08A3E]/15 text-[#8A5B1F] group-hover:bg-[#C08A3E] group-hover:text-[#FBF6EC] transition-colors">
              <StepIcon className="w-4 h-4" strokeWidth={2} />
            </div>
            <h4 className="font-display text-[1.1rem] xl:text-[1.2rem] text-[#241C15] leading-snug">
              {step.title}
            </h4>
          </div>
          <p className="text-[13px] xl:text-[13.5px] leading-relaxed text-[#5B5142]">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function RitualProcess({ steps }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10">
      {/* Mobile/Tablet View */}
      <div className="flex flex-col items-center gap-6 lg:hidden">
        {/* Added a center image for mobile as well */}
        <div className="relative w-48 h-48 rounded-full border border-[#C08A3E]/30 p-2 z-10 mb-6 mt-4">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#C08A3E]/40 animate-[spin_60s_linear_infinite]" />
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_40px_rgba(228,194,122,0.15)]">
            <div className="absolute inset-0 bg-[#0E2E2B]/40 z-10 rounded-full mix-blend-multiply" />
            <img 
              src={`${import.meta.env.BASE_URL}image.png`} 
              alt="Sacred Ritual" 
              className="w-full h-full object-cover rounded-full filter brightness-110 contrast-125"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,194,122,0.4)_0%,transparent_60%)] z-20 mix-blend-screen animate-pulse" />
          </div>
        </div>
        {steps.map((step, idx) => (
          <RadialProcessCard key={idx} step={step} idx={idx} />
        ))}
      </div>

      {/* Desktop Radial View */}
      <div className="hidden lg:block relative w-full aspect-square max-h-[850px] mx-auto mt-12 mb-16">
        
        {/* Central Diya Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 xl:w-80 h-64 xl:h-80 rounded-full border border-[#C08A3E]/30 p-2 z-10">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#C08A3E]/40 animate-[spin_60s_linear_infinite]" />
          
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_60px_rgba(228,194,122,0.2)]">
            <div className="absolute inset-0 bg-[#0E2E2B]/40 z-10 rounded-full mix-blend-multiply" />
            <img 
              src={`${import.meta.env.BASE_URL}image.png`} 
              alt="Sacred Ritual" 
              className="w-full h-full object-cover rounded-full filter brightness-110 contrast-125"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,194,122,0.4)_0%,transparent_60%)] z-20 mix-blend-screen animate-pulse" />
          </div>
        </div>

        {/* Nodes and Dotted Connecting Lines */}
        {steps.map((step, idx) => {
          // Adjust angle: Top is 0 degrees, clockwise
          const angleDeg = idx * (360 / steps.length);
          const angleRad = (angleDeg - 90) * (Math.PI / 180);
          
          // Radius from center
          const radius = 340; 
          
          const left = `calc(50% + ${Math.cos(angleRad) * radius}px)`;
          const top = `calc(50% + ${Math.sin(angleRad) * radius}px)`;
          
          const lineLength = 220; 
          
          return (
            <div key={idx} className="absolute inset-0 pointer-events-none">
              
              {/* Connector Line */}
              <div 
                className="absolute top-1/2 left-1/2 h-px bg-transparent border-t border-dashed border-[#C08A3E]/40"
                style={{
                  width: `${lineLength}px`,
                  transformOrigin: '0 0',
                  transform: `rotate(${angleDeg - 90}deg)`,
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E4C27A] shadow-[0_0_10px_rgba(228,194,122,1)]" />
              </div>

              {/* The Card */}
              <div 
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ left, top }}
              >
                <RadialProcessCard step={step} idx={idx} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* A large outline numeral sits behind every section heading — a single,
   consistent structural device (this page is a sequential ritual guide)
   instead of a repeated ALL-CAPS eyebrow label over each section. */
function ChapterHeading({ index, title, subtitle, dark = false, center = false }) {
  return (
    <div className={`relative ${center ? 'text-center' : ''} mb-10 md:mb-14`}>

      <h2
        className={`relative font-display font-normal leading-[1.15]
          text-[1.9rem] sm:text-4xl md:text-[2.65rem]
          ${dark ? 'text-[#FBF6EC]' : 'text-[#241C15]'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`relative mt-4 max-w-xl text-[15px] leading-relaxed font-medium
          ${center ? 'mx-auto' : ''} ${dark ? 'text-[#FBF6EC]/70' : 'text-[#5B5142]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* A quiet, hairline colophon rule — used only twice on the whole page
   (open + close), not stamped between every section. */
function Colophon({ dark = false }) {
  const tone = dark ? '#E4C27A' : '#C08A3E';
  return (
    <div className="flex items-center justify-center gap-3 my-2" aria-hidden="true">
      <span className="h-px w-14" style={{ background: `linear-gradient(to right, transparent, ${tone})` }} />
      <span className="w-[7px] h-[7px] rotate-45" style={{ background: tone }} />
      <span className="h-px w-14" style={{ background: `linear-gradient(to left, transparent, ${tone})` }} />
    </div>
  );
}

/* Temple-arch clip, defined once, reused by the gallery and the
   "why choose us" portrait so every framed image reads as the same motif. */
function ArchClipDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="templeArch" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.32 C0,0.12 0.22,0 0.5,0 C0.78,0 1,0.12 1,0.32 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ServicePage() {
  const { serviceId } = useParams();
  const { onOpenEnquiry } = useOutletContext();
  const data = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [serviceId]);

  // Load the two type families once, without touching the app's global CSS.
  useEffect(() => {
    if (document.getElementById('svc-fonts')) return;
    const link = document.createElement('link');
    link.id = 'svc-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Rozha+One&family=Manrope:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  if (!data) {
    return (
      <div className="p-20 text-center font-sans text-[#241C15]">Service not found.</div>
    );
  }

  return (
    <div className="w-full bg-[#FBF6EC] text-[#241C15] overflow-x-hidden" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <style>{`
        .font-display { font-family: 'Rozha One', serif; }
        .svc-dropcap::first-letter {
          font-family: 'Rozha One', serif;
          float: left;
          font-size: 3.6rem;
          line-height: 0.8;
          padding-right: 0.35rem;
          padding-top: 0.35rem;
          color: #C08A3E;
        }
        @keyframes svc-lamp-flicker {
          0%, 100% { opacity: 1; transform: scaleY(1); filter: drop-shadow(0 0 6px rgba(228,194,122,0.55)); }
          45% { opacity: 0.88; transform: scaleY(0.94); filter: drop-shadow(0 0 3px rgba(228,194,122,0.35)); }
          60% { opacity: 1; transform: scaleY(1.03); filter: drop-shadow(0 0 8px rgba(228,194,122,0.6)); }
        }
        .svc-lamp { animation: svc-lamp-flicker 2.6s ease-in-out infinite; transform-origin: bottom center; }
        @media (prefers-reduced-motion: reduce) {
          .svc-lamp { animation: none; }
        }
      `}</style>

      <ArchClipDefs />

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[52vh] min-h-[380px] max-h-[560px] bg-[#0E2E2B]">
        <img
          src={`${import.meta.env.BASE_URL}images/${data.heroImage}`}
          alt={data.title}
          className={`absolute inset-0 w-full h-full object-cover opacity-[0.85] ${data.heroPosition || 'object-center'}`}
        />
        {/* Reading gradient — deepest at the base, where the parapet meets it */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081E1C] via-[#081E1C]/35 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-[3rem] sm:text-6xl md:text-7xl lg:text-[5rem] text-[#FBF6EC] leading-[1.08] drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] max-w-4xl">
            {data.title}
          </h1>
          {data.titleHighlight && (
            <p className="mt-3 text-[#E4C27A] text-base sm:text-xl md:text-2xl tracking-[0.08em] font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              {data.titleHighlight}
            </p>
          )}
          <p className="mt-5 max-w-2xl text-[#FBF6EC]/90 text-base sm:text-lg md:text-xl font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            {data.heroSubtitle}
          </p>
        </div>


      </section>

      {/* ================= I. OVERVIEW ================= */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
        <ChapterHeading index={0} title={data.overview.title} />

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* manuscript-style intro, with a drop cap rather than a card */}
          <div className="lg:w-[44%]">
            <p className="text-[16px] leading-[1.9] text-[#8C6544] font-medium whitespace-pre-line">
              {data.overview.description}
            </p>
          </div>

          {/* highlights as a hairline-ruled list — no boxes, no drop shadows */}
          <div className="lg:w-[56%] border-t border-[#241C15]/10">
            {data.overview.highlights.map((h, idx) => (
              <div key={idx} className="flex gap-5 py-6 border-b border-[#241C15]/10">
                <div className="w-12 h-12 shrink-0 rounded-full border border-[#C08A3E]/60 flex items-center justify-center text-[#C08A3E]">
                  <IconGlyph name={h.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-[1.2rem] text-[#241C15] mb-1.5">{h.title}</h4>
                  <p className="text-[14.5px] leading-relaxed text-[#5B5142]">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= II. BENEFITS ================= */}
      <section className="relative py-12 md:py-16 px-5 sm:px-8 lg:px-10 bg-gradient-to-b from-[#0E2E2B] to-[#081E1C] overflow-hidden">
        <div className="relative max-w-6xl mx-auto">          <InfographicBenefits
            title={data.benefits.title}
            subtitle={data.benefits.subtitle}
            items={data.benefits.items}
          />
        </div>
      </section>

      {/* ================= III. GALLERY ================= */}
      <section className="py-12 md:py-16 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
        <ChapterHeading index={2} title={data.gallery.title} subtitle={data.gallery.subtitle} center />

        {/* an uneven filmstrip, arch-framed, rather than a uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-5 md:gap-6">
          {data.gallery.images.map((img, idx) => {
            return (
              <div
                key={idx}
                className="aspect-[3/4] bg-[#0E2E2B] overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt={`Ritual moment ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= IV. RITUAL PROCESS ================= */}
      <SacredProcess centerImage={`${import.meta.env.BASE_URL}image.png`} items={data.process.steps} />

      {/* ================= V. WHY CHOOSE US ================= */}
      <section className="mt-8 md:mt-16 py-12 md:py-16 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-start">
          <div className="w-full md:max-w-md lg:max-w-none mx-auto lg:w-[42%] lg:mx-0">
            <div
              className="aspect-square sm:aspect-[4/5] bg-[#0E2E2B] overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={
                  data.whyChooseUs.image.startsWith('../')
                    ? `${import.meta.env.BASE_URL}${data.whyChooseUs.image.replace(/^\.\.\//, '')}`
                    : data.whyChooseUs.image.startsWith('/')
                    ? `${import.meta.env.BASE_URL}${data.whyChooseUs.image.slice(1)}`
                    : `${import.meta.env.BASE_URL}images/${data.whyChooseUs.image}`
                }
                alt="Why choose us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-[58%] w-full">
            <ChapterHeading index={4} title={data.whyChooseUs.title} />
            <p className="text-[15.5px] leading-[1.85] text-[#3B3226] font-medium whitespace-pre-line mb-8">
              {data.whyChooseUs.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {data.whyChooseUs.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 py-3 border-b border-[#241C15]/10">
                  <span className="w-[7px] h-[7px] rotate-45 bg-[#C08A3E] shrink-0" />
                  <span className="text-[14.5px] font-semibold text-[#241C15]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= CLOSING CTA ================= */}
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
