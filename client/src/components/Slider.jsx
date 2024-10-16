import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

function Slider({props}) {

    const [index, setIndex] = useState(0);

    const arraySize = props.length;

    const handleLeftArrow = () => {
        setIndex(() => {
             return (index - 1 + arraySize) % arraySize;
        });
    }

    const handleRightArrow = () => {
      setIndex(() => ((index + 1 + arraySize) % arraySize));
    };

    console.log(props[index].productImages[0]);

  return (
    <div className="relative flex items-center justify-center box-border h-[320px]">
      <img
        src={props[index].productImages[0]}
        alt="Not Found"
        className="flex-1 h-full object-cover"
      />
      <FaArrowLeft
        onClick={handleLeftArrow}
        className="absolute left-4 text-slate-700 text-3xl cursor-pointer"
      />
      <FaArrowRight
        onClick={handleRightArrow}
        className="absolute right-4 text-slate-700 text-3xl cursor-pointer"
      />
    </div>
  );
}

export default Slider;
