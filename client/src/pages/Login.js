import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
// import passport from '../../../server/passport'

class Login extends Component {

    constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
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
		this.props.LocalStrategy(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}
    render (){
        return (
        <>
        <Navbar />
      {/* <img src="/images/Best-sites-to-sell-stuff-online.jpg" /> */}

    <div className="container loginContent">
        <h1 className="content loginIn is-large"><strong>Login</strong></h1>
        <hr />
        <div className="field">
            <p class="control">
                <input className="input inputbox" 
                type="email" 
                placeholder="Email"
                name="email"
                value={this.state.email}
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
                        <button className="button is-link">
                            <strong onClick={this.handleSubmit} className="loginbtn">Submit</strong>
                        </button>
                    </p>
                </div>
    </div>

        </>
        )
    }
}
export default Login;