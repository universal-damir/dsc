import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 bg-white ${
          scrolled 
            ? 'shadow-md py-3' 
            : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={scrollToTop}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Go to home"
          >
            <img 
              src="/DSC Logo.png" 
              alt="Dubai Services Consulting Logo" 
              className="h-12 sm:h-14"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['about', 'services', 'why-us', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="text-sm uppercase tracking-wider font-medium transition-colors text-primary hover:text-secondary"
                  >
                    {item === 'why-us' ? 'Why Choose Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <div 
          className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="py-4 px-6 space-y-4">
            {['about', 'services', 'why-us', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className="text-primary hover:text-secondary w-full text-left py-2 text-base font-medium"
                >
                  {item === 'why-us' ? 'Why Choose Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>
      
      {/* Back to top button */}
      <button 
        className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Header;