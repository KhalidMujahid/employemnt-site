const router = require("express").Router();
const Contact = require("../models/Contact");
const Job = require("../models/Job");

// render index page
router.get("/", async (req,res,next) => {
	try {
		res.status(200).render("index");
	} catch(e) {
		next(e);
	}
});

// render jobs page
router.get("/jobs", async (req,res,next) => {
	try {
		res.status(200).render("jobs",{
			show: false,
			message:""
		});
	} catch(e) {
		next(e);
	}
});

// render contact page
router.get("/contact", async (req,res,next) => {
	try {
		res.status(200).render("contact",{
			show: false,
			message: ""
		});
	} catch(e) {
		next(e);
	}
});

// apply job
router.post("/apply", async (req,res,next) => {
	try {
		const { fullname,email,address,state,city,zipcode,cell,dbo,occupation } = req.body;

		if(!fullname || !email || !address || !city || !zipcode || !cell || !dbo || !occupation){
			return res.status(400).render("jobs",{
			   show: true,
			   message:"All inputs are required!"
		    });
		}

       const response = await Job.create({
	       	fullname,
	       	email,
	       	address,
	       	state,
	       	city,
	       	zipcode,
	       	cell,
	       	dbo,
	       	occupation
       });

       if(response){
       	return res.status(201).render("jobs",{
			show: true,
			message: "Application submitted successfully!"
		});
       } else {
       	return res.status(400).render("jobs",{
			show: true,
			message: "An error occurred!"
		});
       }

	} catch(e) {
		next(e);
	}
});


// contact
router.post("/contact", async (req,res,next) => {
	try {

		const { name,email, subject, message } = req.body;

		if(!name || !email || !subject || !message) {
			return res.status(400).render("contact",{
				show: true,
				message: "All inputs are required!"
			});
		}

		const response = await Contact.create({ name, email, subject, message});

		if(response){
			return res.status(201).render("contact",{
				show: true,
				message: "Message sent!"
			});
		} else {
			return res.status(400).render("contact",{
				show: true,
				message: "An error occurred!"
			});
		}

	} catch(e) {
		next(e);
	}
});

module.exports = router;