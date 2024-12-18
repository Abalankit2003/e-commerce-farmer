import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PiCurrencyInrBold } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from '../components/Slider';
import Header from '../components/Header';
import { getCartItems } from '../redux/user/userSlice';

function Product() {

    const [value, setValue] = useState(null);
    const {id} = useParams();

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.user);

    useEffect(() => {
        (async () => {
            const data = await fetch(`/api/shopping/product/${id}`);
            const res = await data.json();
            setValue(res);
        })();
    }, []);

    const handleCart = async(e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/shopping/addToCart", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                item: id,
              }),
            });

            const data = await res.json();
            console.log(data);
            // toast("Item added to cart");
            dispatch(getCartItems(cartItems + 1));
        } catch (error) {
            console.log(error.message);
        }
    }

    // console.log(value);
  return (
    <div className='bg-slate-300 h-screen'>
      <Header />
      {value && (
      <div className="flex flex-col items-center p-3">
        <Slider images={value.productImages} />
        <p className='font-semibold text-3xl'>{value.productName}</p>
        <span className="flex gap-[3px] items-center">
          <PiCurrencyInrBold className='text-3xl'/>
          <span className='text-green-700 text-3xl'>{value.productPrice}</span>
        </span>
        <span className="flex items-center justify-evenly w-2/4">
          <button className="border bg-green-700 p-3 rounded-lg w-1/5 text-white" onClick={handleCart}>
            Add to Cart
          </button>
          <ToastContainer />
          <button className="border bg-green-700 p-3 rounded-lg w-1/5 text-white">
            Buy now
          </button>
        </span>
      </div>)}
    </div>
  );
}

export default Product
