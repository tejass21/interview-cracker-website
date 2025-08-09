import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X, LogIn, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldDark);
    setIsDark(shouldDark);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text">Interview Cracker</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 md:space-x-6 lg:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer px-3 py-2"
                    onClick={() => scrollToSection('features')}
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer px-3 py-2"
                    onClick={() => scrollToSection('how-to-use')}
                  >
                    How It Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer px-3 py-2"
                    onClick={() => scrollToSection('pricing')}
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer px-3 py-2"
                    onClick={() => scrollToSection('downloads')}
                  >
                    Download
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <SignedIn>
              <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
              <Button variant="hero" size="sm" className="hover-lift" onClick={() => navigate('/sign-in')}>
                <LogIn className="w-4 h-4 mr-2" />
                Sign in
              </Button>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-3">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-to-use')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('downloads')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Download
              </button>
              <div className="pt-2">
                <SignedIn>
                  <div className="flex w-full justify-start">
                    <UserButton afterSignOutUrl="/"/>
                  </div>
                </SignedIn>
                <SignedOut>
                  <Button variant="hero" size="sm" className="w-full" onClick={() => { setIsOpen(false); navigate('/sign-in'); }}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign in
                  </Button>
                </SignedOut>
              </div>
              <div className="pt-1">
                <Button variant="outline" size="sm" className="w-full" onClick={() => toggleTheme()}>
                  {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                  Toggle theme
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