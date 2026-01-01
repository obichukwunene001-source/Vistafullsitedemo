import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import google from "../assets/google.png";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await login(email, password);
    setLoading(false);
    if (error) {
      alert(error.message);
    } else {
      navigate("/");
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await loginWithGoogle();
    setLoading(false);
    if (error) {
      alert(error.message);
    }
    // On success Supabase will redirect to Google and then back to our app
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start md:pt-20 py-12 px-3 -ml-7 md:-ml-7">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: form */}
          <div className="max-w-md">
            <h1 className="text-4xl font-semibold mb-3">Login</h1>
            <p className="text-sm text-gray-600 mb-8">Pick up where you left off with your tutorials</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-200 bg-transparent py-2 outline-none text-black placeholder-gray-400 caret-black focus:ring-0"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-600">Password</label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-b border-gray-200 bg-transparent py-2 pr-10 outline-none text-black placeholder-gray-400 mb-3 caret-black focus:ring-0"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 pb-10 text-gray-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                <Link to="/reset" className="text-xs text-gray-500 flex justify-end">
                  Reset your password
                </Link>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-medium"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-3 w-full border border-orange-300 rounded-full py-3 flex items-center justify-center gap-3 bg-white"
                disabled={loading}
                aria-busy={loading}
              >
                <img src={google} alt="Google" className="w-5 h-5" />
                {loading ? "Redirecting..." : "Continue with Google"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                New here? <Link to="/signup" className="text-orange-600 font-medium">Create an account</Link>
              </p>
            </form>
          </div>

          {/* Right: testimonial */}
          <div className="hidden md:flex flex-col items-start justify-center px-8">
            <div className="flex items-center mb-4">
              <div className="flex text-orange-500 text-xl mr-3">★★★★★</div>
            </div>
            <blockquote className="text-lg italic text-gray-800 mb-6">
              "I had my account set up in minutes and was learning immediately."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <div className="font-medium">Adekunle Bello</div>
                <div className="text-sm text-gray-500">Supply chain manager, Lagos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
