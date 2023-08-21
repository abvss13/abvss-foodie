import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200"
          >
            <h2 className="font-bold text-xl">{item.name}</h2>
            <img className="w-16" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
