import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Signup from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component = {Landing} />
      <Route exact path="/profile/:id" component = {Profile} />
      <Route exact path="/buy" component = {Buy} />
      <Route exact path="/sell" component = {Sell} />
      <Route exact path="/signup" component = {Signup} />
      <Route exact path="/login" component = {Login} />
      {/* include route with Id for specific item detail page */}
    </Router>
  );
}

export default App;