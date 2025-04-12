import React from 'react';
import {
	Code,
	PenTool,
	BarChart,
	Smartphone,
	Globe,
	Layers,
} from 'lucide-react';

interface Service {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const services: Service[] = [
	{
		icon: <Code className="h-6 w-6 text-primary-400" />,
		title: 'Web Development',
		description:
			'Custom web applications and websites built with modern technologies for optimal performance.',
	},
	{
		icon: <Smartphone className="h-6 w-6 text-primary-400" />,
		title: 'Mobile Development',
		description:
			'Native and cross-platform mobile apps that provide seamless experiences across devices.',
	},
	{
		icon: <PenTool className="h-6 w-6 text-primary-400" />,
		title: 'UI/UX Design',
		description:
			'User-centered design that balances aesthetics with functionality to create intuitive interfaces.',
	},
	{
		icon: <BarChart className="h-6 w-6 text-primary-400" />,
		title: 'Digital Strategy',
		description:
			'Strategic guidance to help you achieve your business goals through digital solutions.',
	},
	{
		icon: <Globe className="h-6 w-6 text-primary-400" />,
		title: 'E-commerce Solutions',
		description:
			'Custom online stores and shopping experiences built for conversion and ease of use.',
	},
	{
		icon: <Layers className="h-6 w-6 text-primary-400" />,
		title: 'Branding & Identity',
		description:
			'Cohesive brand identities that effectively communicate your values and vision.',
	},
];

const ServicesSection = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
					<p className="text-xl text-muted-foreground">
						Comprehensive digital solutions to help you succeed in today's competitive
						landscape.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
						>
							<div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
								{service.icon}
							</div>
							<h3 className="font-medium text-xl mb-2">{service.title}</h3>
							<p className="text-muted-foreground">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
