import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ComponentAddItensByUserCss.css"; 

export const ComponentAddItensByUser = () => {
    const [CAddUserInputProductId, SetCAddUserInputProductId] = useState<number>(0);
    const [CAddUserInputProductName, SetCAddUserInputProductName] = useState<string>("");
    const [CAddUserInputProductPrice, SetCAddUserInputProductPrice] = useState<number>(0);
    const [CAddUserInputProductDescription, SetCAddUserInputProductDescription] = useState<string>("");

    useEffect(() => {
        const toastTrigger = document.getElementById('liveToastBtn');
        const toastLiveExample = document.getElementById('liveToast');

        if (toastTrigger && toastLiveExample) {
            // @ts-ignore
            const toastBootstrap = window.bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastTrigger.addEventListener('click', () => {
                toastBootstrap.show();
            });
        }
    }, []);

    const passToJsonFormat = (idInput: number, nameInput: string, priceInput: number, descriptionInput: string) => {
        return {
            id: idInput,
            name: nameInput,
            price: priceInput,
            description: descriptionInput
        };
    };

    type jsonInfoFileFormat = {
        id: number;
        name: string;
        price: number;
        description: string;
    };

    const addToLocalStorage = (jsonInfoFile: jsonInfoFileFormat, filterLocalStorage: string) => {
        let registeredItems = JSON.parse(localStorage.getItem(filterLocalStorage) || "[]");

        if (!Array.isArray(registeredItems)) {
            registeredItems = [];
        }

        let item = {
            id: jsonInfoFile.id,
            name: jsonInfoFile.name,
            price: jsonInfoFile.price,
            description: jsonInfoFile.description
        };
        registeredItems.push(item);

        localStorage.setItem(filterLocalStorage, JSON.stringify(registeredItems));
    };

    const handleSave = () => {
        const CAddUserMainContainerFormSelect = document.getElementById("CAddUser-mainContainerFormSelect") as HTMLSelectElement;

        const jsonData = passToJsonFormat(
            CAddUserInputProductId,
            CAddUserInputProductName,
            CAddUserInputProductPrice,
            CAddUserInputProductDescription
        );

        if (CAddUserMainContainerFormSelect.value === "CAddUser-drinksFilter") {
            addToLocalStorage(jsonData, "DB-Drinks");
        }

        if (CAddUserMainContainerFormSelect.value === "CAddUser-fruitsFilter") {
            addToLocalStorage(jsonData, "DB-Fruits");
        }

        if (CAddUserMainContainerFormSelect.value === "CAddUser-meatFilter") {
            addToLocalStorage(jsonData, "DB-Meats");
        }

        if (CAddUserMainContainerFormSelect.value === "CAddUser-cleanFilter") {
            addToLocalStorage(jsonData, "DB-Cleaner");
        }

        SetCAddUserInputProductId(0);
        SetCAddUserInputProductName("");
        SetCAddUserInputProductPrice(0);
        SetCAddUserInputProductDescription("");
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Adicionar Produtos
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Preencha as informações do produto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="CAddUser-inputProductId" className="form-label">ID do produto</label>
                                <input type="text" value={CAddUserInputProductId} className="form-control" id="CAddUser-inputProductId" placeholder="01"
                                    onChange={(e) => {
                                        SetCAddUserInputProductId(parseInt(e.target.value, 10));
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="CAddUser-inputProductName" className="form-label">Nome do produto</label>
                                <input type="text" value={CAddUserInputProductName} className="form-control" id="CAddUser-inputProductName" placeholder="Pão melão"
                                    onChange={(e) => {
                                        SetCAddUserInputProductName(e.target.value);
                                    }} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input type="text" value={CAddUserInputProductPrice} className="form-control" aria-label="Amount (to the nearest dollar)" id="CAddUser-inputProductPrice" placeholder="00,00"
                                    onChange={(e) => {
                                        SetCAddUserInputProductPrice(parseFloat(e.target.value));
                                    }} />
                            </div>
                            <select className="form-select" id="CAddUser-mainContainerFormSelect" aria-label="Default select example">
                                <option value="" selected>Selecione a classe de item</option>
                                <option value="CAddUser-drinksFilter">Bebidas</option>
                                <option value="CAddUser-fruitsFilter">Frutas</option>
                                <option value="CAddUser-meatFilter">Carnes</option>
                                <option value="CAddUser-cleanFilter">Limpeza</option>
                            </select>
                            <div className="mb-3">
                                <label htmlFor="CAddUser-inputProductDescription" className="form-label">Descrição</label>
                                <textarea value={CAddUserInputProductDescription} className="form-control" id="CAddUser-inputProductDescription" rows={3}
                                    onChange={(e) => {
                                        SetCAddUserInputProductDescription(e.target.value);
                                    }}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                id="liveToastBtn"
                                onClick={() => {
                                    if (CAddUserInputProductId === 0 || CAddUserInputProductName === "" || CAddUserInputProductPrice === 0 || CAddUserInputProductDescription === "") {
                                        const CAddUserSucessText = document.getElementById("CAddUser-sucessText");
                                        if (CAddUserSucessText) {
                                            CAddUserSucessText.innerText = "Preencha todos os campos!";
                                        }
                                    } else {
                                        handleSave();
                                        const CAddUserSucessText = document.getElementById("CAddUser-sucessText");
                                        if (CAddUserSucessText) {
                                            CAddUserSucessText.innerText = "Item adicionado com sucesso!";
                                        }
                                    }
                                }}
                                
                            >
                                Salvar
                            </button>
                            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div className="toast-header">
                                        <i className="bi bi-cloud-arrow-up-fill"></i>
                                        <strong className="me-auto">Atualização do sistema</strong>
                                        <small>Agora</small>
                                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div id="CAddUser-sucessText" className="toast-body">
                                        Item adicionado com sucesso
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
