import dotenv from "dotenv";
dotenv.config();
import winax from "winax";
// require("dotenv").config();
// const winax = require("winax");
// import winax from "winax";

const Connection = () => {
	const comObject = new winax.Object("V83.COMConnector");
	const connectionString = process.env.DATABASE_URL;

	const connection = comObject.Connect(connectionString);
	return { comObject, connection };
};

// Connect();

// const Connection = Connect();
// module.exports = { Connection };
export default Connection;
