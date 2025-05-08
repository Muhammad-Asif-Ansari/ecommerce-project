import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <Hero />
      <Card />
      <div className="mt-10 flex gap-4 justify-center">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate('/about')}
        >
          Go to About
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
