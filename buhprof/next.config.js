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
		// config.module.rules.push({
		// 	test: /\.scss$/,
		// 	use: [
		// 		{
		// 			loader: "sass-loader",
		// 			options: {
		// 				sourceMap: true, // Если требуется генерировать source map для отладки
		// 				sassOptions: {
		// 					includePaths: [path.join(__dirname, "src/**/*")],
		// 				},
		// 			},
		// 		},
		// 	],
		// });

		// config.resolve.alias["@components"] = path.join(
		// 	__dirname,
		// 	"src/components"
		// );
		return config;
	},
};

module.exports = nextConfig;
