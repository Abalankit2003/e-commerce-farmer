import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

function Slider({images}) {

    const [index, setIndex] = useState(0);

    const arraySize = images.length;

    const handleLeftArrow = () => {
        setIndex(() => {
             return (index - 1 + arraySize) % arraySize;
        });
    }

    const handleRightArrow = () => {
      setIndex(() => ((index + 1 + arraySize) % arraySize));
    };
    // if(arraySize) console.log(images[index].productImages[0]);
    // else console.log("It's slider");
    // console.log(images);

  return (
    arraySize && (
      <div className="relative flex items-center justify-center box-border">
        <img
          src={images[index]}
          alt={images[index]}
          className="flex-1 w-[720px] h-[380px] object-cover"
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
    )
  );
}

export default Slider;
