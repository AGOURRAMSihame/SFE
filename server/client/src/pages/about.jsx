import React from 'react';
import { Link } from 'react-router-dom';

// Import de l'image depuis le dossier assets
import AboutImage from '../assets/img/about.png';

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Barre de navigation */}
      <div className="bg-white shadow-md p-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12">
              <img
                className="w-full h-full"
                src="https://th.bing.com/th/id/R.01eab780618cb688af2bfa044cf2af5a?rik=72bTO7biDcLEoA&pid=ImgRaw&r=0"
                alt="notfound"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                to="/about"
                className="text-blue-500 hover:text-blue-600 transition-all font-medium"
              >
                A Propos
              </Link>
              <Link
                to="/services"
                className="text-blue-500 hover:text-blue-600 transition-all font-medium"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-blue-500 hover:text-blue-600 transition-all font-medium"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex">
              <button className="bg-blue-900 text-white hover:bg-blue-700 transition-all font-medium px-3 py-2 rounded-md mr-2">Sign In</button>
              <button className="bg-blue-900 text-white hover:bg-blue-700 transition-all font-medium px-3 py-2 rounded-md mr-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteneur du contenu de la page "About" */}
      <div className="flex justify-center items-center h-full">
        <div className="container mx-auto py-5">
          {/* Contenu de la page "About" */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:order-2">
              {/* Utilisation de l'image importée */}
              <img src={AboutImage} alt="About" className="w-3/4 h-3/4 mx-auto mb-5 lg:mt-5 lg:mx-0 lg:mb-0 lg:h-75 lg:w-75" />
            </div>
            <div className="lg:w-1/2 lg:order-1 lg:ml-10">
              <h3 className="text-lg mb-1">About Us</h3>
              <h3 className="text-3xl mb-2 font-bold">Who <span className="font-bold text-blue-500">We</span> Are</h3>
              <hr className="w-20 mb-4 border-t-2 border-blue-500" />
              <p className="text-lg mb-4">
                Our "Mathematics, Computer Science, and Complex Systems Modeling" Laboratory provides a dynamic environment for 
                professors and researchers to push the boundaries of technology.
              </p>
              <div className="flex gap-2">
                <a href="/"><button className="px-4 py-2 bg-blue-500 text-white rounded-pill hover:bg-blue-600 transition duration-300">Get Started</button></a>
                <a href="/contact"><button className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-pill hover:bg-blue-500 hover:text-white transition duration-300">Contact Us</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
