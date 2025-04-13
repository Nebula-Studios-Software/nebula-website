'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLoading } from '@/contexts/LoadingContext';

const languages = [
	{ code: 'it', name: 'Italiano', flag: '🇮🇹' },
	{ code: 'en', name: 'English', flag: '🇺🇸' },
];

export function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const { setLoading, setLanguage } = useLoading();
	const containerRef = useRef<HTMLDivElement>(null);

	const currentLang = pathname.split('/')[1];
	const currentLanguage = languages.find((lang) => lang.code === currentLang);

	const switchLanguage = async (lang: string) => {
		setLoading(true);
		setLanguage(lang);
		const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
		await router.push(newPath);
		setIsOpen(false);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className="relative">
			<motion.div
				className="relative"
				animate={{
					scale: isOpen ? 1.1 : 1,
				}}
				transition={{ duration: 0.3 }}
			>
				<Button
					variant="light"
					color="default"
					size="sm"
					className="glass-card min-w-[120px] justify-between relative overflow-hidden"
					onPress={() => setIsOpen(!isOpen)}
				>
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20"
						animate={{
							opacity: isOpen ? 1 : 0,
						}}
						transition={{ duration: 0.3 }}
					/>
					<div className="flex items-center gap-2 relative z-10">
						<Globe className="h-4 w-4 text-foreground/60" />
						<span className="text-sm font-medium">
							{currentLanguage?.flag} {currentLanguage?.name}
						</span>
					</div>
					<ChevronDown
						className={`h-4 w-4 transition-transform duration-200 relative z-10 ${
							isOpen ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8, y: -20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: -20 }}
						transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
						className="absolute right-0 mt-2 w-full"
					>
						<div className="glass-panel rounded-xl p-2 space-y-1 relative overflow-hidden">
							<motion.div
								className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent"
								animate={{
									opacity: isOpen ? 1 : 0,
								}}
								transition={{ duration: 0.3 }}
							/>
							{languages.map((lang, index) => (
								<motion.div
									key={lang.code}
									onHoverStart={() => setHoveredIndex(index)}
									onHoverEnd={() => setHoveredIndex(null)}
									animate={{
										scale: hoveredIndex === index ? 1.05 : 1,
										x: hoveredIndex === index ? 5 : 0,
									}}
									transition={{ duration: 0.2 }}
								>
									<Button
										variant="light"
										color={currentLang === lang.code ? 'primary' : 'default'}
										size="sm"
										onPress={() => switchLanguage(lang.code)}
										className="w-full justify-start gap-2 relative overflow-hidden"
									>
										<motion.div
											className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent"
											animate={{
												opacity: hoveredIndex === index ? 1 : 0,
											}}
											transition={{ duration: 0.2 }}
										/>
										<span className="text-lg relative z-10">{lang.flag}</span>
										<span className="text-sm font-medium relative z-10">{lang.name}</span>
									</Button>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
