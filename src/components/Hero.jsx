import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Shaping the Future with Next-Gen Technologies</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge AI, IoT, Blockchain and digital transformation solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
            Explore Solutions
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;