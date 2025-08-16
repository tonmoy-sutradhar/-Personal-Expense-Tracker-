"use client";
import { AuthContext } from "@/app/(Provider)/AuthProvider.jsx/Page";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function AddExpenses() {
  const { user } = useContext(AuthContext);
  const navigate = useRouter();
  // Add expenses
  const handleAddExpenses = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const category = form.category.value;
    const date = form.date.value;

    const allData = {
      title,
      amount,
      category,
      date,
      userEmail: user?.email,
    };

    try {
      const { data } = await axios.post(
        "https://backend-pi-lime-94.vercel.app/expenses",
        allData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.insertedId) {
        toast.success("Expenses added successfully");
        navigate.push("/MyExpenses");
      }
    } catch (error) {
      console.error("Error adding expenses:", error);
      toast.error("Failed to add expenses");
    }
  };
  return (
    <div className="py-9 flex items-center justify-center bg-gray-100 p-4 text-black">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add New Expenses
        </h2> */}
        <h1 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-blue-500">
          Add New Expenses
        </h1>
        <form onSubmit={handleAddExpenses} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter expenses title"
              className="input input-bordered w-full rounded-md p-2"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="input input-bordered w-full rounded-md p-2"
              min={0}
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="input input-bordered w-full rounded-md p-2"
              required
            >
              <option value="">Select category</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Shoes">Shoes</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full rounded-md p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg w-full"
          >
            Add Expenses
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpenses;
