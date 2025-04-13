'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BackgroundStars from './BackgroundStars';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import { LanguageSwitcher } from './LanguageSwitcher';

interface ClientLayoutProps {
	children: React.ReactNode;
	dictionary: any;
}

export default function ClientLayout({
	children,
	dictionary,
}: ClientLayoutProps) {
	const pathname = usePathname();
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsTransitioning(true);
		const timer = setTimeout(() => setIsTransitioning(false), 1000);
		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<>
			{/* <CustomCursor /> */}
			<BackgroundStars isTransitioning={isTransitioning} />
			<Navbar dictionary={dictionary} />
			<div className="fixed top-4 right-4 z-50">
				<LanguageSwitcher />
			</div>
			<main className="min-h-screen">{children}</main>
		</>
	);
}
