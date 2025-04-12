'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SpaceShip = () => {
	// Utilizzo un approccio più semplice e diretto
	return (
		<div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
			{/* Navicella che si muove da sinistra a destra */}
			<motion.div
				className="absolute"
				style={{
					width: '30px',
					height: '15px',
					top: '30%',
				}}
				initial={{ left: '-30px' }}
				animate={{
					left: ['0%', '100%'],
					top: ['30%', '60%', '40%', '70%', '30%'],
				}}
				transition={{
					duration: 20,
					ease: 'linear',
					repeat: Infinity,
					repeatType: 'loop',
				}}
			>
				{/* Forma della navicella */}
				<div className="relative w-full h-full">
					{/* Corpo principale */}
					<div className="absolute w-full h-[60%] bg-white rounded-full top-[20%]"></div>

					{/* Parte frontale a punta */}
					<div className="absolute right-0 w-[40%] h-full bg-white rounded-r-full"></div>

					{/* Cabina */}
					<div className="absolute left-[30%] top-[30%] w-[20%] h-[40%] bg-blue-400 rounded-full"></div>

					{/* Propulsore con effetto fiamma */}
					<motion.div
						className="absolute left-[-15px] top-[25%] w-[20px] h-[50%]"
						animate={{
							width: ['15px', '25px', '15px'],
						}}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						<div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-l-full" />
					</motion.div>
				</div>
			</motion.div>

			{/* Seconda navicella che si muove in un percorso diverso */}
			<motion.div
				className="absolute"
				style={{
					width: '20px',
					height: '10px',
					top: '70%',
				}}
				initial={{ right: '-20px' }}
				animate={{
					right: ['0%', '100%'],
					top: ['70%', '40%', '80%', '60%', '70%'],
				}}
				transition={{
					duration: 25,
					ease: 'linear',
					repeat: Infinity,
					repeatType: 'loop',
				}}
			>
				{/* Forma della seconda navicella (più piccola e diversa) */}
				<div className="relative w-full h-full">
					<div className="absolute w-full h-[60%] bg-gray-200 rounded-full top-[20%]"></div>
					<div className="absolute left-0 w-[40%] h-full bg-gray-200 rounded-l-full"></div>
					<div className="absolute right-[30%] top-[30%] w-[20%] h-[40%] bg-green-400 rounded-full"></div>
					<motion.div
						className="absolute right-[-10px] top-[25%] w-[15px] h-[50%]"
						animate={{
							width: ['10px', '18px', '10px'],
						}}
						transition={{
							duration: 0.8,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						<div className="w-full h-full bg-gradient-to-l from-blue-500 via-purple-400 to-indigo-300 rounded-r-full" />
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default SpaceShip;
