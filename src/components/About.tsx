import React from 'react';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const features = [
    "Direct partnerships with Chinese manufacturers",
    "Comprehensive quality control processes",
    "Competitive bulk pricing structures",
    "Full customs and documentation handling",
    "Reliable delivery timelines",
    "Dedicated account management"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About Intertrade Company
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Intertrade Company has been Thailand's trusted partner for premium 
              import and distribution services. We specialize in connecting high-quality Chinese 
              manufacturers with Thai distributors and retailers, facilitating seamless bulk trade operations.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Target className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">To bridge international trade gaps and empower Thai businesses with access to quality products at competitive prices.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <Eye className="text-yellow-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">To be Thailand's leading import/export company, known for reliability, quality, and exceptional service.</p>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional business team"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            
            {/* Certification badge */}
            <div className="absolute top-6 right-6 bg-white p-4 rounded-full shadow-xl">
              <Award className="text-yellow-500" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;