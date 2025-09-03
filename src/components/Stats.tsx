import React from 'react';
import { Package, Users, Globe, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Package className="text-blue-600" size={40} />,
      number: "50,000+",
      label: "Products Imported",
      description: "Wide variety of goods"
    },
    {
      icon: <Users className="text-blue-600" size={40} />,
      number: "200+",
      label: "Active Partners",
      description: "Distributors & Retailers"
    },
    {
      icon: <Globe className="text-blue-600" size={40} />,
      number: "15+",
      label: "Years Experience",
      description: "In international trade"
    },
    {
      icon: <Award className="text-blue-600" size={40} />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Proven track record"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;