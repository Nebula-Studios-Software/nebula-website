'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import BackgroundStars from './BackgroundStars';
import Navbar from './Navbar';
import { LoadingScreen } from './LoadingScreen';

import { useLoading } from '@/contexts/LoadingContext';

interface ClientLayoutProps {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	const pathname = usePathname();
	const [isTransitioning, setIsTransitioning] = useState(false);
	const { isLoading, language } = useLoading();

	useEffect(() => {
		setIsTransitioning(true);
		const timer = setTimeout(() => setIsTransitioning(false), 1000);

		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<>
			<LoadingScreen isLoading={isLoading} language={language} />
			{/* <CustomCursor /> */}
			<BackgroundStars isTransitioning={isTransitioning} />
			<Navbar currentLanguage={pathname.split('/')[1]} />
			<main className="min-h-screen">{children}</main>
		</>
	);
}
