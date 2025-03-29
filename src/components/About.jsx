import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Company Overview</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="About Instrek" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Instrek Technologies is shaping the future with AI, IoT, AIoT, Blockchain and next-gen digital solutions. 
              We empower businesses, governments, and institutions with cutting-edge automation, smart city innovations, 
              and advanced IT services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our expertise spans Conversational AI, Agentic AI, Digital Transformation and technology driven solutions 
              to solve a nation wide problem. With a mission to make India AI-ready, we drive strategic consulting, 
              workforce hiring & training, and scalable tech solutions.
            </p>
            <p className="text-lg text-gray-700">
              Partner with us to navigate the future of intelligent automation and digital excellence! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;