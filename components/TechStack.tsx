'use client';
import { Link } from '@heroui/react';
import React from 'react';
import StackIcon from 'tech-stack-icons';

const techStacks = [
	{
		name: 'React',
		icon: <StackIcon name="reactjs" />,
		link: 'https://react.dev/',
	},
	{
		name: 'Next.js',
		icon: <StackIcon name="nextjs2" />,
		link: 'https://nextjs.org/',
	},
	{ name: 'Vue', icon: <StackIcon name="vuejs" />, link: 'https://vuejs.org/' },
	{
		name: 'Node.js',
		icon: <StackIcon name="nodejs" />,
		link: 'https://nodejs.org/',
	},
	{
		name: 'Illustator',
		icon: <StackIcon name="ai" />,
		link: 'https://www.adobe.com/products/illustrator.html',
	},
	{
		name: 'Supabase',
		icon: <StackIcon name="supabase" />,
		link: 'https://supabase.com/',
	},
	{
		name: 'PostgreSQL',
		icon: <StackIcon name="postgresql" />,
		link: 'https://www.postgresql.org/',
	},
	{
		name: 'Angular',
		icon: <StackIcon name="angular17" />,
		link: 'https://angular.io/',
	},
];

const TechStack = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
					<p className="text-xl text-muted-foreground">
						We use cutting-edge technologies to build modern, scalable solutions.
					</p>
				</div>

				<div className="glass-panel rounded-xl p-8 md:p-12">
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
						{techStacks.map((tech, index) => (
							<div key={index} className="flex flex-col items-center">
								<Link
									href={tech.link}
									target="_blank"
									rel="noopener noreferrer"
									className="w-16 h-16 flex items-center justify-center mb-4 animate-pulse-slow"
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									{tech.icon}
								</Link>
								<span className="text-sm font-medium">{tech.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
