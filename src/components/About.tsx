import { useRef, useEffect, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering results that exceed expectations.",
    },
    {
      title: "Integrity",
      description: "We operate with integrity, building trust through transparency and ethical practices.",
    },
    {
      title: "Innovation",
      description: "We embrace solutions to drive progress and create lasting value for our clients.",
    },
    {
      title: "Client Focus",
      description: "We put our clients first, tailoring our approach to meet their unique needs and objectives.",
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg"></div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Team meeting"
                  className="w-full h-auto rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-lg"></div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Pioneering Business Excellence in Dubai</h3>
              
              <p className="text-gray-600 mb-6">
                Dubai Services Consulting (DSC) was founded with a vision to provide exceptional consulting services that empower businesses to achieve their full potential. With decades of combined expertise, our team delivers solutions tailored to the unique challenges of the Middle East market.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-primary mb-3">Our Mission</h4>
                <p className="text-gray-600">
                  To deliver innovative, client-focused consulting services that drive sustainable growth, operational excellence, and competitive advantage for organizations throughout the UAE and beyond.
                </p>
              </div>
              
              <h4 className="text-xl font-bold text-primary mb-4">Our Core Values</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-lg text-secondary mb-2">{value.title}</h5>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;