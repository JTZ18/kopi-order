'use client'
import { Suspense, useState, useRef } from 'react'
import Header from "@/components/Header";
import DrinkType from '@/components/DrinkType';
import OtherDrink from '@/components/OtherDrink';
import Total from '@/components/Total';
import Food from '@/components/Food';

export default function Home() {
  const [orders, setOrders] = useState([]); // list of objects {quantity: 0, item: ""}

  return (
    <>
      <Suspense>
        <div className="sticky top-0 z-50">
          <Header />
        </div>
      </Suspense>
      <main>
        <DrinkType orders={orders} setOrders={setOrders} />
        <OtherDrink orders={orders} setOrders={setOrders}/>
        <Food orders={orders} setOrders={setOrders} />
        <Total orders={orders} setOrders={setOrders} />
      </main>
    </>
  );
}