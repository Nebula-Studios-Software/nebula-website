'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface MotionDivProps {
	children: ReactNode;
	className?: string;
	variants?: Variants;
	delay?: number;
	duration?: number;
	type?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'none';
}

const defaultVariants = {
	fadeIn: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	},
	fadeInUp: {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	},
	fadeInLeft: {
		hidden: { opacity: 0, x: 20 },
		visible: { opacity: 1, x: 0 },
	},
	fadeInRight: {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1 },
	},
	none: {
		hidden: {},
		visible: {},
	},
};

const MotionDiv: React.FC<MotionDivProps> = ({
	children,
	className = '',
	variants,
	delay = 0,
	duration = 0.5,
	type = 'fadeIn',
}) => {
	const selectedVariants = variants || defaultVariants[type];

	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-100px' }}
			variants={selectedVariants}
			transition={{
				delay,
				duration,
				ease: 'easeOut',
			}}
		>
			{children}
		</motion.div>
	);
};

export default MotionDiv;
