import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();


  const removeFromCart = () =>{
    dispatch(remove(item.id))
    toast.error("Item removed from cart")
  }
  return (
    <div>
      <div className="flex flex-col p-2 justify-center items-center mt-5 md:flex-col lg:flex-row lg:space-x-5 border-b-2 lg:p-5 pb-7 border-slate-500 ">

        <div className="h-[230px] w-[350px]">
          <img className="h-full w-full object-contain" src={item.image}/>
        </div>

        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1" >{item.title}</h1>
          <h1 className="text-gray-700 font-normal text-[16px] text-left mt-5">{item.description.split(" ").slice(0,14).join(" ")+"..."}</h1>
          <div className="flex mt-5 justify-between">
            <p className="text-green-600 text-lg font-bold items-center">${item.price}</p>
            <div onClick={removeFromCart} className=" flex justify-center items-center w-9 h-9 bg-red-100 rounded-full hover:bg-red-500 text-red-700 hover:text-white transition duration-300 ease-in">
            <MdDelete  />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CartItem;
