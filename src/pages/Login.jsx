import React from 'react';

const Login = () => {
  return (
    <section className="p-10 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full">Login</button>
        <p className="text-sm text-center text-gray-600 mt-2">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
