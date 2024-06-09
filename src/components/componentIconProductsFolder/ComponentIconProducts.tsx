import React, { useState } from "react";
import "./ComponentIconsProductsCss.css"
import img from "./Captura de tela 2024-06-05 202053.png"

export const ComponentIconProducts = () => {
    const [ hoverActive, setHoverActive] = useState(false);

    const handleMouseEnter = () => {
        try{
            setTimeout(() => {
                setHoverActive(true);
            }, 1000);
        }catch{
            setHoverActive(false)
        }
        
    };

    const handleMouseLeave = () => {
        setHoverActive(false);
    };

    return (
        <>
            <div className="card mb-3" style={{ width:"calc( 70% / 4)" }}>
                <div className="row g-0" id="CInconProducts-container">
                    <div 
                        className="col-md-4" 
                        id="CInconProducts-containerImg"
                    >
                        <img 
                            src={img} 
                            className={`img-fluid rounded-start ${hoverActive ? "CInconProducts-imgHovered" : "CInconProducts-img"}`}
                            alt="..."
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} 
                        />
                    </div>
                    <div className="col-md-8" id="CInconProducts-containerText">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">lorem lorem lorem lorem</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
