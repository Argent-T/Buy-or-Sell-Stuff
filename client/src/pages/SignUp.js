import React, { Component } from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar";
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			first: '',
			last: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			email: '',
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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/api/user/', {
			username: this.state.username,
			password: this.state.password,
			first: this.state.first,
			last: this.state.last,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			email: this.state.email
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<>
					<Navbar></Navbar>

					<div className="container signupContent">
						<h1 className="content is-large">Sign Up</h1>
						<hr />
						<div className="field">
							<div className="columns">
								<div className="column">
									<p class="control">
										<input
											className="input inputname"
											type="text"
											name="username"
											placeholder="Username"
											value={this.state.username}
											onChange={this.handleChange}
										/>
									</p>
								</div>
							</div>
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
								<button disabled={!this.state.email}
									disabled={!this.state.password}
									disabled={!this.state.username}
									disabled={!this.state.first}
									disabled={!this.state.last}
									disabled={!this.state.address}
									disabled={!this.state.city}
									disabled={!this.state.state}
									disabled={!this.state.zip}
									onClick={this.handleSubmit}
									className="button is-link loginbtn">Submit
							</button>
								<span id="loginSignup">Already have an account <a href="/login" >login</a></span>
							</p>
						</div>
					</div>

				</>
			)
		}
	}
}
export default SignUp;