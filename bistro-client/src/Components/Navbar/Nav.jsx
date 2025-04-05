import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Nav = () => {
  const navLinks = ["Home", "Contact us", "Dashboard", "Our menu", "Our shop"];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full flex items-center justify-center bg-base-100/80 z-50 p-2.5 fixed top-0 left-0">
        <div className="max-w-7xl w-full h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex text-center items-center justify-center flex-col">
            <img
              src="../../../public/assets/logo.png"
              alt="logo"
              className="w-10"
            />
            <p className="font-Cinzel text-sm">Bistro Boss</p>
          </div>
          {/* Navigation links */}
          <div className="flex gap-3 items-center justify-between">
            <div className="hidden lg:block">
              <ul className="uppercase flex items-center justify-center gap-5">
                {navLinks.map((link, index) => {
                  return (
                    <li
                      className="font-Inter cursor-pointer font-semibold text-sm"
                      key={index}
                    >
                      <Link>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="btn btn-outline btn-primary btn-sm relative">
              <IoCartOutline className="text-xl" />
              <div className="absolute top-[-5px] right-[-9px] flex items-center justify-center w-[17px] bg-red-500 text-white rounded-full text-xs">
                1
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="btn btn-outline btn-primary">Log in</button>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <IoClose className="text-2xl hidden" />
                ) : (
                  <LuMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <aside>
          <div className="w-full min-h-screen fixed top-0 left-0 bg-black opacity-90 z-50">
            <div className="w-full p-7 flex items-center justify-end">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            <div>
              <ul className="uppercase flex flex-col gap-5">
                {navLinks.map((link, index) => {
                  return (
                    <li
                      className="font-Inter p-5 border-b-2 border-t-2 hover:bg-white hover:text-black duration-500 cursor-pointer font-semibold text-sm"
                      key={index}
                    >
                      <Link>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Nav;
