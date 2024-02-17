import { getClusterInfobases } from "@/utils/v83Com";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const getData = getClusterInfobases();
		const data = await getData.then((res) => {
			return res;
		});
		const response = { status: 200, errors: [], data };
		return NextResponse.json(response.data);
	} catch (e) {}
}
