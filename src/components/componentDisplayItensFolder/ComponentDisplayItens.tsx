import React from "react";
import "./componentDisplayItensCss.css";
import iconeBebidas from "../componentFastIconsInitialPageFolder/imgs/iconeBebidas.png";
import iconeFrutas from "../componentFastIconsInitialPageFolder/imgs/iconeFrutas.png";

interface ComponentDisplayItensProps {
    principalText: string;

}


export const ComponentDisplayItens = (props: any) => {
    return (
        <>
            <h3 className="h3-underline">{props.principalText}</h3>
            <div id="CDisplayIntens-carouselContainer" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div id="CDisplayIntens-internalContainerItens">
                            {props.product01}
                            {props.product01}
                            {props.product01}
                            {props.product01}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div id="CDisplayIntens-internalContainerItens">
                            {props.product01}
                            {props.product01}
                            {props.product01}
                            {props.product01}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div id="CDisplayIntens-internalContainerItens">
                            {props.product01}
                            {props.product01}
                            {props.product01}
                            {props.product01}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#CDisplayIntens-carouselContainer" data-bs-slide="prev">
                    <span style={{ backgroundColor: "black" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#CDisplayIntens-carouselContainer" data-bs-slide="next">
                    <span style={{ backgroundColor: "black" }} className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};
