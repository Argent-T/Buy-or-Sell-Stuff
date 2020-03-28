import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Detail from "./pages/Detail";
// import Navbar from './components/Navbar';
import app from './components/app'
import Profile from './pages/Profile';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Landing from '../public/src/pages/Landing';

function App() {
  return (
    <Router>
      <Route exact path="/" component = {app} />
      <Route exact path="/" component = {Landing} />
      <Route exact path="/profile/:id" component = {Profile} />
      <Route exact path="/buy" component = {Buy} />
      <Route exact path="/sell" component = {Sell} />
      <Route exact path="/signup" component = {Signup} />
      <Route exact path="/listings/:id">
      <Detail />
      </Route>
      {/* include route with Id for specific item detail page */}
      <Footer />
    </Router>
    
  );
}

export default App;