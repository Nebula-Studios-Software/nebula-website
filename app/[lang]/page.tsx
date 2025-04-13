import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import BackgroundStars from '@/components/BackgroundStars';

export default function Home() {
	return (
		<>
			<BackgroundStars isTransitioning={false} />
			<main className="relative z-10">
				<HeroSection />
				<ServicesSection />
				<ContactSection />
			</main>
		</>
	);
}
