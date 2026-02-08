import React, { useState } from "react";
import { ProductList } from "./products/ProductList.jsx";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default function Product() {
  let [productlist, setProductlist] = useState([]);
  let [editId, setEditId] = useState();
  let [data, setData] = useState({
    name: "",
    color: "",
    category: "",
    price: "",
  });

  const getvalue = (e) => {
    let inputname = e.target.name;
    let inputvalue = e.target.value;
    let olddata = { ...data };
    olddata[inputname] = inputvalue;
    setData(olddata);
  }

const savedData = (e) => {
  e.preventDefault();

  if (editId) {
    axios.put(`http://localhost:7171/web/api/update/${editId}`, data)
      .then(() => {
        toast.success("Product updated successfully!");
        setEditId(null);
        setData({
          name: "",
          color: "",
          category: "",
          price: ""
        });
        getallproduct();
      });
  } else {
    axios.post("http://localhost:7171/web/api/insert", data)
      .then(() => {
        toast.success("Product added successfully!");
        setData({
          name: "",
          color: "",
          category: "",
          price: ""
        });
        getallproduct();
      });
  }
};


  let getallproduct = () => {
    axios.get("http://localhost:7171/web/api/show")
      .then((res) => {
        return res.data
      }).then((finaldata) => {
        if (finaldata.status === 200) {
          setProductlist(finaldata.productlist);
        }
      })
  }


  useEffect(() => {
    getallproduct();
  }, [])

  return (
    <div className="max-w-9xl mx-auto bg-[#1a1b26] min-h-screen">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center text-[#c0caf5] py-8">Product Details</h1>

      <div className="flex flex-col md:flex-row w-full gap-6 p-8">
        {/* FORM */}
        <div className="w-full md:basis-[30%] md:flex-none">
          <form onSubmit={savedData} className="w-full space-y-4 p-4 rounded-lg bg-[#24283b] border border-[#414868] shadow-xl">

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">Product Name</label>
              <input name="name" value={data.name} onChange={getvalue} className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">color</label>
              <input name="color" value={data.color} onChange={getvalue} className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">category</label>
              <input name="category" value={data.category} onChange={getvalue} className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[#9aa5ce]">price</label>
              <input name="price" value={data.price} onChange={getvalue} className="w-full bg-[#1a1b26] border border-[#414868] text-[#c0caf5] rounded px-3 py-2" />
            </div>

            <button className="w-full bg-[#7aa2f7] text-[#1a1b26] py-2 rounded font-medium hover:bg-[#7dcfff] transition">
              {editId ? "Update Product" : "Save"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <ProductList data={productlist} getallproduct={getallproduct} Swal={Swal} setFormData={setData} setEditId={setEditId} setData={setData} />
      </div>
    </div>
  );
}
