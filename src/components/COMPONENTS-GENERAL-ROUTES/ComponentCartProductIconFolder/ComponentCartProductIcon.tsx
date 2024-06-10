import React from "react";
import "./ComponentCartProductIconCss.css";
import img from "./Captura de tela 2024-06-05 202053.png";

interface ComponentCartProductIconProps {
    id: number;
    name: string;
    price: number;
}

export const ComponentCartProductIcon = (props: ComponentCartProductIconProps) => {
    const dbString = localStorage.getItem("DB-Cart");
    const dbItems = dbString ? JSON.parse(dbString) : [];
    const componentId = props.id;

    const deleteItemFromCart = () => {
        const updatedItems = dbItems.filter((item: any) => item.id !== componentId);
        localStorage.setItem("DB-Cart", JSON.stringify(updatedItems));
        // Se precisar, você pode adicionar uma função de callback para atualizar o estado no componente pai.
    };

    return (
        <main id={`CCartproductIcon-mainContainer-${componentId}`}>
            <div style={{display:"flex", justifyContent:"espace-between", alignItems:"center"}}>
                <h3>{props.name}</h3>
                <button onClick={deleteItemFromCart} className="btn-close" aria-label="close"></button>
            </div>
            <div>
                <img src={img} alt={props.name} />
                <h2>{`R$ ${props.price},00`}</h2>
            </div>
        </main>
    );
};
