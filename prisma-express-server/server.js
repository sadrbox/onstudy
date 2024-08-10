// server.js
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", async (req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});

app.get("/users/delete", async (req, res) => {
	await prisma.user.deleteMany();
});

app.post("/users", async (req, res) => {
	// console.log(req.body);
	// const { name, email } = req.body;
	try {
		const newUser = await prisma.user.create({
			data: {
				...req.body,
			},
		});
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error });
	}
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
