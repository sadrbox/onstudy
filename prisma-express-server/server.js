// server.js
import express from "express";
import winax from "winax";
import net from "node:net";
import edge from "edge-js";
import { Buffer } from "node:buffer";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { getClusterInfobases } from "./services/v83com.js";

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

app.get("/counterparties", async (req, res) => {
	const all = await prisma.counterparties.findMany();
	// console.log(counterparties);
	const p = { counterparties: all };
	res.json(p);
});

app.post("/json", (req, res) => {
	console.log(req.body); // Логируем полученный JSON
	res.status(200).json({ message: "JSON успешно получен!" }); // Ответ клиенту
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
