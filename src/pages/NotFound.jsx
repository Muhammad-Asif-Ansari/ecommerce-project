import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/404NotFound.json'; // Ensure this path is correct

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md">
        <Lottie animationData={animationData} loop={true} style={{ height: 300 }} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-6">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-center">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
