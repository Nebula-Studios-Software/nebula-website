'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface InteractiveElement {
	element: Element;
	rect: DOMRect;
}

const CustomCursor = () => {
	const [isHovering, setIsHovering] = useState(false);
	const [isClicking, setIsClicking] = useState(false);
	const [nearestElement, setNearestElement] =
		useState<InteractiveElement | null>(null);
	const cursorX = useMotionValue(0);
	const cursorY = useMotionValue(0);
	const springConfig = { damping: 20, stiffness: 200 }; // Più simile al cursore del mouse
	const springX = useSpring(cursorX, springConfig);
	const springY = useSpring(cursorY, springConfig);
	const checkInterval = useRef<NodeJS.Timeout>();

	// Calcola la distanza tra il cursore e un elemento
	const getDistance = (x: number, y: number, rect: DOMRect) => {
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
	};

	// Trova l'elemento più vicino
	const findNearestElement = (x: number, y: number) => {
		const interactiveElements = document.querySelectorAll(
			'a, button, input, textarea, [role="button"], .card, .interactive'
		);

		let nearest: InteractiveElement | null = null;
		let minDistance = 50; // Raggio di attrazione ridotto a 50px

		interactiveElements.forEach((element) => {
			const rect = element.getBoundingClientRect();
			const distance = getDistance(x, y, rect);

			if (distance < minDistance) {
				minDistance = distance;
				nearest = { element, rect };
			}
		});

		setNearestElement(nearest);
	};

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);
			findNearestElement(e.clientX, e.clientY);
		};

		const handleMouseDown = () => setIsClicking(true);
		const handleMouseUp = () => setIsClicking(false);

		// Aggiungi event listener per gli elementi interattivi
		const interactiveElements = document.querySelectorAll(
			'a, button, input, textarea, [role="button"], .interactive, [role="link"]'
		);
		interactiveElements.forEach((element) => {
			element.addEventListener('mouseenter', () => setIsHovering(true));
			element.addEventListener('mouseleave', () => setIsHovering(false));
		});

		// Controlla periodicamente la posizione del cursore
		checkInterval.current = setInterval(() => {
			const x = cursorX.get();
			const y = cursorY.get();
			findNearestElement(x, y);
		}, 50);

		window.addEventListener('mousemove', moveCursor);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			interactiveElements.forEach((element) => {
				element.removeEventListener('mouseenter', () => setIsHovering(true));
				element.removeEventListener('mouseleave', () => setIsHovering(false));
			});
			if (checkInterval.current) clearInterval(checkInterval.current);
		};
	}, []);

	// Calcola la forma del cursore in base all'elemento più vicino
	const getCursorStyle = () => {
		if (!nearestElement) return {};

		const { rect } = nearestElement;
		const element = nearestElement.element as HTMLElement;
		const computedStyle = window.getComputedStyle(element);

		return {
			width: `${rect.width}px`,
			height: `${rect.height}px`,
			borderRadius:
				computedStyle.borderRadius === '0px'
					? 'var(--radius)'
					: computedStyle.borderRadius,
			border: '1px solid rgba(123,109,234,0.5)',
			backgroundColor: 'rgba(255,255,255,0.1)',
			transition: 'all 0.2s ease-out',
		};
	};

	return (
		<>
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9999]"
				style={{
					x: springX,
					y: springY,
					translateX: nearestElement ? '-50%' : '-50%',
					translateY: nearestElement ? '-50%' : '-50%',
					width: nearestElement ? 'auto' : '1.5rem',
					height: nearestElement ? 'auto' : '1.5rem',
					...getCursorStyle(),
				}}
			>
				{/* Punto centrale */}
				{!nearestElement && (
					<motion.div
						className="absolute inset-0 rounded-xl bg-primary/10"
						animate={{
							scale: isClicking ? 0.8 : 1,
							opacity: isClicking ? 0.6 : 1,
						}}
						transition={{ duration: 0.1 }}
					/>
				)}

				{/* Bordo */}
				{!nearestElement && (
					<motion.div
						className="absolute inset-0 rounded-xl border border-primary"
						animate={{
							scale: isHovering ? 1.2 : 1,
							opacity: isHovering ? 0.8 : 0.4,
						}}
						transition={{ duration: 0.2 }}
					/>
				)}

				{/* Effetto di traccia */}
				{!nearestElement && (
					<motion.div
						className="absolute inset-0 rounded-xl bg-primary/10"
						animate={{
							scale: isHovering ? 1.4 : 1.2,
							opacity: isHovering ? 0.2 : 0.1,
						}}
						transition={{ duration: 0.3 }}
					/>
				)}
			</motion.div>

			{/* Nascondi il cursore di default */}
			<style jsx global>{`
				* {
					cursor: none !important;
				}
			`}</style>
		</>
	);
};

export default CustomCursor;
