"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useRef } from "react";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center bg-[#0E0E0E] text-white overflow-hidden"
    >
      {/* Enhanced radial lighting with animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(198, 167, 94, 0.15) 0%, rgba(198, 167, 94, 0.05) 50%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Secondary light source */}
        <motion.div 
          className="absolute right-0 top-1/3 w-[600px] h-[600px] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(198, 167, 94, 0.08) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Massive Hero Title with elegant reveal */}
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold mb-6 leading-[0.9] tracking-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            El Haj'aime
          </motion.h1>

          {/* Animated gold divider */}
          <motion.div 
            className="w-24 h-[1px] bg-gold mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Powerful tagline with staggered animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-body text-white/80 mb-12 tracking-[0.15em] uppercase font-light leading-relaxed"
          >
            Precision. Presence. Power.
          </motion.p>

          {/* CTA Buttons with enhanced hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/book">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gold text-[#0E0E0E] hover:bg-gold/90 text-base px-10 py-6 h-auto rounded-sm font-semibold tracking-wide transition-all duration-500 hover:shadow-[0_0_30px_rgba(198,167,94,0.5)] border-2 border-transparent hover:border-gold/50"
                >
                  {t("hero.cta")}
                </Button>
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-2 border-white/20 hover:border-gold hover:text-gold hover:bg-gold/5 text-base px-10 py-6 h-auto rounded-sm font-semibold tracking-wide transition-all duration-500"
                >
                  {t("nav.services")}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
