import React from 'react';

function Agreement() {

    const inputDecoration = "border rounded-lg p-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700";
    const labelDecoration = "text-slate-800 font-semibold";
    const headingDecoration = "text-slate-900 text-2xl";
    const sectionDecoration = "flex flex-col gap-2 border-2 border-slate-500 rounded-lg p-3";

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-slate-300 p-6">
      <h2 className="text-3xl font-semibold text-center">Agreement Form</h2>
      <form className="flex flex-col gap-5 w-2/6 p-3 border-2 border-slate-800 border-dotted">
        <div className={sectionDecoration}>
          <label htmlFor="validity" className={labelDecoration}>
            Validity of the Agreement: (in months)
          </label>
          <input
            type="number"
            name="validity"
            id=""
            className={inputDecoration}
          />
        </div>
        <div className={sectionDecoration}>
          <h2 className={headingDecoration}>Farmer Details</h2>
          <label htmlFor="farmerName" className={labelDecoration}>
            Farmer Name:{" "}
          </label>
          <input
            type="text"
            name="farmerName"
            id=""
            className={inputDecoration}
          />
          <label htmlFor="farmLocation" className={labelDecoration}>
            Farm Location:{" "}
          </label>
          <textarea name="farmLocation" id="" rows="2"></textarea>
          <label htmlFor="mobile" className={labelDecoration}>
            Mobile:{" "}
          </label>
          <input
            type="number"
            name="mobile"
            id=""
            className={inputDecoration}
          />
          <label htmlFor="email" className={labelDecoration}>
            Email:{" "}
          </label>
          <input type="email" name="email" id="" className={inputDecoration} />
        </div>
        <div className={sectionDecoration}>
          <h2 className={headingDecoration}>Retailer Details: </h2>
          <label htmlFor="businessLocation" className={labelDecoration}>
            Location:{" "}
          </label>
          <textarea name="businessLocation" id="" rows="2"></textarea>
          <label htmlFor="mobile" className={labelDecoration}>
            Mobile:{" "}
          </label>
          <input
            type="number"
            name="mobile"
            id=""
            className={inputDecoration}
          />
          <label htmlFor="email" className={labelDecoration}>
            Email:{" "}
          </label>
          <input type="email" name="email" id="" className={inputDecoration} />
        </div>
        <div className={sectionDecoration}>
          <h2 className={headingDecoration}>Product Details: </h2>
          <label htmlFor="typeOfProduct" className={labelDecoration}>
            Type of Product:{" "}
          </label>
          <input
            type="text"
            name="typeOfProduct"
            id=""
            className={inputDecoration}
          />
          <label htmlFor="quantityOfProduct" className={labelDecoration}>
            Quantity of Product:{" "}
          </label>
          <input
            type="number"
            name="quantityOfProduct"
            id=""
            className={inputDecoration}
          />
        </div>
        <div className={sectionDecoration}>
          <h2 className={headingDecoration}>Input Supply Details: </h2>
          <label htmlFor="inputsProvided" className={labelDecoration}>
            Inputs Provided:{" "}
          </label>
          <input
            type="text"
            name="inputsProvided"
            id=""
            className={inputDecoration}
          />
          <label htmlFor="quantity" className={labelDecoration}>
            Quantity:{" "}
          </label>
          <input
            type="text"
            name="quantity"
            id=""
            className={inputDecoration}
          />
          <label htmlFor="deliveryDeadline" className={labelDecoration}>
            Delivery Deadline:{" "}
          </label>
          <input
            type="month"
            name="deliveryDeadline"
            id=""
            className={inputDecoration}
          />
        </div>
        <div className="flex flex-col">
          <h2 className={headingDecoration}>Pricing Terms</h2>
          <label htmlFor="preCompromisedPrice" className={labelDecoration}>
            Pre-Compromised Price: (per kg)
          </label>
          <input
            type="text"
            name="preCompromisedPrice"
            id=""
            className={inputDecoration}
          />
        </div>
        <button
          type="submit"
          className="border bg-blue-700 p-3 rounded-lg text-white text-md font-semibold"
        >
          Create Agreement
        </button>
      </form>
    </div>
  );
}

export default Agreement;
