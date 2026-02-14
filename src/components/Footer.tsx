import { Facebook, Instagram, Linkedin, Send, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TRIGGER_DOWNLOAD_DIALOG } from "./DownloadDialog";

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const PinterestLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.051.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
  </svg>
);

const serviceLinks = [
  { label: "Mobile Prepaid", href: "#Mobile" },
  { label: "DTH Recharge", href: "#dth" },
  { label: "Cable TV", href: "#Cable" },
  { label: "Electricity", href: "#Electricity" },
  { label: "Gas Cylinder", href: "#gas" },
  { label: "Piped Gas", href: "#pipe" },
  { label: "Landline", href: "#Landline" },
  { label: "Fastag", href: "#Fastag" },
  { label: "Broadband", href: "#Broadband" },
  { label: "Water Bill", href: "#water" },
  { label: "Credit Card", href: "#CreditCard" },
  { label: "Rent Payment", href: "#Rent" },
];

const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ's", href: "/faq" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
];

const socialLinks = [
  { icon: WhatsAppLogo, href: "https://api.whatsapp.com/send/?phone=919999906222", label: "WhatsApp" },
  { icon: Facebook, href: "https://www.facebook.com//profile.php?id=61587550133849", label: "Facebook" },
  { icon: XLogo, href: "https://x.com/tfcpay", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/tfcpay_app", label: "Instagram" },
  { icon: PinterestLogo, href: "https://in.pinterest.com/tfcpay2/", label: "Pinterest" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand & Contact */}
          {/* 1. Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="TFCPAY Logo" className="h-10 w-auto object-contain" onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Smart Desh ka, Smart App</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Seamless payments, instant recharges, and rewarding experiences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unit-22, 17th floor,L-2A, Pocket G, Sector-18, Noida, Uttar Pradesh 201301
                </p>
              </div>

              <a href="mailto:care@tfcpay.app" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>care@tfcpay.app</span>
              </a>

              <a href="tel:0120-442-0120" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0120-442-0120</span>
              </a>
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-6 uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent(TRIGGER_DOWNLOAD_DIALOG))}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-6 uppercase tracking-widest">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter & Socials */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest">Subscribe Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Be the first to receive all latest updates in your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TFC DIGITAL PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
