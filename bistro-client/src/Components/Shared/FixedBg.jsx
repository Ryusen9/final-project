import React from "react";
import PropTypes from "prop-types";

const FixedBg = ({ bannerImage, title, description }) => {
  return (
    <div
      className="flex h-[55vh] flex-col p-5 items-center text-center justify-center bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex flex-col p-16 justify-center items-center max-w-4xl text-center gap-4 bg-base-300/60">
        <p className="uppercase lg:text-3xl font-Cinzel font-bold">{title}</p>
        <p className="uppercase text-xs lg:text-base w-[70%]">{description}</p>
      </div>
    </div>
  );
};

FixedBg.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FixedBg;
