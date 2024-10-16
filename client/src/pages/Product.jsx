import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PiCurrencyInrBold } from "react-icons/pi";
import Slider from '../components/Slider';
import Header from '../components/Header';

function Product() {

    const [value, setValue] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const data = await fetch(`/api/shopping/${id}`);
            const res = await data.json();
            setValue(res);
        })();
    }, []);

    console.log(value);
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
          <button className="border bg-green-700 p-3 rounded-lg w-1/5 text-white">
            Add to Cart
          </button>
          <button className="border bg-green-700 p-3 rounded-lg w-1/5 text-white">
            Buy now
          </button>
        </span>
      </div>)}
    </div>
  );
}

export default Product
