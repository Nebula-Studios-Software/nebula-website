import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					'min-h-screen bg-transparent font-sans antialiased',
					fontSans.variable,
					inter.className
				)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<div className="relative flex flex-col">
						<ClientLayout>{children}</ClientLayout>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
