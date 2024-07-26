'use client'
import React, { useState } from 'react'

interface Order {
  item: string;
  quantity: number;
}

interface DrinkOrderFormProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const OtherDrink = ({ orders, setOrders }: DrinkOrderFormProps) => {
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [freeText, setFreeText] = useState("");

  const handleDrinkClick = (drink: string) => {
    setSelectedDrink(drink);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleAddClick = () => {
    const orderItem = `${selectedDrink} ${selectedOption} ${freeText}`.trim();
    if (!orderItem) return;

    const existingOrderIndex = orders.findIndex(order => order.item === orderItem);

    if (existingOrderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[existingOrderIndex].quantity += 1;
      setOrders(updatedOrders);
    } else {
      setOrders([...orders, { item: orderItem, quantity: 1 }]);
    }

    // Clear selections after adding
    setSelectedDrink("");
    setSelectedOption("");
    setFreeText("");
  };

  return (
    <section id="other-drink">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Other Drink Order Form</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Drink Type</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedDrink === "100+" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleDrinkClick("100+")}
          >
            100+
          </button>
          <button
            className={`btn ${selectedDrink === "Coke" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleDrinkClick("Coke")}
          >
            Coke
          </button>
          <button
            className={`btn ${selectedDrink === "Water" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleDrinkClick("Water")}
          >
            Water
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Options</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedOption === "Lite" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleOptionClick("Lite")}
          >
            Lite
          </button>
          <button
            className={`btn ${selectedOption === "Zero" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleOptionClick("Zero")}
          >
            Zero
          </button>
          <button
            className={`btn ${selectedOption === "Non Carbonated" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleOptionClick("Non Carbonated")}
          >
            Non Carbonated
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Free Text</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter any other drinks"
          value={freeText}
          onChange={(e) => setFreeText(e.target.value)}
        />
      </div>

      <div className="text-center">
        <button className="btn btn-success text-white w-full" onClick={handleAddClick}>Add</button>
      </div>
    </div>
    </section>
  )
}

export default OtherDrink