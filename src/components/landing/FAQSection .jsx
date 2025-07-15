import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1. How long does software development usually take?",
      answer: "The timeline for software development varies depending on the project's complexity, scope, and requirements. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "Q2. Do I need to have technical knowledge to work with you?",
      answer: "No, you don't need technical knowledge to work with us. Our team is skilled at translating technical concepts into business terms and vice versa. We guide you through the entire process and ensure clear communication at every step."
    },
    {
      question: "Q3. What information do I need to provide before working with you?",
      answer: "We typically need information about your business goals, target audience, functional requirements, design preferences, budget, and timeline. We'll also discuss any existing systems that need integration and your long-term vision for the project."
    },
    {
      question: "Q4. How do you guarantee the product quality?",
      answer: "We ensure quality through rigorous testing processes, code reviews, quality assurance protocols, and continuous monitoring. We follow industry best practices, conduct thorough testing at each development phase, and provide ongoing support and maintenance."
    },
    {
      question: "Q5. Do you provide product support services after the app development take place?",
      answer: "Yes, we provide comprehensive post-development support including bug fixes, updates, maintenance, security patches, and technical support. We offer various support packages to meet your ongoing needs and ensure your application continues to perform optimally."
    },
    {
      question: "Q6. What technologies do you use for your services?",
      answer: "We use a wide range of modern technologies including React, Node.js, Python, Java, .NET, mobile development frameworks, cloud platforms like AWS and Azure, and various databases. We choose the best technology stack based on your specific project requirements."
    },
    {
      question: "Q7. Will you sign an NDA (non-disclosure agreement)?",
      answer: "Absolutely. We understand the importance of confidentiality and are happy to sign NDAs to protect your intellectual property, business ideas, and sensitive information. We treat all client information with the highest level of confidentiality."
    },
    {
      question: "Q8. How long do I have to wait before the work of my project starts?",
      answer: "Project start times depend on our current workload and project complexity. Typically, we can begin within 1-2 weeks of contract signing and requirement finalization. We'll provide you with a specific start date during our initial discussions."
    },
    {
      question: "Q9. What is your working process for a project?",
      answer: "Our process includes: 1) Discovery and planning, 2) Design and prototyping, 3) Development in iterative sprints, 4) Testing and quality assurance, 5) Deployment and launch, 6) Post-launch support and maintenance. We maintain regular communication throughout each phase."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-2xl md:text-5xl font-audiwide mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#733193] to-[#47E3DF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          FAQ's
        </motion.h1>
        
        <div className="space-y-3 md:space-y-4 font-poppins">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, x: -200 }}  // Start from left (off-screen)
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6, 
                  delay: index * 0.1, // Stagger delay to make it come one after another
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}  // Animation will only trigger once when it's in view
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-gray-700 font-medium text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  className="px-4 md:px-6 pb-4 md:pb-5 pt-0"
                  initial={{ opacity: 0, x: -100 }}  // Start from left (off-screen)
                  animate={{ opacity: 1, x: 0 }}     // End at normal position
                  transition={{
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                >
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
