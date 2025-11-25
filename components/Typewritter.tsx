'use client';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;       // Typing speed per letter
  waitBeforeDelete?: number; // How long to wait before deleting (ms)
  deleteSpeed?: number; // Deleting speed (usually faster)
}

export default function Typewriter({ 
  text, 
  className = "", 
  speed = 0.05, 
  waitBeforeDelete = 2000,
  deleteSpeed = 0.03
}: TypewriterProps) {
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Start when 50% visible

  useEffect(() => {
    let isMounted = true;

    const loopAnimation = async () => {
      if (isInView && isMounted) {
        // 1. Type forward
        await controls.start("visible");
        
        // 2. Wait
        await new Promise((resolve) => setTimeout(resolve, waitBeforeDelete));
        
        // 3. Delete backward (using staggerDirection: -1)
        if (isMounted) {
            await controls.start("hidden");
            // Small pause before typing again
            await new Promise((resolve) => setTimeout(resolve, 500)); 
            
            // 4. Loop
            loopAnimation(); 
        }
      }
    };

    loopAnimation();

    return () => { isMounted = false; };
  }, [controls, isInView, waitBeforeDelete]);

  // Animation configuration
  const sentenceVariants = {
    hidden: { 
      opacity: 1, // Keep container visible so layout doesn't jump
      transition: {
        staggerChildren: deleteSpeed,
        staggerDirection: -1, // This makes it delete backwards
      } 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        staggerDirection: 1, // This makes it type forwards
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" }, // display:none ensures cursor follows correctly
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <div className={`inline-flex items-center ${className}`} ref={ref}>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={sentenceVariants}
        className="inline-block" 
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
      />
    </div>
  );
}