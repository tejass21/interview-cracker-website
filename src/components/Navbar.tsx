import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X, LogIn, Sun, Moon, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, slideIn, scaleIn } from "@/lib/animations";
import { useDownloadWithAuth } from "@/hooks/useDownloadWithAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { handleDownload } = useDownloadWithAuth();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const shouldDark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', shouldDark);
    setIsDark(shouldDark);

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-modern">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-10 h-10 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl"></div>
              <span className="text-primary-foreground font-bold text-lg relative z-10 group-hover:scale-110 transition-transform duration-300">DA</span>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-xl font-bold text-foreground leading-tight">DesierAI</span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">Interview Assistant</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div 
            className="hidden md:flex items-center justify-center flex-1 md:space-x-8 lg:space-x-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavigationMenuLink 
                      className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                      onClick={() => scrollToSection('features')}
                    >
                      Features
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavigationMenuLink 
                      className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                      onClick={() => scrollToSection('how-to-use')}
                    >
                      How It Works
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavigationMenuLink 
                      className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                      onClick={() => scrollToSection('pricing')}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavigationMenuLink 
                      className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                      onClick={() => scrollToSection('downloads')}
                    >
                      Download
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* Desktop Actions */}
          <motion.div 
            className="hidden md:flex items-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme} className="hover:bg-accent">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </motion.div>
            <SignedIn>
              <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="btn-primary hover-glow" onClick={() => navigate('/sign-in')}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign in
                </Button>
              </motion.div>
            </SignedOut>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="sm" 
                className="btn-outline hover-glow"
                onClick={() => handleDownload('https://1drv.ms/u/s!ArtKXkK6-w6FjrtwaangEdO2SDuEkQ?e=QDQlAR', 'Windows')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Features
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('how-to-use')}
                  className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  How It Works
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pricing
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('downloads')}
                  className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download
                </motion.button>
                
                <div className="pt-4 border-t border-border">
                  <SignedIn>
                    <div className="flex w-full justify-start mb-3">
                      <UserButton afterSignOutUrl="/"/>
                    </div>
                  </SignedIn>
                  <SignedOut>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button size="sm" className="w-full mb-3 btn-primary" onClick={() => { setIsOpen(false); navigate('/sign-in'); }}>
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign in
                      </Button>
                    </motion.div>
                  </SignedOut>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      size="sm" 
                      className="w-full btn-outline"
                      onClick={() => handleDownload('https://1drv.ms/u/s!ArtKXkK6-w6FjrtwaangEdO2SDuEkQ?e=QDQlAR', 'Windows')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;