'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CheckmarkAnimationProps {
	title?: string;
	message?: string;
}

const CheckmarkAnimation = ({
	title = 'Grazie! 🎉',
	message = 'Abbiamo ricevuto il tuo messaggio. Ti risponderemo al più presto!',
}: CheckmarkAnimationProps) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
				className="w-20 h-20 rounded-full bg-primary-400/20 flex items-center justify-center"
			>
				<motion.div
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
					className="text-primary-400"
				>
					<Check size={40} />
				</motion.div>
			</motion.div>
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="text-2xl font-bold text-foreground"
			>
				{title}
			</motion.h3>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="text-foreground/80 text-center max-w-md"
			>
				{message}
			</motion.p>
		</div>
	);
};

export default CheckmarkAnimation;
