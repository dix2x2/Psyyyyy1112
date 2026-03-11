import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Floating Diamond */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="absolute top-[10%] left-[10%] text-royal-500/10 dark:text-royal-400/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path fill="currentColor" d="M60,0 L120,60 L60,120 L0,60 Z" />
      </motion.svg>

      {/* Floating Circle */}
      <motion.svg
        width="250"
        height="250"
        viewBox="0 0 200 200"
        className="absolute top-[60%] right-[5%] text-royal-500/5 dark:text-royal-400/5"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="100" cy="100" r="100" fill="currentColor" />
      </motion.svg>

      {/* Floating Rounded Rect */}
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        className="absolute bottom-[10%] left-[20%] text-royal-500/10 dark:text-royal-400/10"
        animate={{
          x: [0, 20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect width="100" height="100" x="25" y="25" rx="20" fill="currentColor" />
      </motion.svg>
      
      {/* Floating Triangle */}
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="absolute top-[20%] right-[25%] text-royal-500/10 dark:text-royal-400/10"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon points="40,0 80,80 0,80" fill="currentColor" />
      </motion.svg>

      {/* Floating Hexagon */}
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="absolute top-[40%] left-[40%] text-royal-500/5 dark:text-royal-400/5"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="currentColor" />
      </motion.svg>

      {/* Extra Star */}
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        className="absolute bottom-[30%] right-[30%] text-royal-500/5 dark:text-royal-400/5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path fill="currentColor" d="M90,0 L110,60 L180,60 L120,100 L140,180 L90,130 L40,180 L60,100 L0,60 L70,60 Z" />
      </motion.svg>

      {/* Extra Cross */}
      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        className="absolute top-[70%] left-[5%] text-royal-500/10 dark:text-royal-400/10"
        animate={{
          rotate: [0, -180],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path fill="currentColor" d="M50,0 L90,0 L90,50 L140,50 L140,90 L90,90 L90,140 L50,140 L50,90 L0,90 L0,50 L50,50 Z" />
      </motion.svg>

      {/* Extra Wave */}
      <motion.svg
        width="300"
        height="100"
        viewBox="0 0 300 100"
        className="absolute top-[5%] right-[40%] text-royal-500/5 dark:text-royal-400/5"
        animate={{
          x: [0, -50, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path fill="none" stroke="currentColor" strokeWidth="4" d="M0,50 Q75,0 150,50 T300,50" />
      </motion.svg>

      {/* Extra Rings */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="absolute bottom-[5%] right-[15%] text-royal-500/10 dark:text-royal-400/10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
    </div>
  );
}
