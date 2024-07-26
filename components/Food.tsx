'use client'
import React, { useState } from 'react'

interface Order {
  item: string;
  quantity: number;
}

interface FoodProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

function Food({ orders, setOrders }: FoodProps) {
  const [textInput, setTextInput] = useState('');

  function handleButtonClick() {
    if (!textInput) return;
    setOrders(prevOrders => {
      const textInputLower = textInput.toUpperCase();
      const orderIndex = prevOrders.findIndex(order => order?.item?.toUpperCase() === textInputLower);

      if (orderIndex >= 0) {
        const newOrders = [...prevOrders];
        newOrders[orderIndex] = {
          ...newOrders[orderIndex],
          quantity: newOrders[orderIndex].quantity + 1,
        };
        return newOrders;
      } else {
        return [...prevOrders, { item: textInputLower, quantity: 1 }];
      }
    });
    setTextInput(''); // Reset the text input
  }

  return (
    <section id="food" className="flex flex-col items-center justify-center min-h-screen py-12 px-6 space-y-8 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label className="block text-gray-700 font-semibold mb-4">
          Add a food item:
          <input
            type="text"
            className="input input-bordered w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Write your food here"
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
          />
        </label>
        <button
          className="btn btn-success text-white w-full py-2 mt-4 font-semibold rounded-lg"
          onClick={handleButtonClick}
        >
          Add
        </button>
      </div>
    </section>
  )
}

export default Food