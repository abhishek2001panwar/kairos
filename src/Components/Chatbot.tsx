
import React from 'react';

const Chatbot = () => {
  const services = [
    {
      title: "Online Therapy",
      description: "Personalized therapy sessions with licensed mental health professionals."
    },
    {
      title: "Crisis Intervention",
      description: "Immediate access to crisis intervention and support."
    },
    {
      title: "Telepsychiatry Services",
      description: "Secure, HIPAA-compliant video sessions with mental health professionals."
    },
    {
      title: "Support Communities",
      description: "Safe and moderated online communities for individuals to share experiences and seek support."
    }
  ];

  return (
    <div className='w-full ma'>
      <section className="py-56 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a range of services to meet your mental health needs.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden  rounded-lg relative shadow-xl">
                    <div className='absolute top-[7%] h-[5vh] w-3   bg-teal-500 rounded-r-md'></div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
