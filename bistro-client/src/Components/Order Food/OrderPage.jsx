import React, { useState } from "react";
import FixedBg from "../Shared/FixedBg";
import shopBg from "../../../public/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useMenu from "../Hooks/useMenu";
const OrderPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const categoryBase = [salad, pizza, soup, dessert, drinks];
  return (
    <div className="min-h-screen">
      <div>
        <FixedBg
          bannerImage={shopBg}
          title={"our shop"}
          description={"Would you like to try a dish?"}
        />
      </div>
      {/* Tabs */}
      <div className="max-w-7xl mx-auto my-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            role="tablist"
            className={`flex items-center justify-center gap-3 tabs tabs-border`}
          >
            <Tab
              role="tab"
              className={`tab uppercase font-Inter font-semibold hover:text-amber-400 duration-200`}
            >
              salad
            </Tab>
            <Tab
              role="tab"
              className={`tab uppercase font-Inter font-semibold hover:text-amber-400 duration-200`}
            >
              pizza
            </Tab>
            <Tab
              role="tab"
              className={`tab uppercase font-Inter font-semibold hover:text-amber-400 duration-200`}
            >
              soups
            </Tab>
            <Tab
              role="tab"
              className={`tab uppercase font-Inter font-semibold hover:text-amber-400 duration-200`}
            >
              desserts
            </Tab>
            <Tab
              role="tab"
              className={`tab uppercase font-Inter font-semibold hover:text-amber-400 duration-200`}
            >
              drinks
            </Tab>
          </TabList>
          {categoryBase.map((categoryItems, idx) => (
            <TabPanel
              key={idx}
              className="max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              {categoryItems.map((item) => (
                <div
                  key={item._id}
                  className="rounded-2xl overflow-hidden border-2"
                >
                  <div
                    className="h-[25vh] bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="flex flex-col gap-4 p-7">
                    <div className="text-center flex flex-col gap-3">
                      <p className="text-lg lg:text-xl font-Cinzel font-bold uppercase">
                        {item.name}
                      </p>
                      <p className="text-xs lg:text-sm font-Inter">
                        {item.recipe}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:border-0 hover:bg-base-100 cursor-pointer hover:text-amber-500 transition-colors duration-200">
                        ADD TO cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}

          {/* <TabPanel
            className={`max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5`}
          >
            {salad.map((item) => {
              return (
                <div
                  className="rounded-2xl overflow-hidden border-2"
                  key={item._id}
                >
                  <div
                    className="h-[25vh] bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="flex flex-col gap-4 p-7">
                    <div className="text-center flex flex-col gap-3">
                      <p className="text-lg lg:text-xl font-Cinzel font-bold uppercase">
                        {item.name}
                      </p>
                      <p className="text-xs lg:text-sm font-Inter">
                        {item.recipe}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <button className="uppercase border-b-2 py-3 px-6 hover:rounded-xl rounded-b-xl hover:rounded-b-xl hover:border-0 hover:bg-base-100 cursor-pointer hover:text-amber-500 transition-colors duration-200">
                        ADD TO cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </TabPanel> */}
        </Tabs>
      </div>
    </div>
  );
};

export default OrderPage;
