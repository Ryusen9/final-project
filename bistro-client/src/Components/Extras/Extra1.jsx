import React from "react";
import bg from "../../../public/assets/home/chef-service.jpg";
const Extra1 = () => {
  return (
    <div
      className="h-[60vh] my-5 w-full bg-contain bg-center bg-no-repeat flex items-center justify-center"
      style={{ background: `url(${bg})` }}
    >
      <div className="bg-white flex items-center justify-center flex-col w-[60%] mx-auto text-black p-7 text-center">
        <p className="text-xl lg:text-2xl font-Cinzel">Bistro Boss</p>
        <p className="text-xs lg:text-base w-[90%] font-Inter lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Extra1;
