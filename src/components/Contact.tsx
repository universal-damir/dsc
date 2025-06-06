import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "uwe@dsconsulting.ae",
      action: "mailto:uwe@dsconsulting.ae",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+971 55 55 11 018",
      action: "tel:+971555511018",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dubai Silicon Oasis, Dubai Digital Park, Building A2, Unit A217D, Dubai, UAE",
      action: "https://maps.app.goo.gl/w1Huvn8p53XKFFfS6",
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-2">Reach Out</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contact Information</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're ready to answer your questions and help solve your business challenges. 
              Reach out to our team using the contact information below.
            </p>
          </div>
          
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a 
                  key={index} 
                  href={info.action}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gray-50 cursor-pointer group"
                  aria-label={`Contact via ${info.title}`}
                >
                  <div className="bg-secondary/10 p-4 rounded-full text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-semibold text-primary text-lg mb-2">{info.title}</h4>
                  <p className="text-gray-600 group-hover:text-secondary transition-colors">
                    {info.content}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;