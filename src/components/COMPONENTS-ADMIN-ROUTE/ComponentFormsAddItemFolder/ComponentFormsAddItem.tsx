import React, { useEffect } from "react";

import { ComponentAddItensByUser } from "../ComponentAddUserFolder/ComponentAddItensByUser";

export const ComponentFormsAddItem = () => {
    useEffect(() => {
        const toastTrigger = document.getElementById('liveToastBtn');
        const toastLiveExample = document.getElementById('liveToast');

        if (toastTrigger && toastLiveExample) {
            // @ts-ignore
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastTrigger.addEventListener('click', () => {
                toastBootstrap.show();
            });
        }
    }, []);

    return (
        <>
            <main id="CFormsAddItem-mainContainer">
                
                <ComponentAddItensByUser />

            </main>
        </>
    );
};
