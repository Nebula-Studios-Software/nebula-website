'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
	id: number;
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	size: number;
	speed: number;
	depth: number;
	rotation: number;
}

interface BackgroundStarsProps {
	isTransitioning: boolean;
}

const BackgroundStars = ({ isTransitioning }: BackgroundStarsProps) => {
	const starsRef = useRef<Star[]>([]);
	const [stars, setStars] = useState<Star[]>([]);

	// Generate random stars with start and end positions
	const generateStars = (count: number): Star[] => {
		return Array.from({ length: count }, (_, i) => {
			const angle = Math.random() * Math.PI * 2;
			const radius = 50 + Math.random() * 50;

			const startX = 50 + Math.cos(angle) * (radius * 0.1);
			const startY = 50 + Math.sin(angle) * (radius * 0.1);

			const endX = 50 + Math.cos(angle) * radius;
			const endY = 50 + Math.sin(angle) * radius;

			return {
				id: i,
				startX,
				startY,
				endX,
				endY,
				size: Math.random() * 2 + 0.5,
				speed: Math.random() * 2 + 30,
				depth: Math.random() * 3 + 1,
				rotation: Math.random() * 360,
			};
		});
	};

	// Initialize stars only once
	useEffect(() => {
		if (starsRef.current.length === 0) {
			const newStars = generateStars(300);
			starsRef.current = newStars;
			setStars(newStars);
		}
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
			{stars.map((star) => {
				// Calcola la direzione del movimento
				const dx = star.endX - star.startX;
				const dy = star.endY - star.startY;
				const angle = Math.atan2(dy, dx) * (180 / Math.PI);

				return (
					<motion.div
						key={star.id}
						className="absolute rounded-full cursor-pointer"
						style={{
							width: `${star.size}px`,
							height: `${star.size}px`,
							transform: `translate(-50%, -50%) rotate(${angle}deg)`,
						}}
						initial={{
							left: `${star.startX}%`,
							top: `${star.startY}%`,
							opacity: 0,
							scale: 0.1,
						}}
						animate={{
							left: `${star.endX}%`,
							top: `${star.endY}%`,
							opacity: [0, 1, 0],
							scale: [0.1, 1, 0.1],
						}}
						transition={{
							duration: star.speed,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'linear',
							delay: -star.speed * Math.random(),
						}}
					>
						<motion.div
							className="absolute inset-0 rounded-full"
							style={{
								background: isTransitioning ? 'rgb(79 70 229)' : 'white',
								boxShadow: isTransitioning
									? `0 0 ${star.size * 4}px rgb(79 70 229), 0 0 ${star.size * 8}px rgb(79 70 229)`
									: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.8)`,
							}}
							animate={{
								width: isTransitioning ? '5000%' : '100%',
								height: isTransitioning ? '20%' : '100%',
								opacity: isTransitioning ? 0.2 : 1,
								filter: isTransitioning ? 'blur(5px)' : 'blur(0px)',
							}}
							transition={{
								duration: 0.3,
								ease: 'easeInOut',
							}}
						/>
					</motion.div>
				);
			})}
		</div>
	);
};

export default BackgroundStars;
