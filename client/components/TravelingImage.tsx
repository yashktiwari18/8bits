import { useScroll, useTransform, motion } from 'framer-motion';

export default function TravelingImage() {
  const { scrollYProgress } = useScroll();

  // The hero section takes up approx 0 to 0.2 of total scroll
  // The image should appear after hero section (0.25) and travel until the footer (0.9)
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.25, 0.9, 0.95], [0, 0, 1, 1, 0]);
  
  // Transform positions
  // Keep it fixed vertically in viewport but animate its Y slight off-center, 
  // and make it zigzag horizontally
  const y = useTransform(scrollYProgress, [0.25, 0.9], ['20vh', '40vh']); 
  const x = useTransform(scrollYProgress, [0.25, 0.45, 0.65, 0.85], ['0vw', '25vw', '-25vw', '0vw']);
  const rotate = useTransform(scrollYProgress, [0.25, 0.45, 0.65, 0.85], [0, 15, -15, 0]);
  const scale = useTransform(scrollYProgress, [0.25, 0.45, 0.65, 0.85], [0.8, 1.1, 0.9, 1]);

  return (
    <motion.div 
      style={{ opacity, x, y, rotate, scale }}
      className="hidden md:block fixed top-0 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
    >
      <img src="/bg3.png" alt="Traveling Element" className="h-[40vh] md:h-[50vh] w-auto drop-shadow-2xl object-contain" />
    </motion.div>
  );
}
