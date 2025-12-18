import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../Styles/Auth.css";

/* 🔹 Firebase config */
const firebaseConfig = {
  apiKey: "AIzaSyBXkneMkSmXfi7WNy_bP8S-2v7rSGDqsHg",
  authDomain: "deziflightpage.firebaseapp.com",
  projectId: "deziflightpage",
  storageBucket: "deziflightpage.appspot.com",
  messagingSenderId: "699054217220",
  appId: "1:699054217220:web:3cb444ce1d04bc6834bd51",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    if (!email || !password) {
      alert("Email aur password required hai");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      // ✅ SUCCESS → MAP PAGE
      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h1>Dezy Flight ✈️</h1>
        <p className="subtitle">
          {isLogin ? "Welcome back" : "Create your Dezy account"}
        </p>

        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleAuth}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <div className="switch-text">
          {isLogin ? "New here?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Create account" : " Login"}
          </span>
        </div>
      </div>
    </div>
  );
}
