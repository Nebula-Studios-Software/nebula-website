'use client';

import React from 'react';
import { ChevronRight, Zap, Code, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionDiv from './MotionDiv';
import { Button } from '@nextui-org/react';
import { Link } from '@nextui-org/react';

interface HeroSectionProps {
	dict: {
		title: string;
		titleHighlight: string;
		subtitle: string;
		buttons: {
			work: string;
			contact: string;
		};
		services: {
			development: {
				title: string;
				description: string;
			};
			design: {
				title: string;
				description: string;
			};
			strategy: {
				title: string;
				description: string;
			};
		};
	};
}

export default function HeroSection({ dict }: HeroSectionProps) {
	return (
		<section className="pt-24 pb-16 md:pt-36 md:pb-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<MotionDiv type="fadeInUp">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gradient">
							{dict.title}{' '}
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
								{dict.titleHighlight}
							</motion.span>
						</h1>
					</MotionDiv>

					<MotionDiv type="fadeInUp" delay={0.2}>
						<p className="text-xl text-muted-foreground mb-8">{dict.subtitle}</p>
					</MotionDiv>

					<MotionDiv type="fadeInUp" delay={0.4}>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button
								color="primary"
								variant="shadow"
								className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors"
							>
								{dict.buttons.work}
							</Button>
							<Button
								color="primary"
								variant="shadow"
								className="px-6 py-3 rounded-lg glass-card hover:bg-white/10 text-white font-medium transition-colors flex items-center justify-center"
							>
								{dict.buttons.contact}
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</MotionDiv>
				</div>
			</div>
		</section>
	);
}
