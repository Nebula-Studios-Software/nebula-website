'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, Clipboard, X } from 'lucide-react';
import { Input, Button, Textarea, Link, addToast } from '@heroui/react';
const fadeIn = {
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

const phoneNumber = '+39 348 315 4551';

const handleCopy = () => {
	navigator.clipboard.writeText(phoneNumber);
	addToast({
		title: 'Phone number copied to clipboard',
		description: 'You can now paste it into your phone',
		variant: 'flat',
		color: 'success',
		classNames: {
			closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
		},
		closeIcon: <X />,
	});
};

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// In a real application, you would send this data to your backend or a form service

		// Show success message or reset form
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: '',
		});

		alert('Thank you for your message! We will get back to you soon.');
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<motion.div
				className="text-center max-w-3xl mx-auto mb-16"
				initial="hidden"
				animate="visible"
				variants={fadeIn}
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
				<p className="text-xl text-muted-foreground">
					Have a project in mind or want to learn more about our services? We&apos;d
					love to hear from you.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl font-bold mb-6">Send us a message</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Input
								label="Your Name"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="John Doe"
								required
							/>
						</div>

						<div className="space-y-2">
							<Input
								label="Email Address"
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@example.com"
								required
							/>
						</div>

						<div className="space-y-2">
							<Input
								label="Subject"
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								placeholder="Project Inquiry"
								required
							/>
						</div>

						<div className="space-y-2">
							<Textarea
								label="Message"
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Tell us about your project..."
								required
								rows={6}
							/>
						</div>

						<Button
							type="submit"
							className="w-full bg-primary-600 hover:bg-primary-500"
						>
							<Send className="mr-2 h-4 w-4" />
							Send Message
						</Button>
					</form>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h2 className="text-2xl font-bold mb-6">Contact Information</h2>
					<div className="glass-card rounded-xl p-6 mb-8">
						<div className="space-y-6">
							<div className="flex items-start">
								<Phone className="h-5 w-5 text-primary-400 mt-1 mr-3" />
								<div>
									<h3 className="font-medium">Call Us</h3>
									<Link
										color="foreground"
										onPress={handleCopy}
										className="flex items-center cursor-pointer gap-2"
										underline="always"
									>
										<p className="text-muted-foreground">+39 348 315 4551</p>
										<Clipboard size={16} className="mt-1 mr-3 text-muted-foreground" />
									</Link>
								</div>
							</div>

							<div className="flex items-start">
								<Mail className="h-5 w-5 text-primary-400 mt-1 mr-3" />
								<div>
									<h3 className="font-medium">Email Us</h3>
									<Link
										href="mailto:hello@nebulastudio.dev"
										className="text-muted-foreground"
										isExternal
										showAnchorIcon
										color="foreground"
										underline="always"
									>
										hello@nebulastudio.dev
									</Link>
								</div>
							</div>

							<div className="flex items-start">
								<Clock className="h-5 w-5 text-primary-400 mt-1 mr-3" />
								<div>
									<h3 className="font-medium">Business Hours</h3>
									<p className="text-muted-foreground">
										Monday - Friday: 9am - 6pm CET
										<br />
										Saturday & Sunday: Closed
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="glass-card rounded-xl overflow-hidden aspect-video">
						{/* In a real application, you would embed a Google Map here */}
						<div className="w-full h-full bg-primary-900/50 flex items-center justify-center">
							<p className="text-center text-muted-foreground">
								Interactive map would be displayed here
							</p>
						</div>
					</div>
				</motion.div>
			</div>

			<motion.div
				className="glass-panel rounded-xl p-8 text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.6 }}
			>
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					Looking for a career with us?
				</h2>
				<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
					We&apos;re always looking for talented individuals to join our team. Check
					out our careers page for current opportunities.
				</p>
				<Button variant="shadow" color="primary">
					View Careers
				</Button>
			</motion.div>
		</div>
	);
};

export default ContactForm;
