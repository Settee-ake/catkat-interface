import React from 'react';
import { ArrowRight, Ship, Globe, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Premium <span className="text-yellow-400">Import & Export</span> Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connecting China to Thailand through reliable bulk trading partnerships. 
              Your trusted gateway for wholesale distribution excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Request Quote</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all">
                View Products
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Ship size={32} className="text-yellow-400 mb-2" />
                <span className="text-blue-100 font-medium">Reliable Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe size={32} className="text-yellow-400 mb-2" />
                <span className="text-blue-100 font-medium">Global Network</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp size={32} className="text-yellow-400 mb-2" />
                <span className="text-blue-100 font-medium">Bulk Pricing</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="International shipping and logistics"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-xl">
              <div className="text-sm text-gray-600">Containers Shipped</div>
              <div className="text-2xl font-bold text-blue-600">2,500+</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-800 px-4 py-3 rounded-lg shadow-xl">
              <div className="text-sm text-gray-700">Happy Clients</div>
              <div className="text-2xl font-bold">150+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;