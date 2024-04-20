// FAQ.js

import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Online Therapy?",
      answer: "Online therapy, also known as e-therapy, e-counseling, or teletherapy, is a way to receive therapy sessions via the internet. It involves meeting with a licensed mental health professional virtually."
    },
    {
      question: "What is Crisis Intervention?",
      answer: "Crisis intervention is the emergency psychological care aimed at assisting individuals in a crisis situation to restore equilibrium to their biopsychosocial functioning and to minimize the potential for psychological trauma."
    },
    {
      question: "What are Telepsychiatry Services?",
      answer: "Telepsychiatry services provide secure, HIPAA-compliant video sessions with mental health professionals. It allows individuals to access psychiatric services remotely from the comfort of their own home."
    },
    {
      question: "What are Support Communities?",
      answer: "Support communities are safe and moderated online platforms where individuals can share experiences and seek support from others who may be experiencing similar mental health challenges."
    }
  ];

  return (
    <section className="py-12 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10">
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 border-2 border-gray rounded-md mb-5 relative shadow-xl">
                <div className='absolute top-[0%] h-2 w-[36vh] md:w-[90vh] backdrop-blur-xl bg-teal-400 rounded-b-2xl'></div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
