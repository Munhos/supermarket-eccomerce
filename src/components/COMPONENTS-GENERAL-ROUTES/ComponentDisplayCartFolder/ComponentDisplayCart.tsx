import React, { useEffect, useState } from "react";
import "./ComponentDisplayCartCss.css";
import { ComponentCartProductIcon } from "../ComponentCartProductIconFolder/ComponentCartProductIcon";
import { Link } from "react-router-dom";

interface ComponentDisplayCartProps {
    showLink: boolean;
}

export const ComponentDisplayCart: React.FC<ComponentDisplayCartProps> = (props) => {
    const dbString = localStorage.getItem("DB-Cart");
    const dbItems = dbString ? JSON.parse(dbString) : [];

    const [CDisplayCartProductsInData, setCDisplayCartProductsInData] = useState([]);

    useEffect(() => {
        const cartProducts = dbItems.map((e: any) => (
            <ComponentCartProductIcon key={e.id} id={e.id} name={e.name} price={e.price} />
        ));
        setCDisplayCartProductsInData(cartProducts);
    }, [dbItems]);

    return (
        <main id="CDisplayCartMainContainer" className="CDisplayCart-ocultComponent">
            <div id="CDisplayCart-containerTitle">
                <h3>Seus produtos:</h3>
                <Link style={props.showLink ? {} : { display: "none" }} to={"/checkout"} className="btn btn-success">Comprar</Link>
            </div>
            <hr />
            <div id="CDisplayCartItensContainer">
                {CDisplayCartProductsInData}
            </div>
        </main>
    );
};
