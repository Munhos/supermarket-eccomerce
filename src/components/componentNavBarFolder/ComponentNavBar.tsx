import React from "react";
import "./ComponentNavBarCss.css";

export const ComponentNavBar = () => {
  return (
    <nav id="CNavBar-MainContainer" className="nav d-flex align-items-center justify-content-between">
      <ul className="d-flex m-0 p-0">
        <li className="nav-item m-2">
          <a href="/" className="text-white text-decoration-none">Início</a>
        </li>
        <li className="nav-item m-2">
          <a href="/" className="text-white text-decoration-none">Contato</a>
        </li>
        <li className="nav-item m-2">
          <a href="/" className="text-white text-decoration-none">Localização</a>
        </li>
        <li className="nav-item m-2">
          <a href="/" className="text-white text-decoration-none">Suporte</a>
        </li>
      </ul>
      <div className="d-flex align-items-center">
        <div className="input-group m-1">
          <input id="CNavBar-SearchBar" type="text" className="form-control" placeholder="Faça sua pesquisa..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-light" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
        </div>
        <button className="m-1 btn btn-outline-light"><i className="w-auto bi bi-cart-check"></i></button>
        <button className="m-1 btn btn-outline-light"><i className="w-auto bi bi-person-circle"></i></button>
      </div>
    </nav>
  );
};
