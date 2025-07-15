import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, clipPath: 'circle(0% at 50% 50%)' },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'circle(150% at 50% 50%)',
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-3 items-center">
          <motion.div
            className="space-y-8 font-custom px-8 sm:px-6 lg:px-10"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            <h2 className="text-5xl md:text-8xl py-6 md:py-0 font-bold text-[#733193] leading-tight">
              ELLIPZA <span className="text-[#733193] text-2xl md:text-4xl">TECHNOLOGIES</span>
            </h2>
            <p className="text-[#733193] text-2xl max-w-lg font-alta">
              We partner with enterprises, startups, and governments worldwide to develop cutting-edge technology products and Artificial Intelligence solutions that help them achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-400 text-[#733193] px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition">
                Our Technologies
              </button>
              <button className="border border-purple-300 text-[#733193] px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                Contact Us →
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 relative"
            initial="hidden"
            animate="visible"
            variants={imageVariant}
          >
            <img src={heroImage} alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
