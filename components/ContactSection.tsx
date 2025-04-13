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
} from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckmarkAnimation from './CheckmarkAnimation';
import { useTranslation } from '../hooks/useTranslation';

const ContactSection = () => {
	const { t } = useTranslation();
	const [translations, setTranslations] = useState<any>({});
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
	const [termsChecked, setTermsChecked] = useState<boolean>(false);
	const [showSuccess, setShowSuccess] = useState<boolean>(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	useEffect(() => {
		const loadTranslations = async () => {
			const contact = await t('common.contact');
			setTranslations(contact);
		};
		loadTranslations();
	}, [t]);

	const validateMessage = (value: string) => {
		if (value.length < 10) {
			return 'Please describe your project in detail';
		}
		return null;
	};

	const validateSubject = (value: string) => {
		if (value.length > 50) {
			return 'Please be more concise with your subject';
		}
		return null;
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(true);

		if (!termsChecked) {
			return;
		}

		console.log('Form Data:', {
			...formData,
			terms: termsChecked,
		});

		// Simuliamo l'invio del form
		setTimeout(() => {
			setShowSuccess(true);
		}, 500);

		// TODO: Send form data to server
		//
		// ------------------------------

		// Nascondiamo il messaggio di successo dopo 5 secondi
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
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								{translations.title}
							</h2>
							<p className="text-muted-foreground mb-8">{translations.subtitle}</p>

							<div className="space-y-6 mb-8">
								<div className="flex items-start">
									<div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
										<Mail className="h-5 w-5 text-primary-400" />
									</div>
									<div className="ml-4">
										<h4 className="text-sm font-medium text-foreground/80">
											{translations.info?.email}
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
													label={translations.form?.name}
													type="text"
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													className="w-full"
													labelPlacement="outside"
													placeholder={translations.form?.name}
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

											<Divider />

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
												validate={validateSubject}
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
												validate={validateMessage}
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
												{translations.form?.terms}{' '}
												<Link href="/privacy" className="text-primary-400 hover:underline">
													{translations.form?.privacy}
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
												{translations.form?.send}
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
											title={translations.form?.success?.title}
											message={translations.form?.success?.message}
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
};

export default ContactSection;
