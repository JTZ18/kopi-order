'use client'
import React, { useState } from "react";

interface Order {
  item: string;
  quantity: number;
}

interface DrinkOrderFormProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const DrinkType = ({ orders, setOrders }: DrinkOrderFormProps) => {
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedMilk, setSelectedMilk] = useState("");
  const [selectedSugar, setSelectedSugar] = useState("");
  const [selectedStrength, setSelectedStrength] = useState("");
  const [selectedIce, setSelectedIce] = useState("");

  const handleDrinkClick = (drink: any) => {
    setSelectedDrink(drink);
  };

  const handleMilkClick = (milk: any) => {
    setSelectedMilk(milk);
  };

  const handleSugarClick = (sugar: any) => {
    setSelectedSugar(sugar);
  };

  const handleStrengthClick = (strength: any) => {
    setSelectedStrength(strength);
  };

  const handleIceClick = (ice: any) => {
    setSelectedIce(ice);
  };

  const handleAddClick = () => {
    const orderItem = `${selectedDrink} ${selectedMilk} ${selectedSugar} ${selectedStrength} ${selectedIce}`.trim();
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
    setSelectedDrink("")
    setSelectedMilk("")
    setSelectedSugar("")
    setSelectedStrength("")
    setSelectedIce("")
  };

  return (
    <section id="drink-type">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Drink Order Form</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Drink Type</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedDrink === "Teh" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleDrinkClick("Teh")}
          >
            Teh
          </button>
          <button
            className={`btn ${selectedDrink === "Kopi" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleDrinkClick("Kopi")}
          >
            Kopi
          </button>
          <button
            className={`btn ${selectedDrink === "Milo" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleDrinkClick("Milo")}
          >
            Milo
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Milk</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedMilk === "OC" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleMilkClick("OC")}
          >
            OC
          </button>
          <button
            className={`btn ${selectedMilk === "Halia" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleMilkClick("Halia")}
          >
            Halia
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Sugar</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedSugar === "Kosong" ? "btn-accent" : "btn-outline-accent"}`}
            onClick={() => handleSugarClick("Kosong")}
          >
            Kosong
          </button>
          <button
            className={`btn ${selectedSugar === "Siu Dai" ? "btn-accent" : "btn-outline-accent"}`}
            onClick={() => handleSugarClick("Siu Dai")}
          >
            Siu Dai
          </button>
          <button
            className={`btn ${selectedSugar === "Gam Dai" ? "btn-accent" : "btn-outline-accent"}`}
            onClick={() => handleSugarClick("Gam Dai")}
          >
            Gam Dai
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Strength</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedStrength === "Gau" ? "btn-info" : "btn-outline-info"}`}
            onClick={() => handleStrengthClick("Gau")}
          >
            Gau
          </button>
          <button
            className={`btn ${selectedStrength === "Po" ? "btn-info" : "btn-outline-info"}`}
            onClick={() => handleStrengthClick("Po")}
          >
            Po
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Ice</label>
        <div className="flex space-x-2">
          <button
            className={`btn ${selectedIce === "Peng" ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => handleIceClick("Peng")}
          >
            Peng
          </button>
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-success w-full text-white" onClick={handleAddClick}>Add</button>
      </div>
    </div>
    </section>
  );
};

export default DrinkType;