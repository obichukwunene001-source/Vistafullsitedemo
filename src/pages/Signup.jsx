import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    const { error } = await signup(email, password);
    setLoading(false);
    if (error) alert(error.message);
    else {
      alert("Check your email to confirm your account!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start md:pt-20 px-1 py-12 -ml-3 md:-ml-7">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-semibold mb-3">Create an account</h1>
            <p className="text-sm text-gray-600 mb-8">Join us to access tutorials and services</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-b border-gray-200 bg-transparent py-2 outline-none text-black placeholder-gray-400 caret-black focus:ring-0"
                  placeholder="name@example.com"
                />
              </div>

              <div className="relative">
                <label className="block text-xs text-gray-600 mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-b border-gray-200 bg-transparent py-2 pr-10 outline-none text-black placeholder-gray-400 caret-black focus:ring-0"
                  placeholder="Choose a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div className="relative">
                <label className="block text-xs text-gray-600 mb-2">Confirm password</label>
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full border-b border-gray-200 bg-transparent py-2 pr-10 outline-none text-black placeholder-gray-400 caret-black focus:ring-0"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-medium"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account? <Link to="/login" className="text-orange-600 font-medium">Sign in</Link>
              </p>
            </form>
          </div>

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

export default Signup;
