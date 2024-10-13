import React, { useState } from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6';
import Header from '../components/Header';
import { items, products } from '../constants/shopping';
import Card from '../components/Card';

function Shop() {

  const [currItem, setCurrItem] = useState(0);

  const handleleftArrow = () => {
    let total = items.length;
    setCurrItem(() =>(currItem - 1 + total) % total);
  }

  const handleRightArrow = () => {
    let total = items.length;
    setCurrItem(() => (currItem + 1 + total) % total);
  }

  return (
    <div className="flex flex-col gap-1 bg-gray-200">
      <Header title="Shopping" />
      <div className="relative flex items-center justify-center box-border h-[320px]">
        <img
          src={items[currItem].imageUrl}
          alt={items[currItem].name}
          className="flex-1 h-full object-cover"
        />

        <FaArrowLeft
          className="absolute left-4 text-white text-3xl cursor-pointer"
          onClick={handleleftArrow}
        />
        <FaArrowRight
          className="absolute right-4 text-white text-3xl cursor-pointer"
          onClick={handleRightArrow}
        />
      </div>
      <div className='p-3 flex flex-row flex-wrap gap-5'>
        {products && 
          products.map(product => (
            <Card props = {product}/>
          ))
        }
      </div>
    </div>
  );
}

export default Shop
