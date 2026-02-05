import React from "react";
import {ProductList} from "./products/productList.jsx";
export default function Product()
 {
  const savedData = (e) => {
    e.preventDefault();
    alert("Data Saved Successfully");
  };

  return (
    <div className="max-w-9xl mx-auto bg-[#1a1b26] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#c0caf5] py-8">Product Details</h1>

      <div className="flex flex-col md:flex-row w-full gap-6 p-8">
        {/* FORM */}
        <div className="w-full md:basis-[30%] md:flex-none">
          <form onSubmit={savedData} className="w-full space-y-4 p-4 rounded-lg bg-[#24283b] border border-[#414868] shadow-xl">
            
            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">Product Name</label>
              <input className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">color</label>
              <input className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">category</label>
              <input className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">price</label>
              <input className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <button className="w-full bg-[#7aa2f7] text-[#1a1b26] py-2 rounded font-medium hover:bg-[#7dcfff] transition">
              Submit
            </button>
          </form>
        </div>

        {/* TABLE */}
        <ProductList />
      </div>
    </div>
  );
}
