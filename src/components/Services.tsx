import React from 'react';
import { Truck, Shield, Clock, DollarSign, FileText, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="text-yellow-500" size={48} />,
      title: "Import & Logistics",
      description: "Complete import management from China with full logistics coordination, customs clearance, and delivery to your location in Thailand."
    },
    {
      icon: <Shield className="text-yellow-500" size={48} />,
      title: "Quality Assurance",
      description: "Rigorous quality control and inspection services ensuring all imported goods meet Thai standards and your specifications."
    },
    {
      icon: <Clock className="text-yellow-500" size={48} />,
      title: "Fast Delivery",
      description: "Efficient supply chain management with predictable delivery timelines and real-time tracking for all shipments."
    },
    {
      icon: <DollarSign className="text-yellow-500" size={48} />,
      title: "Bulk Pricing",
      description: "Competitive wholesale pricing with volume discounts for distributors and retailers. Maximize your profit margins with our bulk rates."
    },
    {
      icon: <FileText className="text-yellow-500" size={48} />,
      title: "Documentation",
      description: "Complete handling of all import documentation, permits, and regulatory compliance for hassle-free international trade."
    },
    {
      icon: <HeadphonesIcon className="text-yellow-500" size={48} />,
      title: "24/7 Support",
      description: "Dedicated account management and round-the-clock customer support to ensure smooth operations and quick issue resolution."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive Trade Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From sourcing in China to distribution in Thailand, we provide end-to-end import services 
            tailored for distributors and retailers seeking reliable bulk purchasing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;