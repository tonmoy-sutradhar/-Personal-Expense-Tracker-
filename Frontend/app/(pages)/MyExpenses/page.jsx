"use client";
import { AuthContext } from "@/app/(Provider)/AuthProvider.jsx/Page";
import MyExpensesCart from "@/app/components/MyExpensesCart";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

function MyExpenses() {
  const { user } = useContext(AuthContext);
  const [myExpenses, setMyExpenses] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://backend-pi-lime-94.vercel.app/my-expenses`, {
          params: { email: user?.email },
        })
        .then((res) => {
          setMyExpenses(res.data);
        })
        .catch((err) => {
          console.log("Error fetching user expenses", err);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    setMyExpenses((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center border-b-2 w-[400px] mx-auto text-blue-500">
        My Expenses List
      </h2>
      <p className="ml-4 text-black">
        User Name:{" "}
        <span className="text-blue-500">{user?.displayName || "Guest"}</span>
      </p>
      <p className="ml-4 mb-5 text-black">
        User Email:{" "}
        <span className="text-blue-500">{user?.email || "No email"}</span>
      </p>

      {myExpenses.length === 0 ? (
        <p className="text-center font-bold text-blue-500 mt-7">
          No expenses added.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-9">
          {myExpenses.map((item, index) => (
            <div key={item._id}>
              <MyExpensesCart
                item={item}
                handleDelete1={handleDelete}
              ></MyExpensesCart>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyExpenses;
