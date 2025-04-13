'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import { Globe } from 'lucide-react';

const languages = [
	{ code: 'it', name: 'Italiano' },
	{ code: 'en', name: 'English' },
];

export function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();

	const currentLang = pathname.split('/')[1];
	const currentLanguage = languages.find((lang) => lang.code === currentLang);

	const switchLanguage = (lang: string) => {
		const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
		router.push(newPath);
	};

	return (
		<div className="flex items-center gap-2">
			<Globe className="h-4 w-4 text-foreground/60" />
			{languages.map((lang) => (
				<Button
					key={lang.code}
					variant={currentLang === lang.code ? 'solid' : 'light'}
					color={currentLang === lang.code ? 'primary' : 'default'}
					size="sm"
					onClick={() => switchLanguage(lang.code)}
					className="min-w-[80px]"
				>
					{lang.name}
				</Button>
			))}
		</div>
	);
}
