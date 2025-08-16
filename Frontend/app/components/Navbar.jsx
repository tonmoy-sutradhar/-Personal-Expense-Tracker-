"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../(Provider)/AuthProvider.jsx/Page";

function Navbar() {
  const { logOut, user } = useContext(AuthContext);
  return (
    <div className="navbar bg-gradient-to-r from-indigo-500  to-indigo-400 opacity-80 text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/AllExpenses"}>All Expenses</Link>
            {user && (
              <>
                <Link href={"/AddExpenses"}>Add Expenses</Link>
                <Link href={"/MyExpenses"}>My Expenses</Link>
              </>
            )}
            <Link href={"/#"}>About Us</Link>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Link
              href="/"
              // text-[#5c29b4]
              className="font-bold text-xl text-black lg:text-2xl -mt-1"
            >
              Personal Expenses Tracker
            </Link>
          </div>
        </div>
      </div>
      <div className="active navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/AllExpenses"}>All Expenses</Link>
          {user && (
            <>
              <Link href={"/AddExpenses"}>Add Expenses</Link>
              <Link href={"/MyExpenses"}>My Expenses</Link>
            </>
          )}
          <Link href={"/#"}>About Us</Link>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <button
            title="Change theme"
            onClick={toggleTheme}
            className={` text-3xl mr-3 bg-[#e26fc1] font-bold transition duration-300 rounded-md shadow ${
              theme === "light" ? "text-black " : "text-black bg-gray-950 "
            }`}
          >
            {theme === "light" ? "🌙" : "🌞"}
          </button> */}

        {user && user?.email ? (
          <div className="flex justify-center items-center gap-3">
            <img
              className="w-11 rounded-full"
              src={user?.photoURL}
              alt="Profile-photo"
            />

            <button
              onClick={logOut}
              className="btn bg-red-500 text-white rounded-3xl"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3">
            <Link
              href="/login"
              className="btn bg-blue-600 text-white rounded-3xl"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn bg-blue-600 text-white rounded-3xl"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
