 import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        {/* Optional Illustration */}
        <div className="mt-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="error"
            className="w-32 mx-auto opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;