import React from "react";
import img from "./Captura de tela 2024-06-05 202053.png";

interface ComponentItemDisplayProps {
    id:number;
    name: string;
    description: string;
    price: number;
}

type jsonInfoFileFormat = {
    id: number;
    name: string;
    price: number;
};

let uniqueIdCounter = 0;

const generateUniqueId = () => {
    return Date.now() + uniqueIdCounter++;
};

export const ComponentGeneralIcon: React.FC<ComponentItemDisplayProps> = (props) => {
    const passToJsonFormat = (idInput:number, nameInput: string, priceInput: number) => {
        return {
            id: idInput,
            name: nameInput,
            price: priceInput,
        };
    };

    const addItemToCart = (jsonInfoFile: jsonInfoFileFormat) => {
        let item = {
            id:jsonInfoFile.id,
            name:jsonInfoFile.name,
            price:jsonInfoFile.price
        }

        let registeredItemsInCart = JSON.parse(localStorage.getItem("DB-Cart") || "[]");

        if (!Array.isArray(registeredItemsInCart)) {
            registeredItemsInCart = [];
        }

        registeredItemsInCart.push(item);

        localStorage.setItem("DB-Cart", JSON.stringify(registeredItemsInCart));
    }

    const saveDataInLocalStorage = () => {
        const uniqueId = generateUniqueId();
        const jsonData = passToJsonFormat(uniqueId, props.name, props.price);
        addItemToCart(jsonData);
        console.log("adicionado");
    }

    return (
        <div id="CItemDisplay-mainContainer">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="Item" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <div onClick={saveDataInLocalStorage} id="CItemDisplay-containerButtonsBuy">
                        <a href="#" className="btn btn-primary">Adicionar ao Carrinho</a>
                        <h5>{`R$ ${props.price}`}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
