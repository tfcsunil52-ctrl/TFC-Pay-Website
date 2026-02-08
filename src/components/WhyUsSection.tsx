import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, MessageCircle, Calendar } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Multiple Campaigns",
    description: "Run and participate in multiple cashback campaigns simultaneously to maximize your earnings.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track your spending patterns, cashback earned, and savings with detailed insights.",
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant help with our 24/7 live chat support for all your queries and issues.",
  },
  {
    icon: Calendar,
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
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
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
