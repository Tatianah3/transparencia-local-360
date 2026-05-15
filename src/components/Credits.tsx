import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles, Heart, TrendingUp } from "lucide-react";

interface CreditsProps {
  onRestart: () => void;
}

export function Credits({ onRestart }: CreditsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-white flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        {/* Logo */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8 inline-block"
        >
          <div
            className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #0099CC 0%, #6FD56F 100%)",
            }}
          >
            <TrendingUp size={48} className="text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-800 mb-6"
        >
          ¡Gracias por explorar!
        </motion.h2>

        {/* Main message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-8"
          style={{ fontSize: "20px" }}
        >
          Prototipo desarrollado para promover la participación y transparencia
          municipal.
        </motion.p>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={40} className="text-yellow-500" />
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart size={40} className="text-red-500" fill="#EF5350" />
          </motion.div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-8 p-6 rounded-2xl"
          style={{ backgroundColor: "#F7F9FB" }}
        >
          <h3 className="text-gray-700 mb-3">Transparencia Local 360</h3>
          <p className="text-gray-600 mb-4">
            Una herramienta para fortalecer la confianza entre ciudadanía y gobierno
            local a través de la transparencia en la gestión de proyectos públicos.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>🏛️ Municipalidad de Curridabat</span>
            <span>📊 MIDEPLAN</span>
            <span>🤝 Participación Ciudadana</span>
          </div>
        </motion.div>

        {/* Restart button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onRestart}
            className="text-white shadow-lg"
            style={{
              backgroundColor: "#1976D2",
              borderRadius: "24px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            Reiniciar demo
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-gray-400 text-sm"
      >
        © 2025 - Compromiso con la transparencia y la participación ciudadana
      </motion.p>
    </motion.div>
  );
}
