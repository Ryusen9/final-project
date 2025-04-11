import React from "react";
import { Helmet } from "react-helmet";
import heroBanner from "../../../public/assets/menu/banner3.jpg";
import FixedBg from "../Shared/FixedBg";
import MenuCategory from "../Shared/MenuCategory";
import dessertBanner from "../../../public/assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../../../public/assets/menu/pizza-bg.jpg";
import saladBanner from "../../../public/assets/menu/salad-bg.jpg";
import soupBanner from "../../../public/assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro | Our Menu</title>
        <meta
          name="description"
          content="Explore our delicious and freshly made dishes on the Bistro menu. Perfect for food lovers!"
        />
      </Helmet>
      <div className="min-h-screen max-w-7xl mx-auto">
        <div
          className="flex mb-5 h-[55vh] flex-col items-center text-center justify-center bg-center bg-no-repeat bg-cover bg-fixed"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="flex flex-col p-16 justify-center items-center text-center gap-4 bg-base-300/60 h-2/4 w-[60%]">
            <p className="uppercase lg:text-3xl font-Cinzel font-bold">
              Our Menu
            </p>
            <p className="uppercase text-wrap text-xs lg:text-base">
              would you like to try a dish?
            </p>
          </div>
        </div>
        <div className="my-4">
          <MenuCategory menuCategory={"popular"} />
        </div>
        <div className="my-5 flex items-center justify-center">
          <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-300 cursor-pointer">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <FixedBg
              bannerImage={dessertBanner}
              title={"DESSERTS"}
              description={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </div>
          <div className="my-4">
            <MenuCategory menuCategory={"dessert"} />
          </div>
          <div className="my-5 flex items-center justify-center">
            <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-300 cursor-pointer">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <FixedBg
              bannerImage={pizzaBanner}
              title={"PIZZA"}
              description={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </div>
          <div className="my-4">
            <MenuCategory menuCategory={"pizza"} />
          </div>
          <div className="my-5 flex items-center justify-center">
            <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-300 cursor-pointer">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <FixedBg
              bannerImage={saladBanner}
              title={"Salad"}
              description={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </div>
          <div className="my-4">
            <MenuCategory menuCategory={"salad"} />
          </div>
          <div className="my-5 flex items-center justify-center">
            <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-300 cursor-pointer">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <FixedBg
              bannerImage={soupBanner}
              title={"soup"}
              description={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </div>
          <div className="my-4">
            <MenuCategory menuCategory={"soup"} />
          </div>
          <div className="my-5 flex items-center justify-center">
            <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-300 cursor-pointer">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
