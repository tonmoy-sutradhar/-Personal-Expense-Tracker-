"use client";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-purple-100 to-purple-200">
      <section className="text-center py-4 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6">
          About Personal Expenses Tracker
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Manage your finances effortlessly. Track, categorize, and analyze your
          daily expenses to take control of your spending habits and achieve
          your financial goals.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Explore Features
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
