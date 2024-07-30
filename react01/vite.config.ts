import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	resolve: {
		alias: {
			src: `${path.resolve(__dirname, "src")}/`,
			"@/": `${path.resolve(__dirname, "src")}/`,
		},
	},
	build: {
		sourcemap: false,
	},
});
