import 'server-only';

const dictionaries = {
	it: () => import('@/dictionaries/it.json').then((module) => module.default),
	en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
	if (!dictionaries[locale as keyof typeof dictionaries]) {
		return dictionaries.it();
	}
	return dictionaries[locale as keyof typeof dictionaries]();
};
