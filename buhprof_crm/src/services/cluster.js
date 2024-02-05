// require("dotenv").config({ path: ".env.local" });
import axios from "axios";

async function getInfobases() {
	const response = await axios.get("/api/v1/cluster/infobases");
	return response.data;
}
async function getProducts() {
	// console.log(response);
	return response.data;
}
export { getProducts, getInfobases };
