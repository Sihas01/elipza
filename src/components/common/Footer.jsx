import React from "react";
import { motion } from "framer-motion";
import map from "../../assets/images/OJO4YQ0.png";
import logo2 from "../../assets/images/logo2.png";
import flag from "../../assets/images/Sri-Lankan-01.svg";
import flag2 from "../../assets/images/Flag-of-Canada-01-1.svg";

const Footer = () => {
  return (
    <div className="relative">
      {/* Map section at the top */}
      {/* <div className="h-20 bg-gray-200 overflow-hidden">
        <img
          src="/api/placeholder/1200/80"
          alt="Map "
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Footer main content */}
      <motion.footer
        className="bg-gradient-to-r from-[#082950] to-[#733193] text-white relative font-audiwide"
        initial={{ opacity: 0, y: 50 }}  // Start from slightly below with 0 opacity
        animate={{ opacity: 1, y: 0 }}   // End at normal position with full opacity
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* World map background */}

        <div className="relative z-10 px-6 md:px-12 py-8 md:py-12 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
             
              {/* Left side - Logo and Navigation */}
              <div className="order-2 lg:order-1">
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-8">
                  <img src={logo2} alt="Logo" className="w-52" />
                </div>

                {/* Navigation */}
                <nav className="space-y-4 mb-8">
                  <a
                    href="#home"
                    className="block text-lg hover:text-purple-300 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="block text-lg hover:text-purple-300 transition-colors"
                  >
                    About us
                  </a>
                  <div className="relative">
                    <a
                      href="#services"
                      className="block text-lg hover:text-purple-300 transition-colors"
                    >
                      Services
                    </a>
                  </div>
                  <div className="bg-white text-purple-700 px-4 py-2 rounded inline-block">
                    <a href="#contact" className="font-medium">
                      Contact Us
                    </a>
                  </div>
                </nav>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  {/* Twitter */}
                  <a
                    href="#"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </a>

                  {/* Snapchat */}
                  
                </div>
              </div>

              {/* Right side - World map image */}
              
            </div>

            <div className="mt-7 flex gap-2">
              <img src={flag} alt="Sri Lankan flag" className="w-12" />
              <img src={flag2} alt="Canadian flag" className="w-12" />
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
