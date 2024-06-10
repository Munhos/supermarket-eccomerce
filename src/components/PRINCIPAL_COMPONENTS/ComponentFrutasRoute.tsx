import React from "react";
import { ComponentNavBar } from "../COMPONENTS-PRIMARY-ROUTE/componentNavBarFolder/ComponentNavBar";
import { ComponentShowitensFrutas } from "../COMPONENTS-FRUTAS-PAGE/ComponentShowItensFrutasFolder/ComponentShowItensFrutas";

export const ComponentFrutasRoute = () => {
    return(
        <body>
            <header>
                <ComponentNavBar />
            </header>
            <main>
                <ComponentShowitensFrutas />
            </main>
        </body>
    )
}