import React from "react";
export function ProductList() {
  return (
    <div className="w-full md:basis-[70%] md:flex-none overflow-x-auto
                    bg-[#24283b] border border-[#414868] rounded-lg shadow-xl">
      <table className="w-full text-sm text-[#c0caf5]">
        <thead className="border-b border-[#414868] text-[#9aa5ce]">
          <tr>
            <th className="px-4 py-3 text-left">Sr.no</th>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-left">Color</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Edit</th>
            <th className="px-4 py-3 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
             {/* <tr class="border-b border-[#414868] hover:bg-[#1f2335]">
                <td class="px-4 py-3">1</td>
                <td class="px-4 py-3">MacBook</td>
                <td class="px-4 py-3">Silver</td>
                <td class="px-4 py-3">Laptop</td>
                <td class="px-4 py-3">$2999</td>
                <td class="px-4 py-3 text-[#7aa2f7] cursor-pointer hover:underline">Edit</td>
                <td class="px-4 py-3 text-[#7aa2f7] cursor-pointer hover:underline">Delete</td>
              </tr> */}
        </tbody>
      </table>
    </div>
  );
}

             
    