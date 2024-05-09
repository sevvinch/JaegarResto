import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Sidebar from "./components/Sidebar"
import Cart from "./components/FoodSidebar"

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex  h-[100vh] overflow-hidden ">
      <Sidebar/>

      <div className="flex-[1]">
       <Home/>
      </div>
    <Cart />  
    </div>
      <div>
    </div>

    </BrowserRouter>
  );
};

export default App;
