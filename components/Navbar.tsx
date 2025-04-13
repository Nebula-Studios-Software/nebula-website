'use client';
import React, { useState } from 'react';
import {
	Menu,
	X,
	Sparkles,
	Home,
	Contact,
	Code,
	Server,
	User,
	Mail,
} from 'lucide-react';
import { Link } from '@heroui/link';
import { Button, Image } from '@heroui/react';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
	dictionary: any;
}

const Navbar = ({ dictionary }: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Estrai la lingua dal pathname (es: /en/about -> en)
	const currentLang = pathname.split('/')[1];

	// Crea i percorsi con il prefisso della lingua
	const navLinks = [
		{
			name: dictionary?.common?.nav?.home || 'Home',
			path: `/${currentLang}`,
			icon: <Home size={16} />,
		},
		{
			name: dictionary?.common?.nav?.services || 'Services',
			path: `/${currentLang}/services`,
			icon: <Server size={16} />,
		},
		{
			name: dictionary?.common?.nav?.projects || 'Projects',
			path: `/${currentLang}/projects`,
			icon: <Code size={16} />,
		},
		{
			name: dictionary?.common?.nav?.about || 'About',
			path: `/${currentLang}/about`,
			icon: <User size={16} />,
		},
		{
			name: dictionary?.common?.nav?.contact || 'Contact',
			path: `/${currentLang}/contact`,
			icon: <Contact size={16} />,
		},
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="glass-panel rounded-xl px-4 py-2">
					<div className="flex items-center justify-between">
						<Link href={`/${currentLang}`} className="flex items-center space-x-2">
							<Image src="/logo_full.svg" alt="logo" width={200} height={64} />
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navLinks.map((link) => (
								<Link
									color="foreground"
									key={link.name}
									href={link.path}
									underline={link.path === pathname ? 'always' : 'hover'}
									className={`flex items-center gap-2 min-h-[40px] ${
										pathname === link.path ? 'text-primary-400' : ''
									}`}
								>
									<span className="flex items-center justify-center w-5 h-5">
										{link.icon}
									</span>
									<span>{link.name}</span>
								</Link>
							))}
							<Button
								color="primary"
								variant="solid"
								startContent={<Mail size={16} />}
							>
								{dictionary?.common?.nav?.getInTouch || 'Get in Touch'}
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden rounded-lg p-2 glass-card hover:bg-white/10 transition-colors"
							onClick={toggleMenu}
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
										color="default"
										variant="light"
										key={link.name}
										onPress={() => {
											router.push(link.path);
											setIsMenuOpen(false);
										}}
										className={`flex items-center justify-start gap-2 min-h-[40px] ${
											pathname === link.path ? 'text-primary-400' : ''
										}`}
									>
										<span className="flex items-center justify-center w-5 h-5">
											{link.icon}
										</span>
										<span>{link.name}</span>
									</Button>
								))}
								<Button
									color="primary"
									variant="shadow"
									startContent={<Mail size={16} />}
								>
									{dictionary?.common?.nav?.getInTouch || 'Get in Touch'}
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
