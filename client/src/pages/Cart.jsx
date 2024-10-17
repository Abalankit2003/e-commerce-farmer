import React, { useEffect, useState } from 'react'

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
      {cartItems && (
        cartItems.map(item => <p key={item}>{item}</p>)
      )}
    </div>
  )
}

export default Cart
