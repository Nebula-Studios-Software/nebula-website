import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundStars from '@/components/BackgroundStars';
import AnimatedSection from '@/components/AnimatedSection';

const Page = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<HeroSection />
				<AnimatedSection>
					<ServicesSection />
				</AnimatedSection>
				<AnimatedSection>
					<ProjectsSection />
				</AnimatedSection>
				<AnimatedSection>
					<TestimonialsSection />
				</AnimatedSection>
				<AnimatedSection>
					<TechStack />
				</AnimatedSection>
				<AnimatedSection>
					<ContactSection />
				</AnimatedSection>
			</main>
		</div>
	);
};

export default Page;
