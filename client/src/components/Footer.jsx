import React from 'react';

function Footer() {

  const inputDecoration =
    "border rounded-lg p-1 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700";

  return (
    <div className="bg-slate-400 h-auto w-auto flex flex-col gap-2 my-3 p-3">
      <form action="" className="flex flex-col h-5/6 gap-1 w-3/12">
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" className={inputDecoration} />
        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" className={inputDecoration} />
        <label htmlFor="">Message:</label>
        <textarea name="message" id="" className="rounded-lg"></textarea>
        <button
          type="submit"
          className="bg-blue-100"
          className="border rounded-lg bg-green-700 p-2 text-white max-w-28 uppercase"
        >
          Send
        </button>
      </form>
      <h2 className="text-center text-slate-700 font-semibold text-2xl">
        @AnkitRaj
      </h2>
      <h3 className="font-semibold text-center">
        Made with ❣️❣️❣️ by <span className="text-slate-700-400">Ankit</span>
        <span className="text-slate-700">Raj</span>
      </h3>
    </div>
  );
}

export default Footer
