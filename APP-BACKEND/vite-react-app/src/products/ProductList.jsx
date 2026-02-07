import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function ProductList({ data = [], getallproduct, Swal }) {
  const deleterow = (delid) => {
    Swal.fire({
      title: "Do you want to delete this product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "delete",
      denyButtonText: `Don't delete`
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:7171/web/api/delete/${delid}`)
          .then(() => {
            toast.success("Product deleted successfully!");
            if (typeof getallproduct === "function") getallproduct();
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to delete product");
          });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Not deleted", "", "info");
      }
    });
  };


// the error is here ........................................................................>
// look in you browser > console > error (Failed to load resource: the server responded with a status of 500 (Internal Server Error)Understand this error)

  const editrow = (editid) => {
    axios.get(`http://localhost:7171/web/api/update/${editid}`)
      .then((res) => {
        let data = res.data;
        console.log(data.product)

      })
  };
// .................................................................................................>



  return (
    <div className="w-full md:basis-[70%] md:flex-none overflow-x-autobg-[#24283b] border border-[#414868] rounded-lg shadow-xl">
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
          {
            data.length >= 1 ?
              data.map((item, index) => {
                return (
                  <tr key={index} className="border-b border-[#414868] hover:bg-[#1f2335]">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.color}</td>
                    <td className="px-4 py-3">{item.category}</td>
                    <td className="px-4 py-3">${item.price}</td>
                    <td className="px-4 py-3 text-[#7aa2f7] cursor-pointer hover:underline">
                      <button onClick={() => editrow(item._id)} className="font-medium bg-[#7aa2f7] text-[#1a1b26] px-3 py-1 rounded">Edit</button></td>
                    <td className="px-4 py-3 text-[#7aa2f7] cursor-pointer hover:underline">
                      <button onClick={() => deleterow(item._id)} className="font-medium bg-[#f77a7a] text-[#1a1b26] px-3 py-1 rounded">Delete</button></td>
                  </tr>
                )
              })
              :
              <tr className="border-b border-[#414868] hover:bg-[#1f2335]">
                <td className="px-4 py-3 text-center" colSpan={8}>No data found</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  );
}