'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
	children: ReactNode;
	delay?: number;
}

const fadeInUp = {
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

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	delay = 0,
}) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-100px' }}
			variants={fadeInUp}
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
