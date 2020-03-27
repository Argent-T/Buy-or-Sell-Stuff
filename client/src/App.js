import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Detail from "./pages/Detail";
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
      <Route exact path="/" component = {Landing} />
      <Route exact path="/profile" component = {Profile} />
      <Route exact path="/buy" component = {Buy} />
      <Route exact path="/sell" component = {Sell} />
      <Route exact path="/signup" component = {Signup} />
      <Route exact path="/login" component = {Login} />
      <Route exact path="/listings/:id">
            <Detail />
      </Route>
      {/* include route with Id for specific item detail page */}
      <Footer />
    </Router>
    
  );
}

export default App;