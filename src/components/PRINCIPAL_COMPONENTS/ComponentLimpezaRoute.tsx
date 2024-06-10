import React from "react";
import { ComponentNavBar } from "../COMPONENTS-PRIMARY-ROUTE/componentNavBarFolder/ComponentNavBar";
import { ComponentShowitensLimpeza } from "../COMPONENTS-LIPEZA-PAGE/ComponentsShowItensLimpezaFolder/ComponentsShowItensLimpeza";

export const ComponentLimpezaRoute = () => {
    return(
        <body>
            <header>
                <ComponentNavBar />
            </header>
            <main>
                <ComponentShowitensLimpeza />
            </main>
        </body>
    )
}