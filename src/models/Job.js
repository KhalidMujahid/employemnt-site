const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	state: {
		type: String,
		required: true,
		trim: true,
	},
	city: {
		type: String,
		required: true,
		trim: true,
	},
	zipcode: {
		type: String,
		required: true,
		trim: true,
	},
	cell: {
		type: String,
		required: true,
		trim: true,
	},
	dbo: {
		type: String,
		required: true,
		trim: true,
	},
	occupation: {
		type: String,
		required: true,
		trim: true,
	}
});

const Job = mongoose.model("Job",JobSchema);

module.exports = Job;