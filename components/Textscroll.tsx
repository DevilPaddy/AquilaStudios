'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

// 1. Word Component
const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]); 
  
  return (
    <motion.span 
      style={{ opacity }} 
      className="inline-block transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
};

// 2. Main Component
export default function ScrollTextReveal({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  });

  const words = value.split(" ");

  return (
    <p 
      ref={element} 
      // REMOVED "flex" and "flex-wrap". Now it acts like normal text.
      className="text-zinc-800 leading-10"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          // We wrap the Word and a manual space {" "} in a fragment or span
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {/* THIS IS THE FIX: Explicitly adding a space character */}
            {" "}
          </span>
        );
      })}
    </p>
  );
}