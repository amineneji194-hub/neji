"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Scissors, Sparkles, Zap, Crown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "classic-cut",
    icon: Scissors,
    nameEn: "Classic Cut",
    nameAr: "قص كلاسيكي",
    descriptionEn: "Professional haircut with styling",
    descriptionAr: "قص احترافي مع تصفيف",
    duration: 30,
    price: 25,
  },
  {
    id: "premium-cut",
    icon: Crown,
    nameEn: "Premium Cut + Shave",
    nameAr: "قص مميز + حلاقة",
    descriptionEn: "Premium haircut with hot towel shave",
    descriptionAr: "قص مميز مع حلاقة بمنشفة ساخنة",
    duration: 45,
    price: 40,
  },
  {
    id: "beard-trim",
    icon: Zap,
    nameEn: "Beard Trim",
    nameAr: "تهذيب اللحية",
    descriptionEn: "Precise beard trimming and shaping",
    descriptionAr: "تهذيب وتشكيل اللحية بدقة",
    duration: 20,
    price: 15,
  },
  {
    id: "full-service",
    icon: Sparkles,
    nameEn: "Full Service",
    nameAr: "خدمة كاملة",
    descriptionEn: "Complete grooming experience: cut, shave, and styling",
    descriptionAr: "تجربة عناية كاملة: قص، حلاقة، وتصفيف",
    duration: 75,
    price: 60,
  },
];

export function Services() {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-32 bg-[#0E0E0E] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23ffffff'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23C6A75E' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.div 
            className="w-24 h-[1px] bg-gold mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <p className="text-lg text-white/60 max-w-2xl font-body tracking-wide">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="h-full bg-[#1c1c1c] border border-white/5 hover:border-gold/40 transition-all duration-500 group cursor-pointer rounded-sm overflow-hidden relative">
                    {/* Elegant hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/0 group-hover:to-gold/5 transition-all duration-500 pointer-events-none" />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <motion.div 
                        className="h-14 w-14 bg-gold/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-500"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" />
                      </motion.div>
                      <CardTitle className="text-2xl font-heading text-white mb-3 tracking-tight group-hover:text-gold transition-colors duration-300">
                        {language === "ar" ? service.nameAr : service.nameEn}
                      </CardTitle>
                      <CardDescription className="text-white/60 font-body group-hover:text-white/80 transition-colors duration-300">
                        {language === "ar"
                          ? service.descriptionAr
                          : service.descriptionEn}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-white/50 font-body">
                          {service.duration} min
                        </span>
                        <span className="text-3xl font-bold text-gold font-heading group-hover:scale-110 transition-transform duration-300">
                          {formatCurrency(service.price)}
                        </span>
                      </div>
                      <Link href="/book">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            className="w-full border-white/10 hover:border-gold hover:text-gold hover:bg-gold/10 rounded-sm font-semibold tracking-wide transition-all duration-500"
                          >
                            {language === "ar" ? "احجز الآن" : "Book Now"}
                          </Button>
                        </motion.div>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
