import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartIncrement, cartDecrement, cartDeleteAll } from "../redux-toolkit/cart/cartSlice";

function Card() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-center font-bold text-4xl mb-10">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {product.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={item.image} alt={item.title} className="h-48 w-full object-contain" />
              <h2 className="text-md font-bold mt-2 line-clamp-2">{item.title}</h2>
              <p className="text-blue-600 font-bold">${item.price}</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => dispatch(cartIncrement())}>Add</button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => dispatch(cartDecrement())}>Remove</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => dispatch(cartDeleteAll())}>Clear</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
