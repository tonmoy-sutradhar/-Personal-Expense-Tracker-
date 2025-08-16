"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

function MyExpensesCart({ item, handleDelete1 }) {
  const { _id, title, amount, date, category } = item;

  // HandleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://backend-pi-lime-94.vercel.app/expenses/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              handleDelete1(id); 
            }
          })
          .catch((err) => {
            console.error("Error deleting equipment:", err);
            Swal.fire("Error!", "Something went wrong!", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-purple-700">
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold text-white">Title: {title}</h1>
        <div className="text-lg font-semibold text-white">
          Price: $ {amount}
        </div>
        <p className="text-sm text-gray-500 dark:text-white/60">
          <span className="px-4 py-1 border text-white rounded-3xl bg-purple-800">
            {category}
          </span>
        </p>
        <div className="text-lg font-semibold text-white">Date: {date}</div>
      </div>

      <div className="flex gap-4">
        <Link href={`/UpdateExpenses/${_id}`}>
          <button className="rounded-4xl bg-green-500 px-4 py-1 text-[12px] font-semibold text-white  sm:text-sm md:text-base cursor-pointer ">
            Update
          </button>
        </Link>

        <button
          title="Delete"
          onClick={() => handleDelete(_id)}
          className="bg-red-500 px-4 py-1 rounded-4xl text-white cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MyExpensesCart;
