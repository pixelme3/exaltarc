import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Blog from './Blog.js';
import Landing from './Landing.js';
import Gallery from './Gallery.js';
import Showcase from './Showcase.js';

function App() {
  return (
      <div>
        <Switch>
          <Route path='/applications/blog' component={ Blog } />
          <Route path='/designs' component={ Gallery } />
          <Route path='/applications' component={ Showcase }/>
          <Route exact path='/' component={ Landing }/>
        </Switch>
      </div>
  );
}

export default App;
