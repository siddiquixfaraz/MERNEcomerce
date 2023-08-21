import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct/SingleProduct";
import Header from "./components/layouts/Header.jsx/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleproduct" element={<SingleProduct/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
