// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: ['Phones', 'Earbuds', 'Watches', 'Smart Home', 'Accessories']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Warranty', 'Order Status', 'Repairs']
    },
    {
      title: 'About',
      links: ['Google Store', 'News', 'Sustainability', 'Careers']
    }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-google-blue text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Stay connected
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.298-3.323 1.298z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <img
                className="h-6 w-auto"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
              />
              <span className="ml-2 text-gray-600 text-sm">Store</span>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-600 hover:text-google-blue text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-google-blue text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-google-blue text-sm">
                Sales Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-google-blue text-sm">
                Legal
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-500 text-sm">
            © 2024 Google LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;