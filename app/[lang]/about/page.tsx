'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Coffee, Code, Globe, Award } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import { getDictionary } from '../dictionaries';

import Navbar from '@/components/Navbar';

interface TeamMember {
	name: string;
	role: string;
	bio: string;
	imageUrl: string;
}

const teamMembers: TeamMember[] = [
	{
		name: 'Alex Johnson',
		role: 'Founder & CEO',
		bio: 'With over 15 years of experience in tech, Alex founded Nebula Studios with a vision to create digital experiences that inspire and engage users.',
		imageUrl: '/placeholder.svg',
	},
	{
		name: 'Sarah Chen',
		role: 'Creative Director',
		bio: 'Sarah leads our design team with her innovative approach to UX/UI design and her passion for creating beautiful, functional digital products.',
		imageUrl: '/placeholder.svg',
	},
	{
		name: 'Michael Patel',
		role: 'Technical Lead',
		bio: 'Michael brings extensive experience in full-stack development and architectural design to ensure our projects are built on solid technical foundations.',
		imageUrl: '/placeholder.svg',
	},
	{
		name: 'Emma Rodriguez',
		role: 'Project Manager',
		bio: 'Emma excels at coordinating complex projects and ensuring that we deliver high-quality solutions on time and within budget.',
		imageUrl: '/placeholder.svg',
	},
];

const stats = [
	{ icon: <Users />, value: '20+', label: 'Team Members' },
	{ icon: <Trophy />, value: '45+', label: 'Projects Completed' },
	{ icon: <Coffee />, value: '1,200+', label: 'Cups of Coffee' },
	{ icon: <Code />, value: '500K+', label: 'Lines of Code' },
	{ icon: <Globe />, value: '12', label: 'Countries Served' },
	{ icon: <Award />, value: '15', label: 'Industry Awards' },
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

const About = () => {
	const params = useParams();
	const [dictionary, setDictionary] = useState<any>(null);

	useEffect(() => {
		const loadDictionary = async () => {
			try {
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
						<h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
						<p className="text-xl text-muted-foreground">
							We are a team of passionate designers, developers, and strategists
							dedicated to creating exceptional digital experiences.
						</p>
					</motion.div>

					<motion.div
						animate="visible"
						className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
						initial="hidden"
						variants={staggerContainer}
					>
						<motion.div variants={fadeIn}>
							<h2 className="text-3xl font-bold mb-6">Our Story</h2>
							<div className="space-y-4 text-muted-foreground">
								<p>
									Founded in 2018, Nebula Studios began with a simple mission: to create
									digital experiences that are both beautiful and functional. What
									started as a small team of three passionate individuals has grown into
									a diverse group of talented professionals.
								</p>
								<p>
									We believe that great design and technology should be accessible to
									businesses of all sizes. Our approach combines creativity with
									technical expertise to deliver solutions that not only look great but
									also drive real results for our clients.
								</p>
								<p>
									As we&apos;ve grown, our commitment to quality and innovation has
									remained at the core of everything we do. We&apos;re proud to have
									worked with clients across various industries, helping them achieve
									their digital goals and create meaningful connections with their
									audiences.
								</p>
							</div>
						</motion.div>

						<motion.div
							className="glass-card rounded-xl overflow-hidden relative"
							variants={fadeIn}
						>
							<div className="relative aspect-video">
								<Image
									fill
									alt="Nebula Studios Team"
									className="object-cover"
									src="https://placehold.co/600/transparent/white"
								/>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						animate="visible"
						className="mb-20"
						initial="hidden"
						variants={fadeIn}
					>
						<h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="glass-card rounded-xl p-6">
								<h3 className="text-xl font-medium mb-4">Innovation</h3>
								<p className="text-muted-foreground">
									We continuously explore new technologies and approaches to stay ahead
									of the curve and deliver forward-thinking solutions that meet the
									evolving needs of our clients.
								</p>
							</div>
							<div className="glass-card rounded-xl p-6">
								<h3 className="text-xl font-medium mb-4">Collaboration</h3>
								<p className="text-muted-foreground">
									We believe in the power of teamwork and open communication, both within
									our team and with our clients. Together, we create better outcomes than
									any of us could achieve alone.
								</p>
							</div>
							<div className="glass-card rounded-xl p-6">
								<h3 className="text-xl font-medium mb-4">Excellence</h3>
								<p className="text-muted-foreground">
									We are committed to delivering exceptional quality in everything we do,
									from the code we write to the designs we create and the service we
									provide to our clients.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="mb-20 glass-panel rounded-xl p-8"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h2 className="text-3xl font-bold mb-10 text-center">By the Numbers</h2>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="w-12 h-12 rounded-full bg-nebula-400/20 flex items-center justify-center mx-auto mb-4">
										<span className="text-nebula-400">{stat.icon}</span>
									</div>
									<div className="text-3xl font-bold text-nebula-400">{stat.value}</div>
									<div className="text-sm text-muted-foreground">{stat.label}</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						animate="visible"
						className="mb-20"
						initial="hidden"
						variants={fadeIn}
					>
						<h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{teamMembers.map((member, index) => (
								<motion.div
									key={index}
									className="glass-card rounded-xl overflow-hidden"
									transition={{ duration: 0.3 }}
									variants={fadeIn}
									whileHover={{ y: -5 }}
								>
									<div className="aspect-square relative overflow-hidden">
										<Image
											fill
											alt={member.name}
											className="object-cover"
											src={member.imageUrl}
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-medium mb-1">{member.name}</h3>
										<div className="text-nebula-400 text-sm mb-3">{member.role}</div>
										<p className="text-sm text-muted-foreground">{member.bio}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="glass-panel rounded-xl p-8 text-center"
						initial={{ opacity: 0, y: 20 }}
						transition={{ delay: 0.6, duration: 0.6 }}
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							We&apos;re always looking for talented individuals to join our growing
							team. If you&apos;re passionate about digital innovation and want to work
							in a collaborative and creative environment, check out our current
							openings.
						</p>
						<button className="px-6 py-3 rounded-lg bg-nebula-600 hover:bg-nebula-500 text-white font-medium transition-colors">
							View Careers
						</button>
					</motion.div>
				</div>
			</main>
		</div>
	);
};

export default About;
