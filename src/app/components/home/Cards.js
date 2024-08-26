import React from "react";

const Cards = () => {
  return (
    <section className="bg-blue-300 min-h-screen py-[140px] px-[15px]">
      <div className="flex flex-col gap-[100px]">
        <div className="rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[3.00023deg]">
          <img src="/assets/card1.webp" alt="card" />
        </div>
        <div className="rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[-4deg]">
          <img src="/assets/card2.webp" alt="card" />
        </div>
        <div className="rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[2deg]">
          <img src="/assets/card3.webp" alt="card" />
        </div>
        <div className="rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[-2deg]">
          <img src="/assets/card4.webp" alt="card" />
        </div>
        <div className="rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[3deg]">
          <img src="/assets/card5.webp" alt="card" />
        </div>
        <div className="rounded-[1.389vw] w-[55.139vw] h-[22.153vw] mx-auto rotate-[-3deg]">
          <img src="/assets/card6.webp" alt="card" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
