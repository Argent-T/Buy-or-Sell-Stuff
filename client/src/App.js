import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login/LoginForm';
import Signup from './components/Signup/index';

// import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import passport from './components/passport';

function App() {
  return (
    <Router>
      <Route exact path="/" component = {passport} />
      <Route exact path="/" component = {Landing} />
      <Route exact path="/profile/:id" component = {Profile} />
      <Route exact path="/buy" component = {Buy} />
      <Route exact path="/sell" component = {Sell} />
      <Route exact path="/login" component = {Login} />
      <Route exact path="/signup" component = {Signup} />

      {/* include route with Id for specific item detail page */}
      <Footer />
    </Router>
    
  );
}

export default App;