import React from "react";
import "./ComponentSingleItemCss.css";
import img from "./Captura de tela 2024-06-05 202053.png";

interface ComponentItemDisplayProps {
    id: string;
    classType: string;
    name: string;
    description: string;
    price: number;
}

export const ComponentItemDisplay: React.FC<ComponentItemDisplayProps> = (props) => {
    const CItemDisplayID = props.id;

    const dbString = localStorage.getItem(props.classType);
    const dbItems = dbString ? JSON.parse(dbString) : [];

    const deleteItem = () => {
        if (dbItems) {
            const updatedItems = dbItems.filter((item: any) => item.id !== CItemDisplayID);
            localStorage.setItem(props.classType, JSON.stringify(updatedItems));
            window.dispatchEvent(new Event('storage'));
        }
    };

    return (
        <div id="CItemDisplay-mainContainer">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="Item" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{`ID: ${props.id}`}</p>
                    <div id="CItemDisplay-containerButtonsBuy">
                        <a href="#" className="btn btn-primary">Adicionar ao Carrinho</a>
                        <h5>{`R$ ${props.price}`}</h5>
                    </div>
                    <button onClick={deleteItem} style={{ marginTop: "10px" }} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};
