import React from 'react';

import { motion, useInView } from 'framer-motion';

const FadeUp = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const ServicesSection = () => {


  return (
    <div className="min-h-screen bg-white md:py-40 py-15 px-4 flex flex-col items-center font-[Poppins]">
      <FadeUp>
      <h1 className="text-2xl md:text-5xl font-audiwide text-[#733193] text-center">
        What We services?
      </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
      <p className="text-center font-poppins md:text-2xl text-xl text-[#8942C1E0] mt-5 mb-6 max-w-4xl">
        If you want to create a new website for your business, do not hesitate to contact us today. We have created you to provide all types of services on the website.
      </p>
      </FadeUp>

      <FadeUp delay={0.2}>
      <button className="bg-[#D8E6FF] font-poppins text-[#5B6EFF] px-6 py-2 rounded-full  mb-10">
        Get Started
      </button>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl w-full items-stretch py-10 font-audiwide">
        {/* Software Development */}
        
        <div className="bg-[#E5DDF9] pt-20 pb-6 px-6 rounded-xl shadow-md relative flex flex-col justify-start h-full row-span-2">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
           <div className="bg-white w-[100px] h-[100px] rounded-full border-4 border-white shadow-md flex items-center justify-center text-4xl">
              💾
            </div>
          </div>
          <h3 className="text-2xl  text-[#733193] mb-2 text-center mt-2">Software Development</h3>
          <p className="text-lg text-[#733193] text-center font-poppins">
            We deliver robust, scalable, and secure software solutions designed to meet the specific needs of businesses across industries. From enterprise applications to custom-built software, we ensure high performance and seamless integration with your workflows.
          </p>
        </div>

        {/* Mobile App Development */}
        <div className="bg-[#D8F6F7] pt-20 pb-6 px-6 rounded-xl shadow-md relative flex flex-col justify-start h-full">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-white w-[100px] h-[100px] rounded-full border-4 border-white shadow-md flex items-center justify-center text-4xl">
              📱
            </div>
          </div>
          <h3 className="text-2xl  text-[#733193] mb-2 text-center mt-2">Mobile App Development</h3>
          <p className="text-lg text-[#733193] text-center font-poppins">
            Our team creates intuitive and feature-rich mobile applications for iOS and Android platforms. Whether it’s a customer-facing app or an internal enterprise tool, we combine functionality with design to ensure an engaging user experience.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-[#E5DDF9] pt-20 pb-6 px-6 rounded-xl shadow-md relative flex flex-col justify-start h-full">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-white w-[100px] h-[100px] rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl">
              🎨
            </div>
          </div>
          <h3 className="text-2xl  text-[#733193] mb-2 text-center mt-2">UI/UX Design</h3>
          <p className="text-lg text-[#733193] text-center font-poppins">
            <em>At Ellipza Technologies, we believe design is at the core of any successful digital product.</em> Our UI/UX design team ensures every interface is visually appealing, user-friendly, and aligned with your brand identity to maximize engagement and satisfaction.
          </p>
        </div>

        {/* Web Development */}
        <div className="bg-[#D8D1F9] pt-20 pb-6 px-6 rounded-xl shadow-md relative flex flex-col justify-start h-full">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-white w-[100px] h-[100px] rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl">
              💻
            </div>
          </div>
          <h3 className="text-2xl  text-[#733193] mb-2 text-center mt-2">Web Development</h3>
          <p className="text-lg text-[#733193] text-center font-poppins">
            We design and develop responsive, fast-loading, and SEO-friendly websites that are tailored to meet your business goals. Our web development services range from creating static websites to dynamic web applications and e-commerce platforms.
          </p>
        </div>

        {/* Artificial Intelligence Solutions */}
        <div className="bg-[#CBD7F3] pt-20 pb-6 px-6 rounded-xl shadow-md relative flex flex-col justify-start h-full">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-white w-[100px] h-[100px] rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl">
              🤖
            </div>
          </div>
          <h3 className="text-2xl  text-[#733193] mb-2 text-center mt-2">Artificial Intelligence Solutions</h3>
          <p className="text-lg text-[#733193] text-center font-poppins">
            We leverage the power of AI to develop smart solutions that enhance decision-making, optimize workflows, and provide predictive insights. Whether it’s machine learning models, natural language processing, or AI-driven systems, our solutions are tailored to your business challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;