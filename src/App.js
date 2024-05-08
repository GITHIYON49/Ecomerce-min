import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewCart, Home } from "./pages";
import { ProductData } from "./data/ProductData";
import { Navbar } from "./components";
import { ProductContext } from "./globalState/ProductCntx";
import "./App.css";

function App() {
  const [product, setProduct] = useState(ProductData);
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value={{ product, setProduct, cart, setCart }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
