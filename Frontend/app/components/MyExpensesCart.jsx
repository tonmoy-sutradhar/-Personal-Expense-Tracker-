// import Link from "next/link";
"use client";
import React from "react";

function MyExpensesCart({ item, handleDelete1 }) {
  const { _id, title, amount, date, category } = item;
  console.log(item);
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
        {/* ----- */}
        {/* <Link href={`/updateEquipment/${_id}`}> */}
        <button className="rounded-4xl bg-green-500 px-4 py-1 text-[12px] font-semibold text-white  sm:text-sm md:text-base ">
          Update
        </button>
        {/* </Link> */}

        <button
          title="Delete"
          // onClick={() => handleDelete(_id)}
          className="bg-red-500 px-4 py-1 rounded-4xl text-white"
          // className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MyExpensesCart;
