import React from "react";
import { LiaFacebook, LiaInstagram, LiaTwitter } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-3 bg-base-300 lg:grid-cols-2 font-Inter">
      <div className="w-full flex flex-col text-center items-center justify-center">
        <p className="uppercase text-xl lg:text-2xl my-4">contact us</p>
        <p className="flex flex-col justify-center items-center text-center text-xs lg:text-sm">
          <span>123 ABS Street, Uni 21, Bangladesh</span>
          <span>+88 123456789</span>
          <span>Mon - Fri: 08:00 - 22:00</span>
          <span>Sat - Sun: 10:00 - 23:00</span>
        </p>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <p className="uppercase text-xl lg:text-2xl my-4">Follow us</p>
        <p className="mb-4">Join us on social media</p>
        <div className="flex items-center justify-center gap-3">
          <button className="text-3xl">
            <LiaFacebook />
          </button>
          <button className="text-3xl">
            <LiaInstagram />
          </button>
          <button className="text-3xl">
            <LiaTwitter />
          </button>
        </div>
      </div>
      <div className="lg:col-span-2 w-full flex items-center justify-center">
        <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
