/** @type {import('next').NextConfig} */
const path = require("path");
const os = require("os");
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "src/**/*")],
	},
	webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
		config.module.rules.push({
			test: /\.node$/,
			use: [
				{
					loader: "nextjs-node-loader",
					options: {
						flags: os.constants.dlopen.RTLD_NOW,
						outputPath: config.output.path,
					},
				},
			],
		});
		return config;
	},
};

module.exports = nextConfig;
