import { getDictionary } from './dictionaries';
import { DictionaryProvider } from '@/contexts/DictionaryContext';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import BackgroundStars from '@/components/BackgroundStars';

type Props = {
	params: Promise<{ lang: 'en' | 'it' }>;
};

export default async function Home({ params }: Props) {
	// Attendere i parametri prima di usarli
	const resolvedParams = await params;
	const dict = await getDictionary(resolvedParams.lang);

	return (
		<DictionaryProvider dictionary={dict}>
			<BackgroundStars isTransitioning={false} />
			<main className="relative z-10">
				<HeroSection />
				<ServicesSection />
				<ContactSection />
			</main>
		</DictionaryProvider>
	);
}
