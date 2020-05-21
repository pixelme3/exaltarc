import React from 'react';
import './Landing.css';
import desktopIcon from './logo-icon-desktop.png';
import exaltText from './exalt-text.png';
import landingPattern from './landing-pattern.png';
import logoTablet from './logo-full-tablet.png';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Landing extends React.Component {
  render() {
    return(
      <div className="page">
        <div className="background">
          <div className="title-background">
            <img src={ landingPattern } alt="title section pattern"/>
          </div>
          <div className="nav-background">
            <img src={ landingPattern } alt="navigation section pattern"/>
          </div>
          <img className="desktop-icon" src={ desktopIcon } alt="logo icon"/>
        </div>

        <div className="foreground">
          <div className="title-container">
            <div className="content">
              <img className="title-image" src={ exaltText } alt="title text"/>
              <img className="logo-tablet" src={ logoTablet } alt="logo for tablet"/>
            </div>
          </div>
          <Router basename="/">
            <div className="nav-container">
              <nav>
                <Link to="./designs">designs</Link>
                <Link to="./applications">applications</Link>
                <Link to="./contact">contact</Link>
              </nav>
            </div>
          </Router>
        </div>

      </div>
    );
  }
}

export default Landing;
