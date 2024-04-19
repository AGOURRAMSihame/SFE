import React from "react";
import { Link } from "react-router-dom";
import second from 'react-icons/'

const Index = () => {
  const [show,setShow]=useState(false)
 return (
    <div className="bg-white text-black min-h-screen">
      <div className={`w-screen ${show? 'visible opacity-30 ': 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center `}>
        <div className="w-[350px] m-auto px-6 py-4 roinded-md relative" >
          <div  className="w-[350px] m-auto px-6 py-4 roinded-md relative" >
            <div><IoMdClose/> </div>

          </div>
        </div>

      </div>
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
              <Link
                to="/signin"
                className="bg-blue-500 text-white hover:bg-blue-600 transition-all font-medium px-3 py-2 rounded-md mr-2"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white hover:bg-blue-600 transition-all font-medium px-3 py-2 rounded-md mr-2"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[168px] flex justify-center items-center flex-col gap-6">
        <h2 className="text-5xl text-[#333333] font-bold">What Is Your Formulaire For Today?</h2>
        </div>
        <div className="flex justify-center">
        <Link to="/signup" className="py-4 px-8 text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">Register 
        </Link>
        </div>
      </div>
    </div>
 );
};

export default Index;
