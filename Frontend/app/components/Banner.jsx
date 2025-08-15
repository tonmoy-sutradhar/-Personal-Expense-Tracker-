import React from "react";
import banner from "@/app/asset/banner.jpg";

function Banner() {
  return (
    <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage:
      //     "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      // }}
      style={{
        backgroundImage: `url(${banner.src})`, // Use local image
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold">
            💰 Personal Expenses Tracker
          </h1>
          <p className="mb-5">
            Easily manage, track, and analyze your daily expenses with a simple
            and intuitive web app.Take control of your finances with a smart and
            user-friendly expense tracking solution.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
