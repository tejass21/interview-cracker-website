import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X, LogIn, Sun, Moon, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container-modern">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">DesierAI</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 md:space-x-8 lg:space-x-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                    onClick={() => scrollToSection('features')}
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                    onClick={() => scrollToSection('how-to-use')}
                  >
                    How It Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                    onClick={() => scrollToSection('pricing')}
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer px-3 py-2 font-medium"
                    onClick={() => scrollToSection('downloads')}
                  >
                    Download
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme} className="hover:bg-accent">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <SignedIn>
              <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
              <Button size="sm" className="btn-primary hover-glow" onClick={() => navigate('/sign-in')}>
                <LogIn className="w-4 h-4 mr-2" />
                Sign in
              </Button>
            </SignedOut>
            <Button size="sm" className="btn-outline hover-glow">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4">
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-to-use')}
                className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('downloads')}
                className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Download
              </button>
              
              <div className="pt-4 border-t border-border">
                <SignedIn>
                  <div className="flex w-full justify-start mb-3">
                    <UserButton afterSignOutUrl="/"/>
                  </div>
                </SignedIn>
                <SignedOut>
                  <Button size="sm" className="w-full mb-3 btn-primary" onClick={() => { setIsOpen(false); navigate('/sign-in'); }}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign in
                  </Button>
                </SignedOut>
                <Button size="sm" className="w-full btn-outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;