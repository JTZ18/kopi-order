'use client'
import React from 'react'
import { PlusCircle, MinusCircle } from 'lucide-react';

interface Order {
  item: string
  quantity: number
}

interface TotalProps {
  orders: Order[]
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>
}

function Total({ orders, setOrders }: TotalProps) {

  const updateOrderQuantity = (item: string, change: number) => {
    let newOrders = [...orders]
    const orderIndex = newOrders.findIndex((o) => o.item === item);

    if (orderIndex >= 0) {
      const newQuantity = newOrders[orderIndex].quantity + change;
      if (newQuantity === 0) {
        newOrders.splice(orderIndex, 1);
      } else {
        newOrders[orderIndex].quantity = newQuantity;
      }
    }
    setOrders(newOrders)
  };

  return (
    <section id="total">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Order Summary</h2>
        <div className="grid grid-cols-7 gap-4 mb-4 text-sm font-semibold text-gray-600 border-b pb-2">
          <span className="col-span-4">Item</span>
          <span className="text-center col-span-1">Qty</span>
          <span className="col-span-2 text-right">Actions</span>
        </div>
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.item} className="grid grid-cols-7 items-center">
              <span className="col-span-4 text-gray-800 font-medium break-words">{order.item}</span>
              <span className="text-center col-span-1 text-gray-600">{order.quantity}x</span>
              <div className="flex justify-end space-x-2 col-span-2">
                <button
                  className="p-1 text-green-600 hover:text-green-800 transition-colors"
                  onClick={() => updateOrderQuantity(order.item, 1)}
                  aria-label="Increase quantity"
                >
                  <PlusCircle size={24} />
                </button>
                <button
                  className="p-1 text-red-600 hover:text-red-800 transition-colors"
                  onClick={() => updateOrderQuantity(order.item, -1)}
                  aria-label="Decrease quantity"
                >
                  <MinusCircle size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t">
          <p className="text-lg font-semibold text-gray-800 text-center">
            Total: {orders.reduce((sum, order) => sum + order.quantity, 0)} item(s)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Total