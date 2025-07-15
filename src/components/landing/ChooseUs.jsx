import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ChooseUs = () => {
  return (
    <section className="md:py-20 py-5 bg-white px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-5xl text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#733193] to-[#47E3DF] font-audiwide">
          Why Choose Ellipza Technologies?
        </h1>

        {/* Four Cards Grid */}
        <div className="grid md:grid-cols-2 gap-20 mb-24">
          {/* Card 1 */}
          <motion.div
            className="relative bg-[#EFE0F6] p-6 rounded-xl text-center text-purple-800 font-medium max-w-md shadow-xl before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:w-60 before:h-16 before:bg-gradient-to-r before:from-blue-300 before:via-purple-300 before:to-pink-300 before:rounded-full before:blur-2xl before:opacity-70"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures the animation happens only once
          >
            <div className="text-[#733193] font-poppins text-xl leading-relaxed">
              <span>Client-Centrist Approach:</span> We prioritize your needs, ensuring solutions that align with your goals.
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative bg-[#EFE0F6] p-6 rounded-xl text-center text-purple-800 font-medium max-w-md shadow-xl before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:w-60 before:h-16 before:bg-gradient-to-r before:from-blue-300 before:via-purple-300 before:to-pink-300 before:rounded-full before:blur-2xl before:opacity-70"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-[#733193] font-poppins text-xl leading-relaxed">
              <span>Innovation & Expertise:</span> Our team stays updated with the latest technologies and trends to provide cutting-edge solutions.
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative bg-[#EFE0F6] p-6 rounded-xl text-center text-purple-800 font-medium max-w-md shadow-xl before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:w-60 before:h-16 before:bg-gradient-to-r before:from-blue-300 before:via-purple-300 before:to-pink-300 before:rounded-full before:blur-2xl before:opacity-70"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-[#733193] font-poppins text-xl leading-relaxed">
              <span>End-to-End Solutions:</span> From ideation to deployment and beyond, we support you at every stage of your digital transformation.
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="relative bg-[#EFE0F6] p-6 rounded-xl text-center text-purple-800 font-medium max-w-md shadow-xl before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:w-60 before:h-16 before:bg-gradient-to-r before:from-blue-300 before:via-purple-300 before:to-pink-300 before:rounded-full before:blur-2xl before:opacity-70"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-[#733193] font-poppins text-xl leading-relaxed">
              <span>Commitment to Quality:</span> We adhere to industry best practices, ensuring every project we deliver is flawless and reliable.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
