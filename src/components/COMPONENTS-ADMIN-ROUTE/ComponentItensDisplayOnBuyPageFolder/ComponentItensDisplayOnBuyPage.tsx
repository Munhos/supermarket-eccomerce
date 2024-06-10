import React, { useState, useEffect } from "react";
import { ComponentItemDisplay } from "../ComponentSingleItemFolder/ComponentSingleItem"; // Ajuste o caminho conforme necessário
import "./ComponentItensDisplayOnBuyPageCss.css";
import { Utils } from "../mainClassArquive";

interface ComponentItensDisplayOnBuyPageProps {
    displayOnBuyPageType: string;
}

export const ComponentItensDisplayOnBuyPage: React.FC<ComponentItensDisplayOnBuyPageProps> = (props) => {
    const [displayItems, setDisplayItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const utils = new Utils();
        const updateItems = () => {
            const items = utils.updateScreen(props.displayOnBuyPageType);
            setDisplayItems(items);
        };

        updateItems(); // Initial load

        window.addEventListener('storage', updateItems);

        return () => {
            window.removeEventListener('storage', updateItems);
        };
    }, [props.displayOnBuyPageType]);

    return (
        <main id="CItensDisplayOnBuyPage-mainContainer">
            {displayItems}
        </main>
    );
};