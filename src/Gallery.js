import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Gallery.css';
import Header from './Header.js';

import desktopIcon from './logo-icon-desktop.png';

class Gallery extends Component {

  render(){
    return(
      <div className="gallery page">
        <div className="background">
          <div className="light-half"></div>
          <div className="dark-half"></div>
          <Header />
          <img className="desktop-icon" src={ desktopIcon } alt="logo icon"/>
        </div>

        <div className="content">
          <div className="first-container">
            <div className="slideshow">

            </div>
          </div>

          <div className="second-container">
            <div className="slideshow">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
