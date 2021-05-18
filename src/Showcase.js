import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";

import './Showcase.css';
import Blog from './Blog.js';
import Header from './Header.js';

import desktopIcon from './logo-icon-desktop.png';

class Showcase extends Component {

  render(){
    return(
      <div className="showcase page">
        <div className="background">
          <div className="light-half"></div>
          <div className="dark-half"></div>
          <Header />
          <img className="desktop-icon" src={ desktopIcon } alt="logo icon"/>
        </div>
        <div className="foreground">
          <nav>
            <Link to="./applications/blog">Blog</Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Showcase;
