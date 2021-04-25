import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import PostsList from './components/PostsList.js'


function App() {
  return (
    <Router>
    <Navbar />
    <Route path="/" exact component={PostsList} />
    </Router>
    
  );
}

export default App;
