import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
	id: number;
	content: string;
	author: string;
	position: string;
	company: string;
	rating: number;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		content:
			'Nebula Studios transformed our digital presence completely. Their team took the time to understand our business and delivered a solution that exceeded our expectations.',
		author: 'Alex Johnson',
		position: 'CEO',
		company: 'TechForward',
		rating: 5,
	},
	{
		id: 2,
		content:
			'Working with Nebula was a game-changer for our startup. Their technical expertise and creative approach helped us launch our platform months ahead of schedule.',
		author: 'Sarah Williams',
		position: 'Founder',
		company: 'InnovateLabs',
		rating: 5,
	},
	{
		id: 3,
		content:
			'The Nebula team is incredibly talented and professional. They delivered our e-commerce platform on time and on budget, with all the features we needed and more.',
		author: 'Michael Chen',
		position: 'CTO',
		company: 'RetailNova',
		rating: 5,
	},
];

const TestimonialsSection = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						What Our Clients Say
					</h2>
					<p className="text-xl text-muted-foreground">
						We&apos;re proud of the relationships we build and the results we deliver.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="glass-card rounded-xl p-8 relative">
							<Quote className="absolute top-6 right-6 h-12 w-12 text-primary-400/10" />

							<div className="flex mb-4">
								{Array.from({ length: testimonial.rating }).map((_, i) => (
									<Star key={i} className="h-5 w-5 text-primary-400 fill-primary-400" />
								))}
							</div>

							<p className="text-foreground mb-6">&quot;{testimonial.content}&quot;</p>

							<div>
								<p className="font-medium">{testimonial.author}</p>
								<p className="text-sm text-muted-foreground">
									{testimonial.position}, {testimonial.company}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
