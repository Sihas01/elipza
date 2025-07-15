import React from 'react';
import { motion } from 'framer-motion';
import about from '../../assets/images/about.png'
import logo from '../../assets/images/epliza.png'

const AboutUsSection = () => {
  // Animation variants for fade-in and slide-up
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 max-w-7xl w-full relative overflow-hidden">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl text-[#733193] font-audiwide mb-6 lg:mb-8 text-center lg:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-lg transform rotate-12"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-white rounded-lg transform -rotate-12"></div>
          <div className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          {/* Left side - Image */}
          <motion.div
            className="flex-1 mb-8 lg:mb-0 lg:pr-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={about}
                alt="Isometric illustration of a modern city with buildings, people, and technology elements representing our team and solutions"
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="flex-1 lg:pl-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4 lg:space-y-6 text-[#733193] font-poppins">
              <p className="text-base lg:text-lg leading-relaxed">
                From the ground up we were able to deliver you the best quality software solutions. Because we were able to gather a team of experts in the industry from the start.
              </p>

              <p className="text-base lg:text-lg leading-relaxed">
                Our team worked with prime businesses and companies to build their platforms and form quality answers to their problems. Nova Solutions managed to build a satisfied client base not just local but around the globe.
              </p>

              <p className="text-base lg:text-lg leading-relaxed">
                At Ellipza Technologies, our strength lies in the diversity and expertise of our team. We bring together a group of dedicated professionals with a shared passion for innovation and a commitment to delivering exceptional results.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Logo */}
        <motion.div
          className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={logo} alt="Ellipza Logo" className="w-52" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;
