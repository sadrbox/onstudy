"use client";

import React, { useState } from "react";
// import axios from "axios";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { getInfobases } from "@/services/cluster";

interface IInfobases {
	name: string;
	desc: string;
}

export default function Infobases() {
	const { isPending, error, data } = useQuery({
		queryKey: ["infobases"],
		queryFn: async () => await getInfobases(),
	});

	if (isPending) return "Loading...";
	if (error) return "An error has occurred" + error.message;

	return (
		<div>
			<h1>{data && "есть данные!"}</h1>
			<table>
				<thead>
					<tr>
						<th>№</th>
						<th>Идентификатор</th>
						<th>Описание</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((base: IInfobases, idx: number) => (
							<tr key={base.name}>
								<td className="">{idx + 1}</td>
								<td>{base.name}</td>
								<td>{base.desc}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
	// return "Hello World";
}
