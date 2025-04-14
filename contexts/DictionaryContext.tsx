'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Dictionary } from '@/types/dictionary';

interface DictionaryContextType {
	dictionary: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextType | null>(null);

export function DictionaryProvider({
	children,
	dictionary,
}: {
	children: ReactNode;
	dictionary: Dictionary;
}) {
	return (
		<DictionaryContext.Provider value={{ dictionary }}>
			{children}
		</DictionaryContext.Provider>
	);
}

export function useDictionaryContext() {
	const context = useContext(DictionaryContext);
	if (!context) {
		throw new Error(
			'useDictionaryContext must be used within a DictionaryProvider'
		);
	}
	return context;
}
