const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: "724752416757561",
	api_secret: process.env.CLOUD_SECRET,
	secure: true,
});

module.exports = cloudinary;
