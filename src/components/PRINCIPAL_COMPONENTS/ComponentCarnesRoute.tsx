import React from "react";
import { ComponentNavBar } from "../COMPONENTS-PRIMARY-ROUTE/componentNavBarFolder/ComponentNavBar";
import { ComponentShowitensCarnes } from "../COMPONENTS-CARNES-PAGE/ComponentShowItensCarnesFolder/ComponentShowItensCarnes";

export const ComponentCarnesRoute = () => {
    return(
        <body>
            <header>
                <ComponentNavBar />
            </header>
            <main>
                <ComponentShowitensCarnes />
            </main>
        </body>
    )
}