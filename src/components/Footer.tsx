const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-medium">Dubai Services Consulting</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Providing exceptional consulting services to businesses across the UAE and Middle East. 
              Our client-focused approach delivers measurable results and lasting value.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'why-us', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {item === 'why-us' ? 'Why Choose Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Dubai Services Consulting. All Rights Reserved.</p>
          <p className="text-primary-300 text-sm">
            DSC FZCO is registered with Dubai Integrated Economic Zones with Commercial License no. 17151 since 26.05.2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;