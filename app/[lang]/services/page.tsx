'use client';
import React, { useEffect, useState } from 'react';
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
import { useParams, useRouter } from 'next/navigation';

import { getDictionary } from '../dictionaries';

import Navbar from '@/components/Navbar';
import { Button } from '@nextui-org/react';

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
	const params = useParams();
	const [dictionary, setDictionary] = useState<any>(null);
	const router = useRouter();

	useEffect(() => {
		const loadDictionary = async () => {
			try {
				// Estrai la lingua dai parametri dell'URL
				const lang = params?.lang as string;

				if (lang && (lang === 'en' || lang === 'it')) {
					const dict = await getDictionary(lang);

					setDictionary(dict);
				}
			} catch {
				// Fallback a un dizionario vuoto in caso di errore
				setDictionary({});
			}
		};

		loadDictionary();
	}, [params]);

	const serviceItems = [
		{
			icon: <Code className="h-8 w-8 text-primary-400" />,
			title: dictionary?.services?.items?.web?.title || 'Web Development',
			description:
				dictionary?.services?.items?.web?.description ||
				'Custom web applications and websites built with modern technologies for optimal performance and user experience.',
			features: [
				dictionary?.services?.items?.web?.features?.fullStack ||
					'Full-stack development with React, Next.js, Node.js',
				dictionary?.services?.items?.web?.features?.pwa ||
					'Progressive Web Apps (PWAs)',
				dictionary?.services?.items?.web?.features?.responsive ||
					'Responsive design for all devices',
				dictionary?.services?.items?.web?.features?.performance ||
					'Performance optimization',
				dictionary?.services?.items?.web?.features?.seo ||
					'SEO-friendly architecture',
			],
		},
		{
			icon: <Smartphone className="h-8 w-8 text-primary-400" />,
			title: dictionary?.services?.items?.mobile?.title || 'Mobile Development',
			description:
				dictionary?.services?.items?.mobile?.description ||
				'Native and cross-platform mobile apps that provide seamless experiences across devices with beautiful interfaces.',
			features: [
				dictionary?.services?.items?.mobile?.features?.ios ||
					'iOS and Android app development',
				dictionary?.services?.items?.mobile?.features?.reactNative ||
					'React Native for cross-platform solutions',
				dictionary?.services?.items?.mobile?.features?.native ||
					'Native app development with Swift and Kotlin',
				dictionary?.services?.items?.mobile?.features?.uiux ||
					'Mobile UI/UX design',
				dictionary?.services?.items?.mobile?.features?.appStore ||
					'App Store optimization',
			],
		},
		{
			icon: <PenTool className="h-8 w-8 text-primary-400" />,
			title: dictionary?.services?.items?.uiux?.title || 'UI/UX Design',
			description:
				dictionary?.services?.items?.uiux?.description ||
				'User-centered design that balances aesthetics with functionality to create intuitive and beautiful interfaces.',
			features: [
				dictionary?.services?.items?.uiux?.features?.research ||
					'User research and persona development',
				dictionary?.services?.items?.uiux?.features?.wireframing ||
					'Wireframing and prototyping',
				dictionary?.services?.items?.uiux?.features?.visual ||
					'Visual design and branding',
				dictionary?.services?.items?.uiux?.features?.testing || 'Usability testing',
				dictionary?.services?.items?.uiux?.features?.systems ||
					'Design systems creation',
			],
		},
		{
			icon: <BarChart className="h-8 w-8 text-primary-400" />,
			title: dictionary?.services?.items?.strategy?.title || 'Digital Strategy',
			description:
				dictionary?.services?.items?.strategy?.description ||
				'Strategic guidance to help you achieve your business goals through digital solutions and innovative approaches.',
			features: [
				dictionary?.services?.items?.strategy?.features?.analysis ||
					'Market and competitor analysis',
				dictionary?.services?.items?.strategy?.features?.transformation ||
					'Digital transformation planning',
				dictionary?.services?.items?.strategy?.features?.kpi ||
					'KPI definition and tracking',
				dictionary?.services?.items?.strategy?.features?.growth ||
					'Growth strategy development',
				dictionary?.services?.items?.strategy?.features?.tech ||
					'Technology stack consultation',
			],
		},
		{
			icon: <Globe className="h-8 w-8 text-primary-400" />,
			title:
				dictionary?.services?.items?.ecommerce?.title || 'E-commerce Solutions',
			description:
				dictionary?.services?.items?.ecommerce?.description ||
				'Custom online stores and shopping experiences built for conversion and ease of use with secure payment processing.',
			features: [
				dictionary?.services?.items?.ecommerce?.features?.custom ||
					'Custom e-commerce development',
				dictionary?.services?.items?.ecommerce?.features?.cart ||
					'Shopping cart and checkout optimization',
				dictionary?.services?.items?.ecommerce?.features?.payment ||
					'Payment gateway integration',
				dictionary?.services?.items?.ecommerce?.features?.inventory ||
					'Inventory management systems',
				dictionary?.services?.items?.ecommerce?.features?.crm ||
					'Customer relationship management',
			],
		},
		{
			icon: <Layers className="h-8 w-8 text-primary-400" />,
			title: dictionary?.services?.items?.branding?.title || 'Branding & Identity',
			description:
				dictionary?.services?.items?.branding?.description ||
				'Cohesive brand identities that effectively communicate your values and vision to connect with your audience.',
			features: [
				dictionary?.services?.items?.branding?.features?.logo ||
					'Logo design and brand guidelines',
				dictionary?.services?.items?.branding?.features?.visual ||
					'Visual identity systems',
				dictionary?.services?.items?.branding?.features?.messaging ||
					'Brand messaging and voice',
				dictionary?.services?.items?.branding?.features?.marketing ||
					'Marketing collateral design',
				dictionary?.services?.items?.branding?.features?.strategy ||
					'Brand strategy development',
			],
		},
	];

	return (
		<div className="min-h-screen">
			<main className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						animate="visible"
						className="text-center max-w-3xl mx-auto mb-20"
						initial="hidden"
						variants={fadeIn}
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							{dictionary?.services?.title || 'Our Services'}
						</h1>
						<p className="text-xl text-muted-foreground">
							{dictionary?.services?.subtitle ||
								'We provide comprehensive digital solutions to help your business thrive in the modern digital landscape. Our team of experts delivers exceptional results across multiple disciplines.'}
						</p>
					</motion.div>

					<motion.div
						animate="visible"
						className="grid grid-cols-1 lg:grid-cols-2 gap-12"
						initial="hidden"
						variants={staggerContainer}
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
						animate={{ opacity: 1, y: 0 }}
						className="glass-panel rounded-xl p-8 mt-16 text-center"
						initial={{ opacity: 0, y: 20 }}
						transition={{ delay: 0.6, duration: 0.6 }}
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							{dictionary?.common?.contact?.title || 'Ready to start your project?'}
						</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							{dictionary?.common?.contact?.subtitle ||
								"We're ready to bring your vision to life. Get in touch with our team to discuss how we can help you achieve your digital goals."}
						</p>
						<Button
							color="primary"
							variant="shadow"
							onPress={() => {
								router.push('/contact');
							}}
						>
							{dictionary?.common?.contact?.form?.send || 'Contact Us'}
						</Button>
					</motion.div>
				</div>
			</main>
		</div>
	);
};

export default Page;
