import React, { useState } from "react";
import "./ComponentNavBarCss.css";
import { ComponentDisplayCart } from "../../COMPONENTS-GENERAL-ROUTES/ComponentDisplayCartFolder/ComponentDisplayCart";
import { Link } from "react-router-dom";

export const ComponentNavBar = () => {
  const [showDisplayCart, setShowDisplayCart] = useState(false);

  return (
    <nav id="CNavBar-MainContainer" className="nav d-flex align-items-center justify-content-between">
      <ul className="d-flex m-0 p-0">
        <Link className="nav-item m-2" to={"/"}>
          <a href="/" className="text-white text-decoration-none">Início</a>
        </Link>
        <Link className="nav-item m-2" to={"/bebidas"}>
          <a href="/" className="text-white text-decoration-none">Bebidas</a>
        </Link>
        <Link className="nav-item m-2" to={"/carnes"}>
          <a href="/" className="text-white text-decoration-none">Carnes</a>
        </Link>
        <Link className="nav-item m-2" to={"/frutas"}>
          <a href="/" className="text-white text-decoration-none">Frutas</a>
        </Link>
        <Link className="nav-item m-2" to={"/limpeza"}>
          <a href="/" className="text-white text-decoration-none">Limpeza</a>
        </Link>
      </ul>
      <div className="d-flex align-items-center">
        <div className="input-group m-1">
          <input id="CNavBar-SearchBar" type="text" className="form-control" placeholder="Faça sua pesquisa..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-light" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
        </div>
        <button onClick={() => setShowDisplayCart(!showDisplayCart)} className="m-1 btn btn-outline-light"><i className="w-auto bi bi-cart-check"></i></button>
        <button className="m-1 btn btn-outline-light"><i className="w-auto bi bi-person-circle"></i></button>
      </div>
      <div style={showDisplayCart ? {right:"0", top:"60px"} : {right:"-500px", top:"60px"}} id="CNavBar-containerDisplayCart">
        <ComponentDisplayCart showLink={true}/>
      </div>
    </nav>
  );
};
