'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@heroui/link';
import { cn } from '@/lib/utils';
import { Image } from '@heroui/react';
interface Project {
	id: number;
	title: string;
	category: string;
	imageUrl: string;
	link: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Cosmos Financial Dashboard',
		category: 'Web Application',
		imageUrl: '/placeholder.svg',
		link: '/work/cosmos-financial',
	},
	{
		id: 2,
		title: 'Stellar Mobile App',
		category: 'Mobile Design & Development',
		imageUrl: '/placeholder.svg',
		link: '/work/stellar-app',
	},
	{
		id: 3,
		title: 'Eclipse E-commerce Platform',
		category: 'Web Platform',
		imageUrl: '/placeholder.svg',
		link: '/work/eclipse-ecommerce',
	},
];

const ProjectsSection = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-3">Selected Work</h2>
						<p className="text-muted-foreground max-w-2xl">
							Explore some of our recent projects and see how we&apos;ve helped clients
							achieve their digital goals.
						</p>
					</div>
					<Link
						href="/work"
						className="mt-4 md:mt-0 group flex items-center text-primary-400 hover:text-primary-300 transition-colors"
					>
						View all projects
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Link
							key={project.id}
							href={project.link}
							className={cn(
								'group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl',
								'hover:shadow-primary-800/10 hover:border-primary-700/30'
							)}
						>
							<div className="aspect-video w-full bg-primary-900 relative overflow-hidden">
								<Image
									src={project.imageUrl}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
							<div className="p-6">
								<div className="text-sm text-primary-400 mb-2">{project.category}</div>
								<h3 className="text-xl font-medium mb-2 group-hover:text-primary-400 transition-colors">
									{project.title}
								</h3>
								<div className="flex items-center text-sm text-muted-foreground group-hover:text-primary-400 transition-colors">
									View Project
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
