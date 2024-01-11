import React from "react";
import { PrismaClient } from "../../generated/client/index";

const Layout = () => {
	const prisma = new PrismaClient();
	async function getUsers() {
		const users = await prisma.user.findMany();
		console.log(users);
	}
	getUsers();
	return <div className="layout h-screen"></div>;
};

export default Layout;
