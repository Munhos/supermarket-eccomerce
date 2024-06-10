import React, {useEffect, useState} from "react";
import "./ComponentShowItensCarnesCss.css"
import { ComponentGeneralIcon } from "../../COMPONENTS-GENERAL-ROUTES/ComponentGeneralIconFolder/ComponentGeneralIcon";

export const ComponentShowitensCarnes = () => {
    const [displayItems, setDisplayItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const itens = localStorage.getItem("DB-Meats");

        if (itens) {
            const parsedItens = JSON.parse(itens);
            const elements = Object.values(parsedItens).map((item: any, index: number) => (
                <ComponentGeneralIcon
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ));
            setDisplayItems(elements);
        }
    }, []);

    return (
        <>
            <main id="CShowItensCarnes-mainContainer">
                <div>
                    {displayItems}
                </div>
            </main>
        </>
    );
}