const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes/router");

const app = express();

//app.set("view engine","ejs");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname,"../","public")));
app.use(helmet());
app.use(cors());

// routes
app.use("/",router);

// page not found
app.use((req,res,next) => {
	const error = new Error(`${req.originalUrl} page not found1`);
	res.status(404);
	next(error);
});

// erro handler
app.use((error,req,res,next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.send(error.message);
});

module.exports = app;
