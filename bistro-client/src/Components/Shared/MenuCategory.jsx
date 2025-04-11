import React from "react";
import useMenu from "../Hooks/useMenu";
import PropTypes from 'prop-types'

const MenuCategory = ({ menuCategory }) => {
  const [menu] = useMenu();
  const category = menu.filter((item) => item.category === menuCategory);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {category.map((item) => {
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
  );
};

MenuCategory.propTypes = {
  menuCategory: PropTypes.string.isRequired,
}

export default MenuCategory;
