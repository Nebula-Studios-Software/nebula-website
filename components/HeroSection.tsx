'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Link } from '@heroui/react';
import { useDictionaryContext } from '@/contexts/DictionaryContext';

import MotionDiv from './MotionDiv';

export default function HeroSection() {
	const { dictionary } = useDictionaryContext();

	return (
		<section className="pt-24 pb-16 md:pt-36 md:pb-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<MotionDiv type="fadeInUp">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gradient">
							{dictionary.hero.title}{' '}
							<motion.span
								animate={{
									backgroundPosition: ['0% 50%', '200% 50%'],
								}}
								className="text-gradient-primary-flow"
								style={{
									backgroundSize: '300% 100%',
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: 'linear',
								}}
							>
								{dictionary.hero.titleHighlight}
							</motion.span>
						</h1>
					</MotionDiv>

					<MotionDiv delay={0.2} type="fadeInUp">
						<p className="text-xl text-muted-foreground mb-8">
							{dictionary.hero.subtitle}
						</p>
					</MotionDiv>

					<MotionDiv delay={0.4} type="fadeInUp">
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button
								className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors"
								color="primary"
								variant="shadow"
							>
								{dictionary.hero.buttons.work}
							</Button>
							<Button
								className="px-6 py-3 rounded-lg glass-card hover:bg-white/10 text-white font-medium transition-colors flex items-center justify-center"
								color="primary"
								variant="shadow"
							>
								{dictionary.hero.buttons.contact}
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</MotionDiv>
				</div>
			</div>
		</section>
	);
}
