import { getClusterInfobases } from "@/utils/v83Com";
import { NextResponse } from "next/server";

// function getData() {
// 	return getClusterInfobases();
// }

export async function GET() {
	const data = getClusterInfobases();
	const response = { status: 200, errors: [], data: data };
	return NextResponse.json(response.data);
}
