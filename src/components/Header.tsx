import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, ChevronDown, Smartphone, CreditCard, Receipt, Tv, ShieldCheck, ShoppingBag, Store, Globe, Speaker } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import DownloadPopup from "./DownloadPopup";
import ContactPopup from "./ContactPopup";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const solutions = [
  {
    title: "Consumer Solutions",
    items: [
      { title: "Bill Payments", description: "Pay electricity, water, gas and more", icon: Receipt },
      { title: "Mobile Recharge", description: "Quick and easy recharges for all operators", icon: Smartphone },
      { title: "Insurance Payment", description: "Pay your premiums instantly", icon: ShieldCheck },
    ],
  },
  {
    title: "Business Solutions",
    items: [
      { title: "BBPS API", description: "Comprehensive Bharat Bill Payment solutions", icon: Receipt },
      { title: "Mobile Recharge API", description: "All-in-one recharge solutions for partners", icon: Smartphone },
      { title: "DTH Payment API", description: "DTH recharge solutions for your platform", icon: Tv },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSolutionClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    if (category === "Consumer Solutions") {
      setIsDownloadOpen(true);
    } else if (category === "Business Solutions") {
      setIsContactOpen(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="TFCPAY Logo" className="h-8 w-auto object-contain" onError={(e) => {
            e.currentTarget.style.display = 'none';
          }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-2"
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary text-base font-medium px-2">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="right-0 left-auto w-auto min-w-[300px] max-w-[90vw] md:max-w-[600px]">
                  <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6 md:gap-8 bg-popover/95 backdrop-blur-sm">
                    {solutions.map((category) => (
                      <div key={category.title} className="flex-1 space-y-4 min-w-[200px]">
                        <h4 className="text-sm font-semibold text-foreground px-2">
                          {category.title}
                        </h4>
                        <div className="grid gap-1">
                          {category.items.map((item) => (
                            <NavigationMenuLink asChild key={item.title}>
                              <a
                                href="#"
                                onClick={(e) => handleSolutionClick(e, category.title)}
                                className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mt-1">
                                    <item.icon className="w-4 h-4" />
                                  </div>
                                  <div className="space-y-1">
                                    <div className="text-sm font-medium leading-none text-foreground">
                                      {item.title}
                                    </div>
                                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>


        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border overflow-y-auto">
            <nav className="flex flex-col gap-4 mt-8">
              <div className="space-y-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Our Solutions</p>
                {solutions.map((category) => (
                  <div key={category.title} className="space-y-2 pl-2">
                    <p className="text-sm font-semibold text-foreground">{category.title}</p>
                    <div className="grid gap-2 pl-2">
                      {category.items.map((item) => (
                        <button
                          key={item.title}
                          onClick={(e) => {
                            setIsOpen(false);
                            handleSolutionClick(e, category.title);
                          }}
                          className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-4 border-t border-border">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  setIsDownloadOpen(true);
                }}
                className="mt-4 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="w-4 h-4" />
                Download App
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <DownloadPopup isOpen={isDownloadOpen} onOpenChange={setIsDownloadOpen} />
      <ContactPopup isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
    </header>
  );
};

export default Header;
