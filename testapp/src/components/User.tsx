import React from "react";
import { PrismaClient } from "../../generated/client";

type Props = {};

const User = (props: Props) => {
	const prisma = new PrismaClient();
	async function getUsers() {
		const users = await prisma.user.findMany();
		console.log(users);
	}
	getUsers();

	return <div>User</div>;
};

export default User;
