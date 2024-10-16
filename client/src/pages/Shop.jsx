import React, { useEffect, useState } from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6';
import Header from '../components/Header';
import Card from '../components/Card';
import Slider from '../components/Slider';

function Shop() {

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
  }

  return (
    <div className="flex flex-col gap-1 bg-gray-200">
      <Header title="Shopping" />
      <Slider props={allProducts.slice(0, 5)} />
      <div className="p-3 flex flex-row flex-wrap gap-5">
        {allProducts &&
          allProducts.map((product) => (
            <Card
              key={product.productName}
              props={{
                name: product.productName,
                imageUrl: product.productImages[0],
                price: product.productPrice,
                id: product._id,
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop
