const mongoose = require("mongoose");
require("dotenv").config();
const uri = "mongodb://localhost/bootDb";

mongoose.connect(uri).then(() => {
	console.log("database is now connected...!");
});

module.exports = mongoose;
