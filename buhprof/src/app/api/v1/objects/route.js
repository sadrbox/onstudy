import axios from "axios";
import { getProducts } from "@/services/cluster";
import { NextResponse } from "next/server";

export async function GET() {
	const data = await axios.get("https://fakestoreapi.com/products");

	const response = { status: 200, errors: [], data: data.data };
	return NextResponse.json(response.data);
}
