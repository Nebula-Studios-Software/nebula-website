/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				hostname: 'placehold.co',
			},
		],
	},
	// Configurazione per GitHub Pages
	basePath: process.env.NODE_ENV === 'production' ? '' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
	output: 'export',
};

module.exports = nextConfig;
