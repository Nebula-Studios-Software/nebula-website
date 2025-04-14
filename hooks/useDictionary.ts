import { useParams } from 'next/navigation';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Dictionary } from '@/types/dictionary';
import { useEffect, useState } from 'react';

export function useDictionary() {
	const params = useParams();
	const lang = params.lang as 'en' | 'it';
	const [dict, setDict] = useState<Dictionary | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadDictionary() {
			try {
				const dictionary = await getDictionary(lang);
				setDict(dictionary as Dictionary);
			} catch (error) {
				console.error('Error loading dictionary:', error);
			} finally {
				setIsLoading(false);
			}
		}
		loadDictionary();
	}, [lang]);

	if (isLoading || !dict) {
		// Ritorna un dizionario vuoto con la struttura corretta
		return {
			common: {
				nav: {
					home: '',
					services: '',
					projects: '',
					about: '',
					contact: '',
					getInTouch: '',
				},
				contact: {
					title: '',
					subtitle: '',
					info: {
						email: '',
					},
					form: {
						privacy: '',
						send: '',
					},
					success: {
						title: '',
						message: '',
					},
				},
				privacy: {
					title: '',
					lastUpdated: '',
					introduction: '',
					sections: {
						dataCollection: {
							title: '',
							content: '',
						},
						dataUsage: {
							title: '',
							content: '',
						},
						dataProtection: {
							title: '',
							content: '',
						},
						cookies: {
							title: '',
							content: '',
						},
						rights: {
							title: '',
							content: '',
						},
						changes: {
							title: '',
							content: '',
						},
					},
				},
			},
			hero: {
				title: '',
				subtitle: '',
				cta: '',
			},
			services: {
				title: '',
				subtitle: '',
				items: {
					web: {
						title: '',
						description: '',
						features: [],
					},
					mobile: {
						title: '',
						description: '',
						features: [],
					},
					cloud: {
						title: '',
						description: '',
						features: [],
					},
					ai: {
						title: '',
						description: '',
						features: [],
					},
				},
			},
			projects: {
				title: '',
				subtitle: '',
				items: {
					project1: {
						title: '',
						description: '',
						technologies: [],
					},
					project2: {
						title: '',
						description: '',
						technologies: [],
					},
					project3: {
						title: '',
						description: '',
						technologies: [],
					},
				},
			},
			about: {
				title: '',
				subtitle: '',
				description: '',
				team: {
					title: '',
					members: {
						member1: {
							name: '',
							role: '',
							description: '',
						},
						member2: {
							name: '',
							role: '',
							description: '',
						},
						member3: {
							name: '',
							role: '',
							description: '',
						},
					},
				},
			},
		} as unknown as Dictionary;
	}

	return dict;
}
