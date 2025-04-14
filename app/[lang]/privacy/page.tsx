'use client';

import { useDictionary } from '@/hooks/useDictionary';
import { Button } from '@heroui/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
	const dict = useDictionary();

	return (
		<div className="pt-16 pb-16 bg-background text-foreground min-h-screen flex flex-col">
			<div className="max-w-4xl mx-auto">
				<div className="mb-8">
					<Button
						as={Link}
						href="/"
						startContent={<ArrowLeft size={16} />}
						variant="light"
						color="default"
					>
						Back to Home
					</Button>
				</div>

				<div className="glass-panel p-8 rounded-xl">
					<h1 className="text-4xl font-bold mb-4">{dict.common.privacy.title}</h1>
					<p className="text-sm text-gray-400 mb-8">
						{dict.common.privacy.lastUpdated}: {new Date().toLocaleDateString()}
					</p>

					<div className="prose prose-invert max-w-none">
						<p className="mb-8">{dict.common.privacy.introduction}</p>

						{Object.entries(dict.common.privacy.sections).map(([key, section]) => {
							const typedSection = section as {
								title: string;
								content: string;
							};
							return (
								<div key={key} className="mb-8">
									<h2 className="text-2xl font-semibold mb-4">{typedSection.title}</h2>
									<p>{typedSection.content}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
