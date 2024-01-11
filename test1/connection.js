import { PrismaClient } from "./generated/client/index.js"; // Укажите правильный путь
import {
	convertToBinaryArray,
	convertToBinaryObject,
	generateRandomHex,
	generateTimestamp,
} from "./utils/main.js";

const prisma = new PrismaClient();

async function getUserById(id) {
	const data = await prisma.v8users.findUnique({
		where: {
			ID: Buffer.from(id, "hex"),
		},
	});
	console.log(data.ID, data.Name);
}
async function allRecords() {
	const data = await prisma.v8users.findMany();
	data.map((user) => {
		getUserById(user.ID);
	});
}

// allRecords();

async function createRecord() {
	const randomID = generateRandomHex(16);
	const base64EncodedString = btoa(generateRandomHex(1));

	try {
		const createdRecord = await prisma.person.create({
			data: {
				ID: convertToBinaryObject(16),
				Name: "testing",
				Descr: convertToBinaryObject(128),
				Show: convertToBinaryObject(1),
				Data: convertToBinaryObject(100),
				OSName: "testing",
				Changed: Date.now(),
				RoleID: 8,
				EAuth: convertToBinaryObject(1),
				AdmRole: convertToBinaryObject(1),
				UsSprH: 8,
			},
		});
		console.log("created", createRecord);
	} catch (error) {
		console.error("error", error);
	}
}

createRecord();

// const randomID = Math.random();
// console.log(Buffer.from(randomID));
// const timestamp = generateTimestamp();
// console.log(timestamp);
//
