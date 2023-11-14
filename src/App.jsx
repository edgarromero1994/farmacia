import React from "react";
import { ItemList } from "./components/ItemList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Navbar } from "./components/NavBar";
import PiePagina from "./components/PiePagina";
import Historia from "./components/Historia";
import Vision from "./components/Vision";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/historia" element={<Historia/>} />
          <Route path="/vision" element={<Vision/>} />
        </Routes>
        <PiePagina/>
      </Router>
    </ShoppingCartProvider>
  );
};
