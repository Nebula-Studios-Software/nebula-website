import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { getDictionary } from './dictionaries';

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

export async function generateStaticParams() {
	return [{ lang: 'it' }, { lang: 'en' }];
}

interface RootLayoutProps {
	children: React.ReactNode;
	params: { lang: string };
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const lang = params.lang;
	const dictionary = await getDictionary(lang);

	return (
		<html lang={lang} suppressHydrationWarning>
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
						<ClientLayout dictionary={dictionary}>{children}</ClientLayout>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
