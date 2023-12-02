import React from "react";
import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import '../index.css'
import { useSelector } from "react-redux";


const Navbar = () => {

  const {cart} = useSelector( (state) => state)
  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
          <NavLink to="/">
            <div className="ml-5 ">
            <img  className=" w-[40px]" src="../navLogo.jpg"/>
            </div>
          </NavLink>

          <div className="flex items-center font-medium text-xm text-slate-100 mr-5 space-x-6 ">
            
            <NavLink to="/">
              <p className="hover:text-green-500 transition duration-300 ease-in">Home</p>
            </NavLink>

            <NavLink to="/cart">
               <div className="relative"> 
                  <IoCart className="text-2xl hover:text-green-500 transition duration-300 ease-in"/>
                  {
                    cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full animate-bounce ">{cart.length}</span> 
                  }
               </div>
            </NavLink>

          </div>
      </nav>
    </div>
  );
};

export default Navbar;
