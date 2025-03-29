import React from 'react';

const strengths = [
  {
    title: "Artificial Intelligence",
    description: "Advanced AI solutions including machine learning, deep learning and neural networks.",
    icon: "🤖"
  },
  {
    title: "Internet of Things",
    description: "End-to-end IoT solutions connecting devices and enabling smart ecosystems.",
    icon: "🌐"
  },
  {
    title: "Blockchain",
    description: "Secure, decentralized solutions for various industries including finance and supply chain.",
    icon: "⛓️"
  },
  {
    title: "Cloud Computing",
    description: "Scalable cloud solutions for businesses of all sizes with maximum uptime.",
    icon: "☁️"
  },
  {
    title: "Digital Transformation",
    description: "Comprehensive strategies to modernize your business operations and customer experience.",
    icon: "🔄"
  },
  {
    title: "Smart Cities",
    description: "Innovative solutions for urban challenges leveraging technology for better living.",
    icon: "🏙️"
  }
];

const Strengths = () => {
  return (
    <section id="strengths" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Strengths in Next-Gen Technologies</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{strength.title}</h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;