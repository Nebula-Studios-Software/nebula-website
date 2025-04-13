'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundStars from '@/components/BackgroundStars';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Project {
	id: number;
	title: string;
	category: string;
	description: string;
	client: string;
	year: string;
	imageUrl: string;
	technologies: string[];
	featured: boolean;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Cosmos Financial Dashboard',
		category: 'Web Application',
		description:
			'A comprehensive financial dashboard allowing users to track investments, analyze market trends, and manage their portfolio with intuitive data visualization.',
		client: 'Cosmos Finance Inc.',
		year: '2024',
		imageUrl: '/placeholder.svg',
		technologies: ['React', 'TypeScript', 'NextJS', 'Recharts', 'Tailwind CSS'],
		featured: true,
	},
	{
		id: 2,
		title: 'Stellar Mobile App',
		category: 'Mobile Design & Development',
		description:
			'A cross-platform mobile application for astronomy enthusiasts, providing real-time sky mapping, celestial event notifications, and educational content.',
		client: 'Astronomy Foundation',
		year: '2023',
		imageUrl: '/placeholder.svg',
		technologies: ['React Native', 'GraphQL', 'Node.js', 'Firebase', 'Map API'],
		featured: true,
	},
	{
		id: 3,
		title: 'Eclipse E-commerce Platform',
		category: 'Web Platform',
		description:
			'A fully-featured e-commerce platform with customizable storefronts, inventory management, secure payment processing, and analytics dashboard.',
		client: 'Eclipse Retail Solutions',
		year: '2023',
		imageUrl: '/placeholder.svg',
		technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
		featured: true,
	},
	{
		id: 4,
		title: 'Orbit CRM System',
		category: 'Web Application',
		description:
			'A customer relationship management system designed for sales teams, with pipeline visualization, contact management, and performance analytics.',
		client: 'Orbit Sales Tech',
		year: '2022',
		imageUrl: '/placeholder.svg',
		technologies: ['React', 'Express', 'MongoDB', 'Chart.js', 'Socket.io'],
		featured: false,
	},
	{
		id: 5,
		title: 'Nebula Marketing Website',
		category: 'Web Design & Development',
		description:
			'A stunning marketing website with animated interactions, customized content management system, and integrated analytics tracking.',
		client: 'Nebula Marketing Group',
		year: '2022',
		imageUrl: '/placeholder.svg',
		technologies: [
			'Gatsby',
			'Framer Motion',
			'GraphCMS',
			'GSAP',
			'Styled Components',
		],
		featured: false,
	},
	{
		id: 6,
		title: 'Pulsar Booking Platform',
		category: 'Web Application',
		description:
			'An online booking and reservation system for a chain of luxury hotels, featuring real-time availability, payment processing, and user accounts.',
		client: 'Pulsar Hospitality',
		year: '2021',
		imageUrl: '/placeholder.svg',
		technologies: ['Vue.js', 'Node.js', 'MySQL', 'AWS', 'Stripe'],
		featured: false,
	},
];

const staggerChildren = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

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

const Page = ({ dictionary }: { dictionary: any }) => {
	return (
		<div className="min-h-screen">
			<Navbar dictionary={dictionary} />
			<main className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center max-w-3xl mx-auto mb-20"
						initial="hidden"
						animate="visible"
						variants={fadeIn}
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
						<p className="text-xl text-muted-foreground">
							Explore our portfolio of projects where creativity meets technical
							excellence. Each project represents our commitment to quality and
							innovation.
						</p>
					</motion.div>

					<motion.div
						className="mb-16"
						initial="hidden"
						animate="visible"
						variants={staggerChildren}
					>
						<h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{projects
								.filter((project) => project.featured)
								.map((project) => (
									<motion.div
										key={project.id}
										variants={fadeIn}
										className={cn(
											'group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl',
											'hover:shadow-primary-800/10 hover:border-primary-700/30'
										)}
									>
										<div className="aspect-video w-full bg-primary-900 relative overflow-hidden">
											<img
												src={project.imageUrl}
												alt={project.title}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										</div>
										<div className="p-6">
											<div className="text-sm text-primary-400 mb-2">
												{project.category}
											</div>
											<h3 className="text-xl font-medium mb-3 group-hover:text-primary-400 transition-colors">
												{project.title}
											</h3>
											<p className="text-muted-foreground text-sm mb-4 line-clamp-3">
												{project.description}
											</p>
											<div className="flex items-center text-sm text-primary-400">
												View Case Study
												<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
											</div>
										</div>
									</motion.div>
								))}
						</div>
					</motion.div>

					<motion.div initial="hidden" animate="visible" variants={staggerChildren}>
						<h2 className="text-2xl font-bold mb-8">All Projects</h2>
						<div className="grid grid-cols-1 gap-6">
							{projects.map((project) => (
								<motion.div
									key={project.id}
									variants={fadeIn}
									className="glass-card rounded-xl p-6 hover:border-primary-700/30 transition-all duration-300"
								>
									<div className="flex flex-col md:flex-row md:items-center">
										<div className="mb-4 md:mb-0 md:mr-6">
											<h3 className="text-xl font-medium">{project.title}</h3>
											<div className="text-sm text-primary-400 mb-2">
												{project.category} • {project.year}
											</div>
											<p className="text-muted-foreground mb-4 max-w-3xl">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.map((tech, index) => (
													<span
														key={index}
														className="px-3 py-1 bg-primary-400/10 rounded-full text-xs text-primary-300"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
										<div className="md:ml-auto">
											<button className="flex items-center px-4 py-2 rounded-lg glass-card hover:bg-white/5 transition-colors">
												View Details
												<ExternalLink className="ml-2 h-4 w-4" />
											</button>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						className="glass-panel rounded-xl p-8 mt-16 text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.6 }}
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							Ready to start your project?
						</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							Have a project in mind? We'd love to discuss how we can bring your vision
							to life with our expertise and creativity.
						</p>
						<button className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors">
							Get in Touch
						</button>
					</motion.div>
				</div>
			</main>
		</div>
	);
};

export default Page;
