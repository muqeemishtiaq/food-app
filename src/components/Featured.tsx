import Image from "next/image";
import React from "react";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden text-red-500 scroll-smooth [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4 px-4 w-max">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-[100vw] md:w-[50vw] xl:w-[33.3333vw] h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 bg-white rounded-md"
          >
            {item.img && (
              <div className="relative w-full h-1/2 hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p className="p-4">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
