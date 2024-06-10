import React, { useState } from "react";
import "./ComponentPrincipalChekoutPageCss.css";
import { ComponentDisplayCart } from "../../COMPONENTS-GENERAL-ROUTES/ComponentDisplayCartFolder/ComponentDisplayCart";

export const ComponentPrincipalChekoutPage = () => {
    const [fullName, setFullName] = useState("");
    const [cpf, setCpf] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");

    const handlePurchase = () => {
        alert("SUCESSO!");
        setFullName("");
        setCpf("");
        setCreditCardNumber("");
        setSecurityNumber("");
        document.getElementById("CPrincipalChekoutPage-ContainerComponentDisplayCart")!.innerHTML = "";
    };

    return (
        <main id="CPrincipalChekoutPage-mainContainer">
            <div id="CPrincipalChekoutPage-containerForms">
                <div id="CPrincipalChekoutPage-ContainerComponentDisplayCart">
                    <div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingInputFullName" 
                                placeholder="Nome Completo" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <label htmlFor="floatingInputFullName">Nome Completo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingInputCpf" 
                                placeholder="Numero de CPF" 
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                            <label htmlFor="floatingInputCpf">Numero de CPF</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingInputCreditCardNumber" 
                                placeholder="Numero de crédito" 
                                value={creditCardNumber}
                                onChange={(e) => setCreditCardNumber(e.target.value)}
                            />
                            <label htmlFor="floatingInputCreditCardNumber">Numero de crédito</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingInputSecurityNumber" 
                                placeholder="Numero de segurança cartão" 
                                value={securityNumber}
                                onChange={(e) => setSecurityNumber(e.target.value)}
                            />
                            <label htmlFor="floatingInputSecurityNumber">Numero de segurança cartão</label>
                        </div>
                        <button className="btn btn-success" onClick={handlePurchase}>COMPRAR</button>
                    </div>
                    <ComponentDisplayCart showLink={false} />
                </div>
            </div>
        </main>
    );
};
