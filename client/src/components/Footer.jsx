import React from 'react';

function Footer() {
  return (
    <div className="bg-slate-400 h-[320px] flex flex-col gap-2 my-3">
      <h2 className="text-center text-slate-700 font-semibold text-2xl pt-40">
        @AnkitRaj
      </h2>
      <h3 className="font-semibold text-center">
        Made with ❣️❣️❣️ by <span className="text-slate-700-400">Ankit</span>
        <span className="text-slate-700">Raj</span>
      </h3>
      <div className='border rounded-lg'>
        <form action="">
          <label htmlFor="">Name:</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Email:</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Message:</label>
          <textarea name="message" id=""></textarea>
        </form>
      </div>
    </div>
  );
}

export default Footer
