import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar';

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
      first:'',
      last:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      email:'',
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
		// TODO - validate!
		axios
			.post('/api/signup2', {
        first: this.state.first,
        last: this.state.last,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        email: this.state.email,
				password: this.state.password
			})
			.then(response => {
        console.log("signup")
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}

render (){
    return(
        <>
        <Navbar />
      <div className="container signupContent">
        <h1 className="signUp is-large">Sign Up</h1>
        <hr />
        <div className="field">
          <div className="columns">
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  name="first"
                  placeholder="First Name"
                  value={this.state.first}
							onChange={this.handleChange}
                />
              </p>
            </div>
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  name="last"
                  placeholder="Last Name"
                  value={this.state.last}
							onChange={this.handleChange}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="field">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
							onChange={this.handleChange}
                />
              </p>
            </div>
        <div className="field">
          <div className="columns">
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
							onChange={this.handleChange}
                />
              </p>
            </div>
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  name="state"
                  placeholder="State"
                  value={this.state.state}
							onChange={this.handleChange}
                />
              </p>
            </div>
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  name="zip"
                  placeholder="Zip"
                  value={this.state.zip}
							onChange={this.handleChange}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control">
            <input
              className="input inputbox"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
							onChange={this.handleChange}
            />
          </p>
        </div>

        <div className="field">
          <p className="control">
            <input
              className="input inputbox"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
							onChange={this.handleChange}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button onClick={this.handleSubmit} className="button is-link loginbtn">Submit</button>
          </p>
        </div>
      </div>

        </>
    )
}
}

export default SignUp;