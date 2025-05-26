import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black md:bg-[url('/offerBg.png')] bg-cover bg-center h-screen md:h-[70vh] flex flex-col md:flex-row md:justify-between">
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6 bg-black bg-opacity-70 md:bg-transparent">
        <h1 className="text-5xl font-bold text-white p-4 xl:text-6xl text-center md:text-left">
          Delicious Burgers and French Fries
        </h1>
        <p className="text-white p-4 xl:text-xl text-center md:text-left">
          Progressively simplify effective e-tailers and process-centric methods
          of empowerment. Quickly pontificate in parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white py-3 px-6 rounded-md cursor-pointer">
          Order Now
        </button>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Burger and Fries"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
