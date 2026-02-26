import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, Headphones, TrendingUp, Wallet, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "All-in-One Panel",
    description: "Single wallet for mobile, DTH, bills & more — manage everything from one dashboard.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Recharge",
    description: "Instant processing with minimal downtime and high success rates across all operators.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Advanced payment gateway with quick refunds for any failed transactions.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description: "Round-the-clock WhatsApp & live chat support for retailers and distributors.",
  },
  {
    icon: TrendingUp,
    title: "High Commission Rates",
    description: "Industry-leading commissions with low investment and no monthly targets.",
  },
  {
    icon: Clock,
    title: "Time-Saving Solutions",
    description: "Smart recharge slabs, bulk processing and automated reminders for due dates.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Why Choose <span className="text-primary">TFCPAY</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            India's most trusted multi-recharge platform — built for speed, security, and maximum earnings.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={cardVariants} className="group flex flex-col items-center text-center gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/why-choose-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-colors duration-300 text-sm"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUsSection;
