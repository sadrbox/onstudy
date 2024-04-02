// require("dotenv").config({ path: ".env.local" });
import NodeCache from "node-cache";
import { getClusterInfobases } from "@/utils/v83Com";
import axios from "axios";

const cache = new NodeCache(); // должен быть на верхнем уровне, в внутри функции не работает
async function getApiInfobases() {
	const response = await axios.get("/api/v1/cluster/infobases");
	return response.data;
}

async function getInfobases() {
	let data = cache.get("infobases");
	if (!data) {
		data = getClusterInfobases();
		const success = cache.set("infobases", data, 3600000);
		console.log(success);
	}
	return data;
}
export { getInfobases, getApiInfobases };
