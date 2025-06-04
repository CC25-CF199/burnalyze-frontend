import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="bg-white px-6 sm:px-8 py-10 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
        <div className="flex justify-center mb-6">
          <img src="/burnalyze-logo.png" alt="BurnAlyze Logo" className="h-14" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Reset your Password
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
          <button
            type="submit"
            className="w-full bg-[#00ADB5] hover:bg-[#019ba3] text-white font-semibold py-3 rounded-2xl transition-all"
          >
            Send Reset Password
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Remembered your password?{' '}
          <Link to="/login" className="text-[#00ADB5] font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
