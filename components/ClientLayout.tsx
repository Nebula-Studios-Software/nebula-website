'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BackgroundStars from './BackgroundStars';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsTransitioning(true);
		const timer = setTimeout(() => setIsTransitioning(false), 1000);
		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<>
			<CustomCursor />
			<BackgroundStars isTransitioning={isTransitioning} />
			<Navbar />
			<main className="min-h-screen">{children}</main>
		</>
	);
}
