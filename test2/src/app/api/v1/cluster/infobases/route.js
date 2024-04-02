// import { getClusterInfobases } from "@/utils/v83Com";
import { getInfobases } from "@/services/cluster.js";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const data = await getInfobases();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
		// return NextResponse.json([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
	}
}
