import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useMotionValueEvent, useMotionValue, animate } from 'framer-motion';
import { MessageCircle, LayoutGrid, Tag, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FRAME_COUNT = 240;
const currentFrame = (index: number) =>
  `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

interface HeroFrameProps {
  onContactClick: () => void;
}

const bubbleServices = [
  { id: 1, title: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/918521080076' },
  { id: 2, title: 'Services', icon: LayoutGrid, hash: '#services' },
  { id: 3, title: 'Pricing', icon: Tag, path: '/pricing' },
  { id: 4, title: 'Contact', icon: Mail, contactModal: true },
];

export default function HeroFrame({ onContactClick }: HeroFrameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const imgArray: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const progress = useMotionValue(0);
  const frameIndex = useTransform(progress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    if (images.length > 0) {
      // Start the animation to automatically increment progress from 0 to 1 over 8 seconds
      animate(progress, 1, {
        duration: 8,
        ease: "easeInOut",
      });
    }
  }, [images, progress]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    // Set internal resolution matching standard 16:9
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    // Safely get index
    const arrayIndex = Math.min(Math.max(0, Math.floor(index) - 1), FRAME_COUNT - 1);
    const img = images[arrayIndex];
    if (img && img.complete) {
      ctx!.fillStyle = '#FAFAFA';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    requestAnimationFrame(() => drawFrame(latest));
  });

  // Initial draw
  useEffect(() => {
    if (images.length > 0 && images[0]) {
      images[0].onload = () => drawFrame(1);
    }
  }, [images]);

  // Story Sequence Transforms
  
  // Intro Text fades out quickly
  const introOpacity = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const introScale = useTransform(progress, [0, 0.2], [1, 0.9]);

  // Bubbles fade in and scale up as the laptop settles (around 60% progress)
  const bubbleOpacity = useTransform(progress, [0.5, 0.7, 0.9, 1], [0, 1, 1, 1]);
  const bubbleScale = useTransform(progress, [0.5, 0.7], [0.5, 1]);

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-[#E8F1FF]">
      
      {/* Fullscreen Experience */}
      <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Simple absolute logo to replace header */}
        <div className="absolute top-8 left-8 z-50 flex items-center gap-3">
          <img src="/8bit.png" alt="8bitdev" className="w-10 h-10 rounded-xl shadow-sm" />
          <span className="font-black text-2xl tracking-tighter text-gray-900 drop-shadow-md">8bitdev</span>
        </div>

        {/* CTA Button top right */}
        <button
          onClick={onContactClick}
          className="absolute top-8 right-8 z-50 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold hover:scale-105 hover:bg-yellow-300 transition-all shadow-md border-2 border-yellow-200"
        >
          Get Started
        </button>

        {/* Canvas Background */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        
        {/* Intro */}
        <motion.div 
          style={{ opacity: introOpacity, scale: introScale }}
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10 w-full mt-[-10vh] pointer-events-none"
        >
          <span className="px-5 py-2 rounded-full bg-white/60 backdrop-blur-md text-gray-800 font-bold text-sm mb-8 shadow-sm border border-white/40">
            ✨ Transforming Ideas into Digital Reality
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-gray-900 mb-6 drop-shadow-lg leading-none tracking-tighter">
            8Bitdev <br /> <span className="text-blue-500 font-medium tracking-tight text-5xl md:text-7xl lg:text-8xl">Digital Solutions</span>
          </h1>
        </motion.div>

        {/* --- PREMIUM FLOATING SATELLITE PILLS --- */}
        <motion.div 
          style={{ opacity: bubbleOpacity, scale: bubbleScale }} 
          className="absolute inset-0 pointer-events-none hidden md:block z-20"
        >
          {bubbleServices.map((service, index) => {
            // Elegant asymmetrical positioning around the laptop base
            const positions = [
              "bottom-[22%] left-[12%] 2xl:bottom-[25%] 2xl:left-[18%]", // Home
              "bottom-[8%] left-[22%] 2xl:bottom-[10%] 2xl:left-[28%]", // Services
              "bottom-[22%] right-[12%] 2xl:bottom-[25%] 2xl:right-[18%]", // Pricing
              "bottom-[8%] right-[22%] 2xl:bottom-[10%] 2xl:right-[28%]"  // Contact
            ];
            
            return (
              <motion.div
                key={service.id}
                initial={{ y: 0, opacity: 0, scale: 0.8 }}
                animate={{ y: [0, -12, 0], opacity: 1, scale: 1 }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 },
                  opacity: { duration: 0.6, delay: 0.5 + index * 0.1 },
                  scale: { duration: 0.6, delay: 0.5 + index * 0.1 }
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute ${positions[index]} pointer-events-auto flex items-center gap-3 md:gap-4 p-2 pr-6 md:pr-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),_inset_0_1px_15px_rgba(255,255,255,0.9)] border border-white/60 dark:border-white/10 cursor-pointer group transition-all duration-300 hover:bg-white/80`}
                onClick={() => {
                  if (service.contactModal) {
                    onContactClick();
                  } else if (service.url) {
                    window.open(service.url, '_blank');
                  } else if (service.path) {
                    navigate(service.path);
                  } else if (service.hash) {
                    if (service.hash === '#home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        const el = document.querySelector(service.hash);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        else navigate('/' + service.hash);
                    }
                  }
                }}
              >
                  {/* Distinctive icon badge */}
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] group-hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] transform-gpu group-hover:-translate-y-1 transition-all duration-300">
                    <service.icon strokeWidth={2.5} className="w-5 h-5 md:w-6 md:h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <span className="text-sm md:text-base font-black text-slate-800 tracking-tight whitespace-nowrap group-hover:text-blue-900">
                    {service.title}
                  </span>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
