"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AuthContext } from "@/app/(Provider)/AuthProvider.jsx/Page";
import img from "@/app/asset/register.jpg";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import google from "@/app/asset/google.png";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function page() {
  const { createNewUser, setUser, updateUserProfile, GoogleLogin } =
    useContext(AuthContext);

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    const terms = form.get("terms");

    setErr("");
    setSuccess(false);

    if (password.length <= 6) {
      setErr("Password must be more than 6 characters.");
      toast.warning("Password must be more than 6 characters.");
      return;
    }

    if (!terms) {
      setErr("Please Accept Terms & Condition");
      toast.warning("Please Accept Terms & Condition");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!regex.test(password)) {
      setErr(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      toast.warning(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      return;
    }

    // Create new user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        toast.success("Sign up successfully.");
        // console.log(user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate.push("/");
            // console.log("Profile Update.");
          })
          .catch((error) => {
            // console.log("ERROR IN PROFILE --", error);
          });
      })
      .catch((error) => {
        // console.log("ERROR IN REGISTER --", error.message);
        toast.warning(`Error: ${error.message}`);
        setSuccess(false);
      });
  };

  return (
    <div className="flex justify-center items-center  ">
      {/* Left Side: Image/Welcome Section */}

      <div
        className={`hidden md:flex w-full md:w-1/2 hero relative bg-cover bg-center h-[500px] items-center justify-center md:h-[690px] mr-7 text-white p-6`}
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      ></div>

      <div className="card bg-gradient-to-r from-blue-500 to-purple-600 w-full max-w-sm shrink-0 shadow-2xl rounded-xl p-3">
        <form onSubmit={handleSubmit} className="card-body text-black">
          <h1 className="text-xl font-semibold text-center">
            Register your account
          </h1>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input rounded-none bg-[white]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none bg-[white]"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[white]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-2xl absolute right-4 top-7"
            >
              {showPassword ? <IoMdEyeOff /> : <IoEye />}
            </button>
          </div>
          <div className="form-control ">
            <label className="cursor-pointer label justify-start ">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-success  bg-gray-300 border-2 border-green-500"
              />
              <span className="label-text ml-2 text-black">
                Accept Terms & Conditions
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-active bg-lime-400 text-black font-bold rounded-lg"
            >
              Register
            </button>
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 text-black">OR</span>
            <div className="flex-grow border-t border-black"></div>
          </div>

          <div className="flex justify-center gap-1 mt-1 items-center w-full border-2 border-blue-500 bg-lime-300 rounded-xl py-1">
            <img className="w-5 h-5 rounded-full" src={google.src} alt="" />
            <button
              type="button"
              onClick={() => {
                GoogleLogin()
                  .then(() => {
                    toast.success("Google login successful");
                    navigate.push("/");
                  })
                  .catch((error) => {
                    toast.warning("Google login unsuccessful");
                  });
              }}
              className="text-sm py-1"
            >
              Login with Google
            </button>
          </div>
        </form>

        <p className="text-black font-thin text-center">
          Already have an Account?{" "}
          <Link
            className="text-green-500  text-xl font-bold border-b-2 border-blue-700"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
