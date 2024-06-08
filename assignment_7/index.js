require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./schema");
const cron = require("node-cron");
const app = express();
const cronjob = require("./cron");

const PORT = process.env.PORT || 3000;

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/birthday", async (req, res) => {
	const { name, email, date } = req.body;
	const [month, day] = date.split("-");
	const birthday = new Date();
	birthday.setMonth(MONTHS.indexOf(month));
	birthday.setDate(day);

	const userExists = await User.findOne({ email });

	if (userExists) {
		return res.sendStatus(400);
	}

	const user = new User({
		name,
		email,
		birthday,
	});

	await user.save();
	res.sendStatus(200);
});

app.listen(PORT, async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log(`Server is running on port ${PORT}`);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
});

cron.schedule("0 7 * * *", cronjob);
