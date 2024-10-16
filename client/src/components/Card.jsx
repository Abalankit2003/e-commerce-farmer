import React from 'react';
import { Link } from 'react-router-dom';

function Card({props}) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="border w-[280px] h-[300px] rounded-lg shadow-md hover:shadow-lg hover:bg-slate-200 bg-white flex flex-col">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="h-3/5 object-cover overflow-hidden rounded-lg"
        />
        <div className="p-5">
          <p className="text-center">{props.name}</p>
          <p className="text-center font-semibold">${props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card
