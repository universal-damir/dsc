import { useRef, useState, useEffect } from 'react';

const WhyChooseUs = () => {
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

  const reasons = [
    {
      title: "Expertise & Experience",
      description: "Our team brings decades of combined expertise across diverse industries, ensuring you receive informed guidance backed by real-world experience."
    },
    {
      title: "Client-Centric Approach",
      description: "We place your needs at the center of everything we do, developing personalized solutions that align perfectly with your business objectives."
    },
    {
      title: "Proven Track Record",
      description: "Our portfolio of successful client engagements demonstrates our ability to deliver tangible results that drive business growth."
    },
    {
      title: "Local & Global Insights",
      description: "With deep knowledge of the Dubai market combined with global business acumen, we provide uniquely valuable perspectives."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Excellence That Sets Us Apart</h3>
          <p className="text-white/80">
            Dubai Services Consulting combines deep industry expertise with innovative approaches to deliver exceptional results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h4 className="text-xl font-bold text-accent mb-3">{reason.title}</h4>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;