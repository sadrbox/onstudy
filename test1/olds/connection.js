import { PrismaClient } from "./generated/client/index.js"; // Укажите правильный путь
import {
	convertToBinaryArray,
	convertToBinaryObject,
	generateRandomHex,
	generateDatetime2,
	generateBytesField,
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
	// data.map((user) => {
	// 	console.dir(user);
	// });
	const binaryData = Buffer.from(data[0].Data, "binary");
	console.log(binaryData);
}

allRecords();
//
async function createRecord() {
	const randomID = generateRandomHex(16);
	const base64EncodedString = btoa(generateRandomHex(1));

	try {
		const createdRecord = await prisma.v8users.create({
			data: {
				ID: generateBytesField(16),
				Name: "testing",
				Descr: "testing",
				Show: generateBytesField(1),
				Data: generateBytesField(442),
				// OSName: "testing2",
				Changed: generateDatetime2(),
				RolesID: 8,
				EAuth: generateBytesField(1),
				AdmRole: generateBytesField(1),
				UsSprH: 4294967296,
			},
		});
		console.log("created", createRecord);
	} catch (error) {
		console.error("error", error);
	}
}

// createRecord();
