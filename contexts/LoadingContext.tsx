'use client';
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';

interface LoadingContextType {
	isLoading: boolean;
	language: string;
	setLoading: (loading: boolean) => void;
	setLanguage: (language: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState(false);
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			setLanguage(storedLanguage);
		} else {
			setLanguage('en');
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('language', language);
	}, [language]);

	return (
		<LoadingContext.Provider
			value={{ isLoading, setLoading: setIsLoading, language, setLanguage }}
		>
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoading() {
	const context = useContext(LoadingContext);
	if (context === undefined) {
		throw new Error('useLoading must be used within a LoadingProvider');
	}
	return context;
}
