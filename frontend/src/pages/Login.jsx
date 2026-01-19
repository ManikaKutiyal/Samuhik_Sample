import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("phone");
const [otpSent, setOtpSent] = useState(false); // Track if OTP was sent
const [userOtp, setUserOtp] = useState("");   // Store the 6-digit code user types
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    name: "",
  });
const handleSubmit = async (e) => {
  e.preventDefault();

  // 🚨 OTP IS VISUAL ONLY
  if (loginMethod === "phone") {
    if (!otpSent) {
      // Just flip UI state
      setOtpSent(true);
    } else {
      alert("OTP flow is UI-only for now.");
    }
    return;
  }

  // ✅ REAL AUTH (EMAIL)
  try {
    const url = isLogin
      ? "https://samuhik-sample-8eso.vercel.app/auth/login"
      : "https://samuhik-sample-8eso.vercel.app/auth/signup";

    const res = await axios.post(url, {
      email: formData.email,
      password: formData.password,
      name: formData.name,
    });

    // SAME AS YOUR WORKING PROJECT
    login(res.data.token);
    navigate("/");

  } catch (err) {
    alert(err.response?.data?.message || "Authentication failed");
  }
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

          {/* Card */}
          <div>
            <h1 className="text-center mb-6 text-2xl sm:text-4xl font-lora font-bold text-[hsl(0_0%_9%)]">
              {isLogin ? "Login / Sign up" : "Create Account"}
            </h1>

{/* PHONE LOGIN */}
{loginMethod === "phone" && (
  <form onSubmit={handleSubmit} className="space-y-4">
    {!otpSent ? (
      /* STEP 1: ENTER PHONE */
      <div className="flex gap-2">
        <div className="px-4 flex items-center rounded-lg bg-[hsl(0_0%_89%)] text-[hsl(0_0%_9%)]/60">
          +91
        </div>
        <div className="relative flex-1">
          <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(0_0%_9%)]/60" />
          <input
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-10 py-3 rounded-lg border border-[hsl(0_0%_83%)] focus:outline-none focus:ring-2 focus:ring-[hsl(71_56%_47%)]/20"
            required
          />
        </div>
      </div>
    ) : (
      /* STEP 2: ENTER OTP */
      <div className="relative">
        <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(0_0%_9%)]/60" />
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={userOtp}
          onChange={(e) => setUserOtp(e.target.value)}
          className="w-full pl-10 py-3 rounded-lg border border-[hsl(0_0%_83%)] focus:outline-none focus:ring-2 focus:ring-[hsl(71_56%_47%)]/20"
          maxLength={6}
          required
        />
      </div>
    )}

    <button
      type="submit"
      className="w-full py-4 rounded-[5px] text-lg font-medium bg-[hsl(71_56%_47%)] text-[hsl(151_80%_95%)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      {!otpSent ? "Get OTP" : "Verify & Login"}
    </button>
  </form>
)}
            {/* EMAIL LOGIN */}
            {loginMethod === "email" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="
                      w-full py-3 px-4 rounded-lg
                      border border-[hsl(0_0%_83%)]
                      focus:outline-none focus:ring-2
                      focus:ring-[hsl(71_56%_47%)]/20
                    "
                    required
                  />
                )}

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(0_0%_9%)]/60"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="
                      w-full pl-10 py-3 rounded-lg
                      border border-[hsl(0_0%_83%)]
                      focus:outline-none focus:ring-2
                      focus:ring-[hsl(71_56%_47%)]/20
                    "
                    required
                  />
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(0_0%_9%)]/60"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="
                      w-full pl-10 pr-10 py-3 rounded-lg
                      border border-[hsl(0_0%_83%)]
                      focus:outline-none focus:ring-2
                      focus:ring-[hsl(71_56%_47%)]/20
                    "
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="
                    w-full py-4 rounded-full text-lg font-medium
                    bg-[hsl(71_56%_47%)]
                    text-[hsl(151_80%_95%)]
                    hover:shadow-lg hover:-translate-y-0.5
                    transition-all
                  "
                >
                  {isLogin ? "Login" : "Create Account"}
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[hsl(0_0%_83%)]" />
              <span className="text-sm text-[hsl(0_0%_9%)]/60">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-[hsl(0_0%_83%)]" />
            </div>

            {/* Method Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setLoginMethod("email")}
                className="
                  flex-1 py-3 rounded-[5px] border
                  border-[hsl(0_0%_83%)]
                  hover:bg-[hsl(0_0%_89%)]
                  transition
                "
              >
                Login with Email
              </button>
              <button
                onClick={() => setLoginMethod("phone")}
                className="
                  flex-1 py-3 rounded-[5px]1 border
                  border-[hsl(0_0%_83%)]
                  hover:bg-[hsl(0_0%_89%)]
                  transition
                "
              >
                Login with Phone
              </button>
            </div>

            {/* Toggle login/signup */}
            {(loginMethod === "email" || loginMethod === "phone") && (
              <p className="text-center mt-6 text-sm text-[hsl(0_0%_9%)]/60">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-medium text-[hsl(71_56%_47%)] hover:underline"
                >
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </p>
            )}
          </div>

          {/* Promo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-8 p-6 rounded-2xl text-center
              bg-gradient-to-r
              from-[hsl(71_56%_47%)]/10
              to-[hsl(166_76%_96%)]
            "
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[hsl(0_0%_9%)]">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="text-[hsl(0_0%_9%)]/60">
              Start your daily shopping with Samuhik Utthan Sewa Samiti
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
