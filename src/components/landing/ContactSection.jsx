import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import image from '../../assets/images/contactUs.png'
import logo from '../../assets/images/epliza.png'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 font-poppins">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
       

        <div className="flex flex-col lg:flex-row">

          <div className="lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-teal-400 mb-4 font-audiwide">Get in touch</h2>
            <p className="text-gray-600 mb-8 font-poppins">We are here for you! How can we help?</p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-teal-400 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-500 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Submit
              </button>

              <div className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start">
                            <img src={logo} alt="" className='w-52'/>
                          </div>
            </div>
          </div>

          
          <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
           
            <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-5 w-12 h-12 bg-yellow-200 rounded-full opacity-20"></div>
            
         
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
          
              <div className="relative mb-8">
               <img src={image} alt="" />
              </div>

              
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">+94 (717) 083-004</span>
                </div>
                
                 <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Ellipza@gmail.com</span>
                </div>
             
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Info@ellipza.com</span>
                </div>
              </div>
            </div>

        
            <div className="absolute bottom-8 right-8">
              <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-white text-xs font-bold">↑</div>
              </div>
            </div>
          </div>
        </div>

    
      
      </div>
    </div>
  );
}