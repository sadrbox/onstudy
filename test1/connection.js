// testConnection.js
const { PrismaClient } = require("./generated/client"); // Укажите правильный путь

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
	try {
		const createdRecord = await prisma.testable.create({
			data: {
				Id: Math.random(),
				Name: "createByPrisma",
			},
		});
		console.log("created");
	} catch (error) {
		console.error("error");
	}
}

createRecord();
