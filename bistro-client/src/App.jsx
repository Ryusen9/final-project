import React from "react";
import Nav from "./Components/Navbar/Nav";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
