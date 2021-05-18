import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Landing from './Landing.js';
import Gallery from './Gallery.js';
import Showcase from './Showcase.js';
import './Header.css';

import logoBlack from './exalt-logo-black-icon-small.png'
import logoWhite from './exalt-logo-white-icon-small.png';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="menu top">
          <nav className="left half">
            <Link className="image-link" to="./">
              <img className="logo nav" src={ logoBlack } alt="logo black small" />
            </Link>
            <Link className="home text-link" to="./">home</Link>
            <Link className="designs text-link" to="./designs">designs</Link>
          </nav>
          <nav className="right half">
            <Link className="applications text-link" to="./applications">applications</Link>
            <Link className="contact text-link" to="./contact">contact</Link>
          </nav>
        </div>
      </div>
    );
  }

}

export default Header;
