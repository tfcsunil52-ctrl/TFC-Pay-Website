import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ChatSupport from "./components/ChatSupport";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurVision = lazy(() => import("./pages/OurVision"));
const FAQ = lazy(() => import("./pages/FAQ"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CancellationRefund = lazy(() => import("./pages/CancellationRefund"));
const Contact = lazy(() => import("./pages/Contact"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const Copyright = lazy(() => import("./pages/Copyright"));

const queryClient = new QueryClient();

// Simple loading spinner component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="boxes">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ChatSupport />
      <BrowserRouter basename="/TFC-Pay-Website">
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-refund-policy" element={<CancellationRefund />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/copyright" element={<Copyright />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

