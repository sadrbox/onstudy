// server.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});

app.post("/users", async (req, res) => {
	const { name, email } = req.body;
	const newUser = await prisma.user.create({
		data: { name, email },
	});
	res.json(newUser);
});

app.post("/users", async (req, res) => {
	const { name, email } = req.body;
	try {
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
			},
		});
		res.status(201).json(newUser);
	} catch (e) {
		res.status(500).json({ error: "Ошибка при создании пользователя" });
	}
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
