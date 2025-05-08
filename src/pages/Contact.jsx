import React from 'react';

const Contact = () => {
  return (
    <section className="p-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Have any questions? Feel free to reach out to us. We’d love to hear from you!
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
