'use client';
import React, { useState, useMemo } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button, Image, Link } from '@heroui/react';
import { useRouter, usePathname } from 'next/navigation';

import { LanguageSwitcher } from './LanguageSwitcher';

import { useLoading } from '@/contexts/LoadingContext';
import { siteConfig } from '@/config/site';

interface NavbarProps {
	dictionary: {
		common: {
			nav: {
				home: string;
				services: string;
				projects: string;
				about: string;
				contact: string;
				getInTouch: string;
			};
		};
	};
}

export default function Navbar({ dictionary }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const { language } = useLoading();
	const currentLang = pathname.split('/')[1];

	// Funzione per ottenere il path base (senza la lingua)
	const getBasePath = (path: string) => {
		const parts = path.split('/');
		// Se il path è solo la lingua (es. /en), restituiamo '/'
		if (parts.length <= 2) return '/';
		// Altrimenti restituiamo il path senza la lingua (es. /services)
		return '/' + parts.slice(2).join('/');
	};

	// Crea i percorsi con il prefisso della lingua usando useMemo per performance
	const navLinks = useMemo(() => {
		// Non creare navLinks finché non abbiamo una lingua valida
		if (!currentLang) return [];

		return siteConfig.navItems.map((item) => ({
			name:
				dictionary?.common?.nav?.[
					item.translationKey as keyof typeof dictionary.common.nav
				] || item.name,
			path: `/${currentLang}${item.path}`,
			basePath: item.path,
			icon: React.createElement(item.icon, { size: 16 }),
		}));
	}, [dictionary, currentLang]);

	return (
		<>
			{/* Navbar di sfondo per l'effetto frost */}
			<nav className="fixed top-0 left-0 right-0 z-40 py-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="glass-panel rounded-xl px-4 py-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<Image alt="logo" height={64} src="/logo_full.svg" width={200} />
							</div>
							<div className="hidden md:flex items-center space-x-8">
								{navLinks.map((link) => (
									<div key={link.path} className="flex items-center gap-2 min-h-[40px]">
										<span className="flex items-center justify-center w-5 h-5">
											{link.icon}
										</span>
										<span>{link.name}</span>
									</div>
								))}
								<div className="flex items-center gap-2">
									<Mail size={16} />
									<span>{dictionary?.common?.nav?.getInTouch || 'Get in Touch'}</span>
								</div>
								<LanguageSwitcher />
							</div>
							<div className="md:hidden">
								<Menu className="h-6 w-6" />
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Navbar principale */}
			<nav className="fixed top-0 left-0 right-0 z-50 py-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="glass-panel rounded-xl px-4 py-2 backdrop-blur-md bg-white/10 border border-white/10 hover:shadow-xl hover:shadow-white/5 transition-all duration-300">
						<div className="flex items-center justify-between">
							<Link className="flex items-center space-x-2" href={`/${currentLang}`}>
								<Image alt="logo" height={64} src="/logo_full.svg" width={200} />
							</Link>

							{/* Desktop Navigation */}
							<div className="hidden md:flex items-center space-x-8">
								{navLinks.map((link) => (
									<Link
										color={
											getBasePath(pathname) === link.basePath ? 'primary' : 'foreground'
										}
										key={link.path}
										underline={
											getBasePath(pathname) === link.basePath ? 'always' : 'hover'
										}
										className={`flex items-center gap-2 min-h-[40px]`}
										href={link.path}
									>
										<span className="flex items-center justify-center w-5 h-5">
											{link.icon}
										</span>
										<span>{link.name}</span>
									</Link>
								))}
								<Button
									color="primary"
									startContent={<Mail size={16} />}
									variant="shadow"
									onPress={() => {
										router.push('/contact');
									}}
								>
									{dictionary?.common?.nav?.getInTouch || 'Get in Touch'}
								</Button>
								<LanguageSwitcher />
							</div>

							{/* Mobile Menu Button */}
							<button
								className="md:hidden rounded-lg p-2 glass-card hover:bg-white/10 transition-colors"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
							</button>
						</div>

						{/* Mobile Navigation */}
						{isMenuOpen && (
							<div className="md:hidden mt-4 pb-2">
								<div className="flex flex-col space-y-4">
									{navLinks.map((link) => (
										<Button
											key={link.path}
											className={`flex items-center justify-start gap-2 min-h-[40px] ${
												getBasePath(pathname) === link.basePath ? 'text-primary-400' : ''
											}`}
											color="default"
											variant="light"
											onPress={() => {
												router.push(link.path);
												setIsMenuOpen(false);
											}}
										>
											<span className="flex items-center justify-center w-5 h-5">
												{link.icon}
											</span>
											<span>{link.name}</span>
										</Button>
									))}
									<Button
										color="primary"
										startContent={<Mail size={16} />}
										variant="shadow"
									>
										{dictionary?.common?.nav?.getInTouch || 'Get in Touch'}
									</Button>
									<div className="flex justify-center py-2">
										<LanguageSwitcher />
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}
