"use client";

import app from "@/app/firebase/firebase.init";
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
export const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Create user
  const createNewUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // observer set
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // User logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // User Login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user info
  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  //Login with google
  const GoogleLogin = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Forgot password
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const AuthInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    GoogleLogin,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
