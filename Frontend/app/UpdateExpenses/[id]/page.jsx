"use client";

import { AuthContext } from "@/app/(Provider)/AuthProvider.jsx/Page";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

function UpdateExpenses() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const router = useRouter();

  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  // Fetch expense by ID
  useEffect(() => {
    if (id) {
      axios
        .get(`https://backend-pi-lime-94.vercel.app/expenses/${id}`)
        .then((res) => setExpenseData(res.data))
        .catch((err) => console.error("Error fetching expense:", err));
    }
  }, [id]);

  // Update expense
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://backend-pi-lime-94.vercel.app/expenses/${id}`,
        expenseData
      );

      if (res.data.modifiedCount > 0 || res.data.success) {
        Swal.fire("Success!", "Expense updated successfully", "success");
        router.push("/");
      }
    } catch (err) {
      console.error("Error updating expense:", err);
      Swal.fire("Error!", "Something went wrong!", "error");
    }
  };

  const handleChange = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">
          Update Expense
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            name="title"
            value={expenseData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Title"
            required
          />

          {/* Amount */}
          <input
            type="number"
            name="amount"
            value={expenseData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Amount"
            required
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            value={expenseData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Category"
            required
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={expenseData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          {/* User Email */}
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-200"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg w-full"
          >
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateExpenses;
