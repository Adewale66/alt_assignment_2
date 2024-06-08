require("dotenv").config();
const nodemailer = require("nodemailer");

console.log("Running Cron Job");
const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const response = await fetch(
	process.env.HOST_URL || "http://localhost:3000/api/users"
);
const users = await response.json();
users.forEach(async (user) => {
	const birthday = new Date(user.birthday);
	const today = new Date();
	if (
		birthday.getMonth() === today.getMonth() &&
		birthday.getDate() === today.getDate()
	) {
		const mailOptions = {
			from: process.env.EMAIL,
			to: user.email,
			subject: "Happy Birthday!",
			text: `Happy birthday, ${user.name}!
	      On this special day, I want to celebrate you for the incredible person you are. You bring so much joy, love, and light into the lives of everyone around you, and I'm incredibly grateful to have you in my life.
	      May your day be filled with love, laughter, and the kind of joy that warms your heart and lights up your soul. Here's to another year of beautiful memories, amazing adventures, and dreams coming true. You deserve all the happiness in the world today and always.
	      Wishing you a birthday as wonderful as you are! 💖
	      `,
		};
		try {
			await transporter.sendMail(mailOptions);
		} catch (error) {
			console.log(error);
		}
	}
});
