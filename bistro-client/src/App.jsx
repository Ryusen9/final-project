import React from "react";
import Nav from "./Components/Navbar/Nav";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
