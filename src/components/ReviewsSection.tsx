import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    review: "Best payment app ever! The cashback offers are amazing and the app is super smooth. Highly recommend TFCPAY to everyone.",
  },
  {
    name: "Priya Patel",
    initials: "PP",
    rating: 5,
    review: "I've been using TFCPAY for 6 months now. The rent payment feature is a lifesaver - I earn points on my credit card every month!",
  },
  {
    name: "Amit Kumar",
    initials: "AK",
    rating: 4,
    review: "Great app for all bill payments. Customer support is quick and helpful. The OTT subscription is value for money.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${star <= 4 ? 'text-primary fill-primary' : 'text-primary/50 fill-primary/50'}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.5/5.0</span>
            <span className="text-muted-foreground">from 10,000+ reviews</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
            >
              <Card
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= review.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{review.review}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
