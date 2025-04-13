import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import BackgroundStars from '@/components/BackgroundStars';
import { getDictionary } from './dictionaries';

export default async function Home({
	params,
}: {
	params: { lang: 'en' | 'it' };
}) {
	const dict = await getDictionary(params.lang);

	return (
		<>
			<BackgroundStars isTransitioning={false} />
			<main className="relative z-10">
				<HeroSection dict={dict.hero} />
				<ServicesSection dict={dict.services} />
				<ContactSection dict={dict.common.contact} />
			</main>
		</>
	);
}
