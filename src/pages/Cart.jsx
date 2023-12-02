import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector( (state) => state)

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( ()=>{
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) );
  }, [cart])



  return (
    <div>
      {
        cart.length > 0 ? 
        (<div className="px-5 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 md:max-w-6xl lg:mx-auto">

          <div>
            {
              cart.map( (item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

          <div className="flex flex-col justify-between p-10">
            <div className="mt-10">
              <div className="uppercase text-xl font-semibold text-green-700">Your Cart</div>
              <div className="uppercase text-5xl font-semibold text-green-700">Summary</div>
              <p className="mt-5">
                <span className="text-xl font-semibold">Toatl Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="text-xl text-gray-600 font-semibold">Total Amount: ${totalAmount}</p>
              <button className="flex justify-center items-center w-full bg-green-700 border-2 border-green-600 py-3 rounded-lg text-white text-xl font-bold mb-10 mt-5 hover:bg-white hover:text-green-700 transition duration-300 ease-in">
                Checkout Now
              </button>
            </div>
          </div>

        </div>) :
        (<div className="w-full h-screen flex flex-col justify-center items-center gap-7">
            <h1 className="text-xl font-semibold">Your cart is empty !</h1>
            <Link to={"/"}>
              <button className="py-3 px-10 bg-green-600 rounded-lg text-white font-semibold uppercase hover:text-green-600 hover:bg-white border-green-600 border-2 transition duration-300 ease-in scale-100 hover:scale-75">
                Shop Now
              </button>
            </Link>
        </div>) 
      }
    </div>
  );
};

export default Cart;
