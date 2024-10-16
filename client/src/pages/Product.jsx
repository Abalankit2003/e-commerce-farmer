import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
    <div>
      {value && (
        
        <img src={value.product} alt="" />
      )}
    </div>
  )
}

export default Product
