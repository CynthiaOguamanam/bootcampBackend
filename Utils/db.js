const mongoose = require("mongoose");
require("dotenv").config();
// const uri = "mongodb://localhost/bootDb";
const uri = "mongodb+srv://richydymphna_04:cynthia04@cluster0.vgqm4.mongodb.net/Bootcamp?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
	console.log("database is now connected...!");
});

module.exports = mongoose;
