import { getClusterSessions } from "@/utils/v83Com";
import { NextResponse } from "next/server";

export async function GET() {
	const data = getClusterSessions();
	const response = { status: 200, errors: [], data: data };
	return NextResponse.json(response.data);
}
