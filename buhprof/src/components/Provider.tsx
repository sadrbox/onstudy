"use client";

import React, { ReactNode, useState } from "react";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Provider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	);
}
