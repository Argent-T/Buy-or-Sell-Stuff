const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
	
	username: {
		type: String,
		unique: false,
		required: true
	},
	password: {
		type: String,
		unique: false,
		required: true
	},
	first: {
		type: String,
		required: true
	},
	last: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	zip: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	listings: [{ type: Schema.Types.ObjectId, ref: 'Listing'}],
	purchased: [{ type: Schema.Types.ObjectId, ref: 'Listing'}]

})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');

		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User