import { useRef, useEffect, useState } from 'react';
import { 
  LineChart, 
  Building2, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Cog
} from 'lucide-react';

const ServicesCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-6 rounded-lg shadow-md border-b-4 border-transparent 
        hover:border-secondary hover:shadow-lg transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      style={{ 
        transitionDelay: `${delay * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
        isHovered ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'
      }`}>
        <Icon size={30} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: LineChart,
      title: "Business Strategy",
      description: "Develop comprehensive strategies tailored to your unique goals and market position.",
    },
    {
      icon: Building2,
      title: "Corporate Services",
      description: "Support your business with essential administrative and operational solutions.",
    },
    {
      icon: BarChart3,
      title: "Financial Advisory",
      description: "Make informed decisions with expert financial planning, forecasting, and analysis.",
    },
    {
      icon: TrendingUp,
      title: "Market Expansion",
      description: "Manage new market entry with customized support and implementation plans.",
    },
    {
      icon: Database,
      title: "Digital Transformation",
      description: "Leverage technology to revolutionize your business processes and customer experience.",
    },
    {
      icon: Cog,
      title: "Operations Optimization",
      description: "Streamline your operations to reduce costs and improve performance.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Comprehensive Consulting Solutions</h3>
          <p className="text-gray-600">
            Our expert team provides tailored services to meet your unique business needs, delivering practical solutions with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic mb-6">
            Our services are fully customizable to meet your specific business challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;