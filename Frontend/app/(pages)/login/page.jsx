"use client";
import { AuthContext } from "@/app/(Provider)/AuthProvider.jsx/Page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import google from "@/app/asset/google.png";

function Page() {
  const { GoogleLogin, userLogin, setUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    setErr("");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful", { toastId: "login-success" }); // unique ID to prevent duplicates
        navigate.push("/");
      })
      .catch((error) => {
        toast.warning("Error in Login..!!", { toastId: "login-error" });
        setErr(error.message);
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(() => {
        toast.success("Google login successful", { toastId: "google-success" });
        navigate.push("/");
      })
      .catch(() => {
        toast.warning("Google login unsuccessful", { toastId: "google-error" });
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-gradient-to-r from-blue-500 to-purple-600 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
        <div>
          <img
            src="https://i.pinimg.com/originals/8e/ea/a9/8eeaa9995a0e1313e93098130b7bbe7d.png"
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit} className="card-body text-black">
          <h1 className="text-2xl -mt-9 font-semibold text-center">
            <span className="text-white">WELCOME</span> <br />
            Login your account
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
            <label className="label">
              <Link
                href="/forgotPassword"
                className="label-text-alt link link-hover text-black"
              >
                Forgot password?
              </Link>
            </label>
            {err && <label className="label text-sm text-red-600">{err}</label>}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-active bg-lime-400 text-black font-bold rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 text-black">OR</span>
            <div className="flex-grow border-t border-black"></div>
          </div>

          <div
            className="flex justify-center gap-1 items-center w-full border-2 rounded-lg bg-lime-300 px-1"
            onClick={handleGoogleLogin}
          >
            <img className="w-5 h-5 rounded-full" src={google.src} alt="img" />
            <button type="button" className="text-sm py-1">
              Login with Google
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-black-500 mt-2 mb-3">
          Don’t Have An Account ?{" "}
          <Link href="/register" className="text-white text-xl">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
