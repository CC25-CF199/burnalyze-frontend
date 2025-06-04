import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="bg-white px-6 sm:px-8 py-10 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
        <div className="flex justify-center mb-6">
          <img src="/burnalyze-logo.png" alt="BurnAlyze Logo" className="h-14" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Create your Account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
          <button
            type="submit"
            className="w-full bg-[#00ADB5] hover:bg-[#019ba3] text-white font-semibold py-3 rounded-2xl transition-all"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <span className="border-b w-1/5"></span>
          <span className="text-xs text-gray-500">Or sign up with</span>
          <span className="border-b w-1/5"></span>
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-white shadow p-2 rounded-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </button>
          <button className="bg-white shadow p-2 rounded-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
              alt="Facebook"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#00ADB5] font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
