import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Building2, Map, TrendingUp } from "lucide-react";
import { siteConfig } from "../config/site-config";

interface LandingPageProps {
  onExplore: () => void;
}

export function LandingPage({ onExplore }: LandingPageProps) {
  const { landing } = siteConfig;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0099CC 0%, #6FD56F 100%)",
      }}
    >
      {/* Background decorative icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 opacity-10"
        >
          <Building2 size={80} className="text-white" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-32 opacity-15"
        >
          <Map size={100} className="text-white" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-40 opacity-20"
        >
          <TrendingUp size={90} className="text-white" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-20 opacity-10"
        >
          <Building2 size={70} className="text-white" />
        </motion.div>
      </div>

      {/* Centered prominent logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-x-0 top-12 flex justify-center pointer-events-none"
      >
        <div className="rounded-full bg-white/10 p-4 w-36 h-36 flex items-center justify-center shadow-2xl">
          <img src="/logo.png" alt="Transparencia Local 360" className="w-28 h-28 object-contain" />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.h1
          className="text-white mb-4"
          style={{
            fontSize: "48px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.25)",
          }}
        >
          {landing.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/90 mb-12"
          style={{
            fontSize: "20px",
            color: "#EAF8EF",
          }}
        >
          {landing.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onExplore}
            className="text-white shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "#4CAF50",
              borderRadius: "24px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
          >
            {landing.ctaButton}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
