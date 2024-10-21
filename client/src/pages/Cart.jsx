import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PiCurrencyInrDuotone } from "react-icons/pi";

function Cart() {

  const [cartItems, setCartItems] = useState(null);


  useEffect(() => {
    (async () => {
      const res = await fetch("/api/shopping/getCartItems");

      const data = await res.json();
      setCartItems(data);
    })();
  }, []);


  return (
    <div className="bg-slate-300">
      <Header />
      <div className="flex flex-col p-3 items-center">
        {cartItems &&
          cartItems.map((item) => (
            <div className="flex justify-start gap-3 w-2/12 my-1 border-2 p-2 bg-white rounded-lg">
              <img
                src={item.productImages[0]}
                alt={item.productName}
                className="h-[50px] w-[50px] rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">
                  {item.productName}
                </span>
                <span className="font-semibold text-2xl text-green-400 flex items-center">
                  <PiCurrencyInrDuotone className='text-[20px]' />
                  {item.productPrice}
                </span>
                
              </div>
            </div>
          ))}
      <button type='submit' className='rounded-lg bg-green-700 p-3 w-1/12 uppercase text-white text-lg mt-5'>checkout</button>
      </div>
      <Footer />
    </div>
  );
}

export default Cart
