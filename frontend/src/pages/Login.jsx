import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Toast
  const [showToast, setShowToast] = useState(false);
  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("phone");
  const [otpSent, setOtpSent] = useState(false);
  const [userOtp, setUserOtp] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    triggerToast(); // show popup always
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(0,0%,100%)]">
      <main className="flex-1 flex items-center justify-center px-6 py-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >

          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/">
              <img
                src="https://www.sewasamitingo.org/wp-content/uploads/2017/06/logo.jpg"
                alt="Samuhik Utthan Sewa Samiti"
                className="h-20 mx-auto object-contain"
              />
            </Link>
          </div>

          <h1 className="text-center mb-6 text-2xl sm:text-4xl font-bold">
            Login / Sign up
          </h1>

          {/* PHONE LOGIN */}
          {loginMethod === "phone" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!otpSent ? (
                <div className="flex gap-2">
                  <div className="px-4 flex items-center rounded-lg bg-gray-200">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full pl-3 py-3 rounded-lg border"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full pl-3 py-3 rounded-lg border"
                />
              )}

              <button
                type="submit"
                className="w-full py-4 bg-green-500 text-white rounded"
              >
                {!otpSent ? "Get OTP" : "Verify & Login"}
              </button>
            </form>
          )}

          {/* EMAIL LOGIN */}
          {loginMethod === "email" && (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-4 rounded border"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-4 rounded border"
              />

              <button
                type="submit"
                className="w-full py-4 bg-green-500 text-white rounded"
              >
                Login
              </button>
            </form>
          )}

          {/* Method Toggle */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => {
                triggerToast();
                setLoginMethod("email");
              }}
              className="flex-1 py-3 border rounded"
            >
              Login with Email
            </button>

            <button
              onClick={() => {
                triggerToast();
                setLoginMethod("phone");
              }}
              className="flex-1 py-3 border rounded"
            >
              Login with Phone
            </button>
          </div>

          {/* Signup toggle */}
          <p className="text-center mt-6 text-sm">
            Don't have account?{" "}
            <button
              onClick={() => {
                triggerToast();
                setIsLogin(!isLogin);
              }}
              className="text-green-600 font-medium"
            >
              Sign up
            </button>
          </p>

          {/* Promo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-6 rounded bg-green-50 text-center"
          >
            <h2 className="text-xl font-bold">
              Stay home & shop online
            </h2>
            <p>Samuhik Utthan Sewa Samiti</p>
          </motion.div>
        </motion.div>

        {/* TOAST */}
        {showToast && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="
              fixed top-6 right-6 z-50
              bg-white shadow-lg
              border-l-4 border-green-500
              rounded-lg px-5 py-3
              text-sm font-medium
            "
          >
            ⚠️ Feature under development. Coming soon!
          </motion.div>
        )}

      </main>
    </div>
  );
}
