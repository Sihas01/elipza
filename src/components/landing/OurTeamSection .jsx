import React from 'react';
import { motion } from 'framer-motion';
import team from '../../assets/images/team.png';

const OurTeamSection = () => {
  // Animation variants for fade-in and slide-up
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#e0f7ff] via-[#e7e6ff] to-[#f1e6ff] min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-audiwide text-[#733193] mb-6">Our Team</h2>
          <p className="max-w-6xl mx-auto leading-relaxed font-poppins md:text-2xl text-xl text-[#2F327D]">
            At Ellipze Technologies, our strength lies in the diversity and expertise of our team. We
            bring together a group of dedicated professionals with a shared passion for innovation and
            a commitment to delivering exceptional results.
          </p>
        </motion.div>

        {/* Team Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Software Engineers */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-purple-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#733193] font-audiwide mb-4">Software Engineers</h3>
            <p className="text-lg text-[#733193] font-poppins leading-relaxed">
              Our software engineers are the backbone of our solutions, specializing in developing
              robust, scalable, and secure applications that meet the unique needs of our clients. They
              are dedicated to pushing boundaries and creativity to transform ideas into functional software.
            </p>
          </motion.div>

          {/* Data Scientists */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-purple-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#733193] font-audiwide mb-4">Data Scientists</h3>
            <p className="text-lg text-[#733193] font-poppins leading-relaxed">
              Our data scientists harness the power of data to unlock valuable insights. Using advanced analytics, AI,
              and machine learning, they help businesses make smarter decisions, optimize processes, and stay ahead in a data-driven world.
            </p>
          </motion.div>

          {/* Web Developers */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-purple-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#733193] font-audiwide mb-4">Web Developers</h3>
            <p className="text-lg text-[#733193] font-poppins leading-relaxed">
              Our web developers specialize in creating dynamic, responsive, and SEO-friendly websites that drive engagement
              and achieve business goals. From e-commerce platforms to corporate websites, they craft solutions that stand out.
            </p>
          </motion.div>
        </div>

        {/* Central Illustration */}
        <motion.div
          className="flex justify-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            <img src={team} alt="Team illustration" />
          </div>
        </motion.div>

        {/* Team Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mobile App Developers */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-purple-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#733193] font-audiwide mb-4">Mobile App Developers</h3>
            <p className="text-lg text-[#733193] font-poppins leading-relaxed">
              Our mobile app developers design and build intuitive, high-performance apps for iOS and Android platforms.
              They ensure seamless functionality and exceptional user experiences for every application.
            </p>
          </motion.div>

          {/* UI/UX Designers */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-purple-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#733193] font-audiwide mb-4">UI/UX Designers</h3>
            <p className="text-lg text-[#733193] font-poppins leading-relaxed">
              Our UI/UX designers focus on delivering visually stunning and user-friendly designs. They ensure every product we
              build offers an intuitive and enjoyable experience for its users.
            </p>
          </motion.div>

          {/* Artificial Intelligence Experts */}
          <motion.div
            className="bg-white rounded-lg p-6 border-2 border-purple-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#733193] font-audiwide mb-4">Artificial Intelligence Experts</h3>
            <p className="text-lg text-[#733193] font-poppins leading-relaxed">
              Our AI specialists develop intelligent solutions that automate tasks, enhance efficiency, and provide predictive
              insights, driving innovation in every project.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
