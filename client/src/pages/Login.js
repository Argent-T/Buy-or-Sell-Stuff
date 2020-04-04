import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('api/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        
          username: response.data.username,
          first: response.data.first,
          last: response.data.last,
          address: response.data.address,
          city: response.data.city, 
          state: response.data.state,
          zip: response.data.zip,
          email: response.data.email,
          listings: response.data.listings
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Navbar />
                    <br></br>
                    <div className="container loginContent">
                        <label className="content is-large" htmlFor="username">
                            <strong>Login</strong>
                        </label>
                        <hr />
                        <div className="field">
                            <p class="control">
                            <input className="input inputbox"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <input className="input inputbox"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-link"
                                    
                                    onClick={this.handleSubmit} 
                                    ><strong className="loginbtn">Login</strong>
                                </button>
                                <span id="loginSignup">Don't have an account <a href="/signup" >sign up</a></span>
                            </p>
                            
                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default LoginForm
