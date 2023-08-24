import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import View from "../components/View";
import ViewOfertas from "../components/ViewOfertas";
import Bebidas from "../Pages/Bebidas";
import Cervezas from "../Pages/Cervezas";
import Home from "../Pages/Home";
import Licores from "../Pages/Licores";
import Ofertas from "../Pages/Ofertas";


const Router = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/ofertas" element={<Ofertas/>} />
            <Route path="/licores" element={<Licores/>} />
            <Route path="/cervezas" element={<Cervezas/>} />
            <Route path="/bebidas" element={<Bebidas/>} />
            <Route path="/ofertas/:id" element={<ViewOfertas/>} />
            <Route path="/:tipo/:id" element={<View/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
