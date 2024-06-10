import React from 'react';
import { ComponentFormsAddItem } from '../COMPONENTS-ADMIN-ROUTE/ComponentFormsAddItemFolder/ComponentFormsAddItem';
import { ComponentItensDisplayOnBuyPage } from '../COMPONENTS-ADMIN-ROUTE/ComponentItensDisplayOnBuyPageFolder/ComponentItensDisplayOnBuyPage';

export const ComponentAdminRoute = () => {
    return (
        <>
            <body>
                <header>

                </header>
                <main>
                    <ComponentFormsAddItem />
                    <ComponentItensDisplayOnBuyPage displayOnBuyPageType="drinks"/>
                    <ComponentItensDisplayOnBuyPage displayOnBuyPageType="cleaner"/>
                    <ComponentItensDisplayOnBuyPage displayOnBuyPageType="meats"/>
                    <ComponentItensDisplayOnBuyPage displayOnBuyPageType="fruits"/>
                </main>
            </body>
        </>
    );
}
