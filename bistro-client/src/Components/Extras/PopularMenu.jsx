import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((response) => {
      const popularItems = response.data.filter(
        (item) => item.category === "popular"
      );
      setMenu(popularItems);
    });
  }, []);
  console.log(menu);
  return (
    <div className="flex flex-col mb-6 p-3 items-center justify-center">
      <div className="text-center mb-6">
        <p className="text-amber-300 mb-4 font-Inter font-semibold">
          ---Check it out---
        </p>
        <p className="border-t-2 border-b-2 text-center text-xl lg:text-4xl p-2 font-Cinzel font-semibold">
          From Our Menu
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {menu.map((item) => {
          const { image, _id, name, price, recipe } = item;
          return (
            <div
              key={_id}
              className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] lg:grid-cols-3 lg:grid-rows-none lg:flex lg:flex-col gap-x-4 gap-y-2 p-4 border rounded-lg cursor-pointer hover:bg-base-300 duration-300"
            >
              {/* Image */}
              <div className="row-span-1 row-start-1 col-start-1 lg:row-auto lg:col-auto place-content-start">
                <img
                  src={image}
                  alt={name}
                  className="rounded-r-full rounded-b-full w-24 h-24 object-cover"
                />
              </div>

              {/* Price */}
              <div className="col-start-3 row-start-1 self-start text-lg lg:row-auto lg:col-auto lg:mt-2 text-yellow-500 font-semibold">
                ${price}
              </div>

              {/* Description */}
              <div className="col-span-3 row-start-2 lg:row-auto lg:col-auto lg:max-w-xl">
                <p className="font-semibold">{name}</p>
                <p className="text-gray-500 text-sm">{recipe}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-300 cursor-pointer">view full menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;
