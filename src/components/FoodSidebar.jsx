import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./FoodAddDel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`w-[500px] h-full p-5 bg-[#393C49] mb-3 
 
         transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-[#FFFFFF] mb-3">Orders #34562</span>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-white">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-[#ABBBC2]">Discount : {totalQty}</h3>
          <h3 className="font-semibold text-[#ABBBC2] mb-2">
            Sub total : {totalPrice}
          </h3>

          <button
            onClick={() => navigate("/success")}
            className="bg-[#EA7C69] font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 ml-[30px]"
          >
            Continue to Payment
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;
