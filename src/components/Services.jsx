import React from 'react';

const services = [
  {
    title: "AI Solutions",
    items: [
      "Conversational AI",
      "Computer Vision",
      "Predictive Analytics",
      "Natural Language Processing"
    ]
  },
  {
    title: "IoT & AIoT",
    items: [
      "Smart Devices",
      "Sensor Networks",
      "Edge Computing",
      "Industrial IoT"
    ]
  },
  {
    title: "Blockchain",
    items: [
      "Smart Contracts",
      "Decentralized Apps",
      "Supply Chain Solutions",
      "Digital Identity"
    ]
  },
  {
    title: "Digital Transformation",
    items: [
      "Process Automation",
      "Cloud Migration",
      "Legacy Modernization",
      "CX Transformation"
    ]
  },
  {
    title: "Consulting",
    items: [
      "AI Strategy",
      "Tech Roadmapping",
      "Workforce Training",
      "Implementation Support"
    ]
  },
  {
    title: "Smart Cities",
    items: [
      "Urban Mobility",
      "Energy Management",
      "Public Safety",
      "Waste Management"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Services & Solutions</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Our comprehensive suite of services designed to propel your business into the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-indigo-500 transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;