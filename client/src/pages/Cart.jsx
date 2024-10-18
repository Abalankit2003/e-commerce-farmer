import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <div>
      <Header />
      {cartItems && (
        cartItems.map(item => <p key={item}>{item}</p>)
      )}
      <Footer />
    </div>
  )
}

export default Cart
