import React from "react";
import "./ComponentPrincipalLoginPageCss.css";
import { useNavigate } from "react-router-dom";

export const ComponentPrincipalLoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        const floatingInputElement = document.getElementById("floatingInput") as HTMLInputElement | null;
        const floatingPasswordElement = document.getElementById("floatingPassword") as HTMLInputElement | null;

        if (floatingInputElement && floatingPasswordElement) {
            const floatingInput = floatingInputElement.value;
            const floatingPassword = floatingPasswordElement.value;

            if (floatingInput === "admin" && floatingPassword === "admin") {
                navigate("/admin");
            } else {
                alert("Usuário ou senha inválido");
            }
        }
    };

    return (
        <>
            <main id="CPrincipalLoginPage-mainContainer">
                <div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                </div>
            </main>
        </>
    );
};
