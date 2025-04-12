'use client';

import React from 'react';
import { ChevronRight, Zap, Code, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionDiv from './MotionDiv';
import { Button } from '@heroui/react';

const HeroSection = () => {
	return (
		<section className="pt-24 pb-16 md:pt-36 md:pb-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<MotionDiv type="fadeInUp">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gradient">
							We build digital products that{' '}
							<motion.span
								className="text-gradient-primary-flow"
								animate={{
									backgroundPosition: ['0% 50%', '200% 50%'],
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: 'linear',
								}}
								style={{
									backgroundSize: '300% 100%',
								}}
							>
								matter
							</motion.span>
						</h1>
					</MotionDiv>

					<MotionDiv type="fadeInUp" delay={0.2}>
						<p className="text-xl text-muted-foreground mb-8">
							A forward-thinking development studio crafting exceptional digital
							experiences for startups and brands.
						</p>
					</MotionDiv>

					<MotionDiv type="fadeInUp" delay={0.4}>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button
								color="primary"
								variant="shadow"
								className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors"
							>
								View Our Work
							</Button>
							<Button
								color="primary"
								variant="solid"
								className="px-6 py-3 rounded-lg glass-card hover:bg-white/10 text-white font-medium transition-colors flex items-center justify-center"
							>
								Get in Touch
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</MotionDiv>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<MotionDiv
						className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
						type="fadeInUp"
						delay={0.6}
					>
						<div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
							<Code className="h-6 w-6 text-primary-400" />
						</div>
						<h3 className="font-medium text-xl mb-2">Development</h3>
						<p className="text-muted-foreground">
							We craft robust, scalable applications using cutting-edge technologies
							and best practices.
						</p>
					</MotionDiv>

					<MotionDiv
						className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
						type="fadeInUp"
						delay={0.8}
					>
						<div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
							<PenTool className="h-6 w-6 text-primary-400" />
						</div>
						<h3 className="font-medium text-xl mb-2">Design</h3>
						<p className="text-muted-foreground">
							User-centered design that&apos;s both beautiful and functional, creating
							memorable experiences.
						</p>
					</MotionDiv>

					<MotionDiv
						className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-800/10 hover:border-primary-700/30"
						type="fadeInUp"
						delay={1.0}
					>
						<div className="w-12 h-12 rounded-full bg-primary-400/20 flex items-center justify-center mb-4">
							<Zap className="h-6 w-6 text-primary-400" />
						</div>
						<h3 className="font-medium text-xl mb-2">Strategy</h3>
						<p className="text-muted-foreground">
							Strategic digital solutions aligned with your business goals for maximum
							impact.
						</p>
					</MotionDiv>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
