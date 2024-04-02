/** @type {import('next').NextConfig} */
import path from "path";
// const __dirname = path.dirname(__filename);
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

export default nextConfig;
