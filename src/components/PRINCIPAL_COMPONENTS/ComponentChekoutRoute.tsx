import React from "react";
import { ComponentNavBar } from "../COMPONENTS-PRIMARY-ROUTE/componentNavBarFolder/ComponentNavBar";
import { ComponentPrincipalChekoutPage } from "../COMPONENTS-CHEKOUT-PAGE/ComponentPrincipalChekoutPageFolder/ComponentPrincipalChekoutPage";

export const ComponentChekoutRoute = () => {
    return (
        <>
            <header>
                <ComponentNavBar />
            </header>
            <main>
                <ComponentPrincipalChekoutPage />
            </main>
        </>
    )
}