'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundStars from '@/components/BackgroundStars';
import {
	Code,
	PenTool,
	BarChart,
	Smartphone,
	Globe,
	Layers,
	Check,
} from 'lucide-react';
import { motion } from 'framer-motion';

const serviceItems = [
	{
		icon: <Code className="h-8 w-8 text-primary-400" />,
		title: 'Web Development',
		description:
			'Custom web applications and websites built with modern technologies for optimal performance and user experience.',
		features: [
			'Full-stack development with React, Next.js, Node.js',
			'Progressive Web Apps (PWAs)',
			'Responsive design for all devices',
			'Performance optimization',
			'SEO-friendly architecture',
		],
	},
	{
		icon: <Smartphone className="h-8 w-8 text-primary-400" />,
		title: 'Mobile Development',
		description:
			'Native and cross-platform mobile apps that provide seamless experiences across devices with beautiful interfaces.',
		features: [
			'iOS and Android app development',
			'React Native for cross-platform solutions',
			'Native app development with Swift and Kotlin',
			'Mobile UI/UX design',
			'App Store optimization',
		],
	},
	{
		icon: <PenTool className="h-8 w-8 text-primary-400" />,
		title: 'UI/UX Design',
		description:
			'User-centered design that balances aesthetics with functionality to create intuitive and beautiful interfaces.',
		features: [
			'User research and persona development',
			'Wireframing and prototyping',
			'Visual design and branding',
			'Usability testing',
			'Design systems creation',
		],
	},
	{
		icon: <BarChart className="h-8 w-8 text-primary-400" />,
		title: 'Digital Strategy',
		description:
			'Strategic guidance to help you achieve your business goals through digital solutions and innovative approaches.',
		features: [
			'Market and competitor analysis',
			'Digital transformation planning',
			'KPI definition and tracking',
			'Growth strategy development',
			'Technology stack consultation',
		],
	},
	{
		icon: <Globe className="h-8 w-8 text-primary-400" />,
		title: 'E-commerce Solutions',
		description:
			'Custom online stores and shopping experiences built for conversion and ease of use with secure payment processing.',
		features: [
			'Custom e-commerce development',
			'Shopping cart and checkout optimization',
			'Payment gateway integration',
			'Inventory management systems',
			'Customer relationship management',
		],
	},
	{
		icon: <Layers className="h-8 w-8 text-primary-400" />,
		title: 'Branding & Identity',
		description:
			'Cohesive brand identities that effectively communicate your values and vision to connect with your audience.',
		features: [
			'Logo design and brand guidelines',
			'Visual identity systems',
			'Brand messaging and voice',
			'Marketing collateral design',
			'Brand strategy development',
		],
	},
];

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const Page = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center max-w-3xl mx-auto mb-20"
						initial="hidden"
						animate="visible"
						variants={fadeIn}
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
						<p className="text-xl text-muted-foreground">
							We provide comprehensive digital solutions to help your business thrive
							in the modern digital landscape. Our team of experts delivers exceptional
							results across multiple disciplines.
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 lg:grid-cols-2 gap-12"
						variants={staggerContainer}
						initial="hidden"
						animate="visible"
					>
						{serviceItems.map((service, index) => (
							<motion.div
								key={index}
								className="glass-card rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
								variants={fadeIn}
							>
								<div className="w-16 h-16 rounded-full bg-primary-400/20 flex items-center justify-center mb-6">
									{service.icon}
								</div>
								<h3 className="font-medium text-2xl mb-4">{service.title}</h3>
								<p className="text-muted-foreground mb-6">{service.description}</p>
								<ul className="space-y-3">
									{service.features.map((feature, idx) => (
										<li key={idx} className="flex items-start">
											<Check className="h-5 w-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className="glass-panel rounded-xl p-8 mt-16 text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							Ready to start your project?
						</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							We&apos;re ready to bring your vision to life. Get in touch with our team
							to discuss how we can help you achieve your digital goals.
						</p>
						<button className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors">
							Contact Us
						</button>
					</motion.div>
				</div>
			</main>
		</div>
	);
};

export default Page;
