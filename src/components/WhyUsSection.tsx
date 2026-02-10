import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, MessageCircle, Calendar } from "lucide-react";

const features = [
  {
    image: `${import.meta.env.BASE_URL}why%20us%20(1).webp`,
    title: "Multiple Campaigns",
    description: "Run and participate in multiple cashback campaigns simultaneously to maximize your earnings.",
  },
  {
    image: `${import.meta.env.BASE_URL}why%20us%20(4).webp`,
    title: "Advanced Analytics",
    description: "Track your spending patterns, cashback earned, and savings with detailed insights.",
  },
  {
    image: `${import.meta.env.BASE_URL}why%20us%20new%20(4).webp`,
    title: "Live Chat Support",
    description: "Get instant help with our 24/7 live chat support for all your queries and issues.",
  },
  {
    image: `${import.meta.env.BASE_URL}why%20us%20new%20(1).webp`,
    title: "Event Scheduler",
    description: "Schedule your bill payments and never miss a due date with automated reminders.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">TFCPAY</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just a payment app. We're your financial companion designed to help you save more and stress less.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center group overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-square overflow-hidden bg-muted/20">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x400?text=Image+Not+Found"; // Fallback for missing images
                  }}
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col justify-start relative z-10 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUsSection;
