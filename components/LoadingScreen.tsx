'use client';
import { Progress } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface LoadingScreenProps {
	isLoading: boolean;
	language: string;
}

const quotes = {
	it: 'Atterrando in Italia',
	en: 'Landing in the United States',
};

export function LoadingScreen({ isLoading, language }: LoadingScreenProps) {
	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm"
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{
							duration: 0.5,
							type: 'spring',
							bounce: 0.4,
						}}
						className="flex flex-col items-center gap-4"
					>
						<Rocket className="h-12 w-12 text-primary-500" />
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-sm font-medium text-foreground/60"
						>
							{quotes[language as keyof typeof quotes]}
						</motion.div>

						<Progress
							isIndeterminate
							aria-label="Loading..."
							className="max-w-md"
							size="sm"
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
