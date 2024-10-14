import React, { useEffect, useState } from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6';
import Header from '../components/Header';
import Card from '../components/Card';

function Shop() {

  const [currItem, setCurrItem] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Immediately Invoked Async Function(IIFE) => declares and immediately invokes the async function.
    // (async () => {})() => Syntax of IIFE

    (async () => {
      const res = await fetch("/api/shopping/products");

      const data = await res.json();
      setAllProducts(data);
    })();
  }, []);

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
      {allProducts.length > 0 && (
        <div className="relative flex items-center justify-center box-border h-[320px]">
          <img
            src={allProducts[currItem].productImages[0]}
            alt={allProducts[currItem].productName}
            className="flex-1 h-full object-cover"
          />

          <FaArrowLeft
            className="absolute left-4 text-slate-700 text-3xl cursor-pointer"
            onClick={handleleftArrow}
          />
          <FaArrowRight
            className="absolute right-4 text-slate-700 text-3xl cursor-pointer"
            onClick={handleRightArrow}
          />
        </div>
      )}
      <div className="p-3 flex flex-row flex-wrap gap-5">
        {allProducts &&
          allProducts.map((product) => (
            <Card
              props={{
                name: product.productName,
                imageUrl: product.productImages[0],
                price: product.productPrice,
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop
