'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

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

    toast("✅ Order Added !");
  }

  return (
    <section id="food">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">🍔 Food Orders</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Add a food item:</label>
          <input
            type="text"
            className="input input-bordered w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Write your food here"
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-success text-white w-full py-2 mt-4 font-semibold rounded-lg"
            onClick={handleButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  )
}

export default Food