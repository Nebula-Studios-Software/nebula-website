'use client';
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
	Button,
	Checkbox,
	Divider,
	Form,
	Input,
	Textarea,
	Link,
} from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckmarkAnimation from './CheckmarkAnimation';
import MotionDiv from './MotionDiv';

interface ContactSectionProps {
	dict: {
		title: string;
		subtitle: string;
		form: {
			name: string;
			email: string;
			subject: string;
			message: string;
			terms: string;
			privacy: string;
			send: string;
			success: {
				title: string;
				message: string;
			};
		};
		info: {
			email: string;
		};
	};
}

export default function ContactSection({ dict }: ContactSectionProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [termsChecked, setTermsChecked] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!termsChecked) return;

		// Simuliamo l'invio del form
		setShowSuccess(true);
		setTimeout(() => {
			setShowSuccess(false);
		}, 5000);
	};

	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="glass-panel rounded-xl overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="p-8 md:p-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
							<p className="text-muted-foreground mb-8">{dict.subtitle}</p>

							<div className="space-y-6 mb-8">
								<div className="flex items-start">
									<div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
										<Mail className="h-5 w-5 text-primary-400" />
									</div>
									<div className="ml-4">
										<h4 className="text-sm font-medium text-foreground/80">
											{dict.info.email}
										</h4>
										<a
											href="mailto:hello@nebulastudios.dev"
											className="text-primary-400 hover:underline"
										>
											hello@nebulastudios.dev
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
										<Phone className="h-5 w-5 text-primary-400" />
									</div>
									<div className="ml-4">
										<h4 className="text-sm font-medium text-foreground/80">Phone</h4>
										<a
											href="tel:+15551234567"
											className="text-primary-400 hover:underline"
										>
											+1 (555) 123-4567
										</a>
									</div>
								</div>

								<div className="flex items-start">
									<div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
										<MapPin className="h-5 w-5 text-primary-400" />
									</div>
									<div className="ml-4">
										<h4 className="text-sm font-medium text-foreground/80">Location</h4>
										<p className="text-foreground">
											123 Cosmic Way, San Francisco, CA 94107
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="p-8 md:p-12 bg-primary-950/50">
							<AnimatePresence mode="wait">
								{!showSuccess ? (
									<motion.div
										initial={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<Form className="space-y-6" onSubmit={handleSubmit}>
											<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
												<Input
													label={dict.form.name}
													type="text"
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													className="w-full"
													labelPlacement="outside"
													placeholder={dict.form.name}
													isRequired
													isClearable
													classNames={{
														base: 'w-full',
														inputWrapper:
															'w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400',
														input: 'w-full',
													}}
												/>
												<Input
													label="Email"
													type="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													className="w-full"
													labelPlacement="outside"
													placeholder="Your Email"
													isRequired
													isClearable
													classNames={{
														base: 'w-full',
														inputWrapper:
															'w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400',
														input: 'w-full',
													}}
												/>
											</div>

											<Input
												label="Subject"
												fullWidth
												type="text"
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												labelPlacement="outside"
												placeholder="Project Inquiry"
												isRequired
												isClearable
												classNames={{
													inputWrapper:
														'w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400',
												}}
											/>

											<Textarea
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												rows={5}
												placeholder="Tell us about your project"
												labelPlacement="outside"
												label="Message"
												isRequired
												isClearable
												classNames={{
													inputWrapper:
														'w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400',
												}}
											/>

											<Checkbox
												id="terms"
												isRequired
												onChange={(e) => {
													setTermsChecked(e.target.checked);
												}}
											>
												{dict.form.terms}{' '}
												<Link href="/privacy" className="text-primary-400 hover:underline">
													{dict.form.privacy}
												</Link>
											</Checkbox>

											<Button
												type="submit"
												isDisabled={!termsChecked}
												fullWidth
												variant="shadow"
												color="primary"
												startContent={<Mail size={16} />}
											>
												{dict.form.send}
											</Button>
										</Form>
									</motion.div>
								) : (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
										className="h-full flex items-center justify-center"
									>
										<CheckmarkAnimation
											title={dict.form.success.title}
											message={dict.form.success.message}
										/>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
