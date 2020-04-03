import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Detail from "./pages/Detail";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import UserContext from './utils/UserContext';



class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('api/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          id: response.data.user._id,
          username: response.data.user.username,
          first: response.data.user.first,
          last: response.data.user.last,
          address: response.data.user.address,
          city: response.data.user.city, 
          state: response.data.user.state,
          zip: response.data.user.zip,
          email: response.data.user.email,
          listings: response.data.user.listings
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


render(){
  return (
    <UserContext.Provider value = {this.state}>
    <div className="App">
      {/* greet user if logged in: */}
        <div id="pageContent">
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}

    <Router>
      <Route exact path="/" component = {Landing} />
      <Route exact path="/profile/:id" component = {Profile} />
      <Route exact path="/buy" component = {Buy} />
      <Route exact path="/sell" component = {Sell} />
      <Route exact path="/signup" component = {Signup} />
    <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
      <Route exact path="/listings/:id">
            <Detail />
      </Route>
      <Route
          path="/logout"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
      {/* include route with Id for specific item detail page */}
    </Router>
    </div>

 

    <Footer />

    </div>
   </UserContext.Provider>
  );
}
}

export default App;