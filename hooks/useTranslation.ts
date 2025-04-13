'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';

type Dictionary = {
	[key: string]: any;
};

const dictionaries: Record<string, () => Promise<Dictionary>> = {
	it: () => import('../dictionaries/it.json').then((module) => module.default),
	en: () => import('../dictionaries/en.json').then((module) => module.default),
};

export function useTranslation() {
	const params = useParams();
	const locale = params.lang as string;

	const t = useMemo(
		() => async (key: string) => {
			const dictionary = await dictionaries[locale]();
			const keys = key.split('.');
			let value = dictionary;

			for (const k of keys) {
				if (value && typeof value === 'object') {
					value = value[k];
				} else {
					return key;
				}
			}

			return value;
		},
		[locale]
	);

	return { t, locale };
}
