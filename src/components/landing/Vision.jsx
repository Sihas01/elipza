import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import vison from "../../assets/images/vison-image.png";

const Vision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl md:text-5xl font-audiwide mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#733193] to-[#47E3DF]"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures the animation happens only once
          >
            We're Not Just Another Software Solutions Company
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.img
              src={vison}
              alt="vision image"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }} // Ensures the animation happens only once
            />
          </div>

          <div className="space-y-12 px-4 md:px-0">
            <div>
              <motion.h3
                className="text-3xl md:text-5xl font-alta font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#733193] to-[#47E3DF] mb-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Vision
              </motion.h3>
              <motion.p
                className="text-2xl md:text-3xl font-alta text-[#733193] leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                "To revolutionize the digital landscape by delivering innovative, reliable, and user-centric technology solutions that empower businesses and individuals worldwide."
              </motion.p>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <motion.h3
            className="text-3xl md:text-5xl font-alta font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#733193] to-[#47E3DF] mb-1 py-6 md:py-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Mission
          </motion.h3>
          <motion.p
            className="text-2xl md:text-3xl font-alta text-[#733193] leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "At Ellipza Technologies, our mission is to transform ideas into impactful solutions by combining cutting-edge technology with exceptional design and development expertise. We strive to exceed expectations, foster innovation, and provide tailored software, mobile, and web solutions that drive growth and efficiency for our clients."
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
