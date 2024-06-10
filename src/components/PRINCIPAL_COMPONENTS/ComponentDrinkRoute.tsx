import React from "react";
import { ComponentNavBar } from "../COMPONENTS-PRIMARY-ROUTE/componentNavBarFolder/ComponentNavBar";
import { ComponentShowitensDrinks } from "../COMPONENTS-DRINK-PAGE/ComponentShowItensDrinksFolder/ComponentShowItensDrinks";

export const ComponentDrinkRoute = () => {
    return(
        <body>
            <header>
                <ComponentNavBar />
            </header>
            <main>
                <ComponentShowitensDrinks />
            </main>
        </body>
    )
}