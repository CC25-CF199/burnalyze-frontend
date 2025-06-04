import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="bg-white px-8 py-10 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
        <div className="flex justify-center mb-6">
          <img src="/burnalyze-logo.png" alt="BurnAlyze Logo" className="h-14" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Login to your Account
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />

          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-[#00ADB5] hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00ADB5] hover:bg-[#019ba3] text-white font-semibold py-3 rounded-2xl transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <span className="border-b w-1/5"></span>
          <span className="text-xs text-gray-500">Or sign in with</span>
          <span className="border-b w-1/5"></span>
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-white shadow p-2 rounded-xl">
            <img src="/google-icon.png" alt="Google" className="h-6 w-6" />
          </button>
          <button className="bg-white shadow p-2 rounded-xl">
            <img src="/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have Account?{' '}
          <Link to="/signup" className="text-[#00ADB5] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
