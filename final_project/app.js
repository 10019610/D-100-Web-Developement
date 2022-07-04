const path = require("path");

const express = require("express");

const db = require("./data/database");
const authRoutes = require("./routes/auth.routes");

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);

// db.connectToDatabase()
// 	.then(function () {
// 		app.listen(3000);
// 	})
// 	.catch(function (error) {
// 		console.log("Failed to connect to the database!");
// 		console.log(error);
// 	});


app.use(function (error, req, res, next) {
	// Default error handling function
	// Will become active whenever any route / middleware crashes
	console.log(error);
	res.status(500).render('500');
});

app.listen(3000);


