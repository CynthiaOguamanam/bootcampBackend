const express = require("express");
require("./utils/db");
const cors = require('cors')

const port = 2003;
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
	res.status(200).json({ message: "This is best place to be" });
});
app.use('/api', require('./Router/AdminRouter'));

app.listen(port, () => {
	console.log("server is now running...!");
});
