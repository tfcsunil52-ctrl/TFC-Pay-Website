import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const service = {
  iconImage: "insurance-icon.webp",
  title: "Insurance Premium Payment",
  description: "Secure your future and protect your assets. Pay premiums for health, life, and vehicle insurance policies instantly with bank-grade security and instant confirmation.",
  features: ["2-Wheeler Insurance", "Car Insurance", "Health & Life Insurance"],
};

const PremiumSection = () => {
  return (
    <section id="premium" className="py-16 md:py-24 relative bg-background overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">

        {/* Main Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight flex flex-row flex-wrap items-center justify-center gap-x-3 md:gap-x-4"
          >
            <span>Premium</span>
            <span className="text-primary">Insurance</span>
            <span>Services</span>
          </motion.h2>
        </div>

        {/* Insurance Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >

          {/* Left Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {service.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-3 pt-2 items-center lg:items-start">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground md:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px]">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              <motion.img
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={`${import.meta.env.BASE_URL}${service.iconImage}`}
                alt={service.title}
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default PremiumSection;
