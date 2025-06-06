import { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4;
        sectionRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
          ref={sectionRef}
        />
      </div>
      
      {/* Black gradient overlay (only for hero section) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-70" style={{ pointerEvents: 'none' }}></div>

      {/* Content with improved readability */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
            <span className="block">Expert Consulting Solutions</span>
            <span className="block text-accent font-semibold mt-2 drop-shadow-xl">Built for Modern Business Needs</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;