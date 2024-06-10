import React from 'react';
import backgroundImage from './backgroundImage.png';
import logoImage from './logoImage.png'
import "./ComponentBackgroundImageCss.css"

export const ComponentBackgroundImage = () => {
  return (
    <div id='CBackgroundImage-mainContainer' className='d-flex position-relative justify-content-center' style={{height: '800px', width: '100vw'}}>
      <img style={{width:"300px"}} className='position-absolute' src={logoImage} alt="logoImage" />
      <img className='img-fluid' src={backgroundImage} alt="backgroundImage" />
    </div>
  );
};
