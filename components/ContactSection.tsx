import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="glass-panel rounded-xl overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="p-8 md:p-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Let&apos;s Work Together
							</h2>
							<p className="text-muted-foreground mb-8">
								Ready to discuss your project? Get in touch with us to schedule a free
								consultation.
							</p>

							<div className="space-y-6 mb-8">
								<div className="flex items-start">
									<div className="mt-1 w-10 h-10 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
										<Mail className="h-5 w-5 text-primary-400" />
									</div>
									<div className="ml-4">
										<h4 className="text-sm font-medium text-foreground/80">Email</h4>
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
							<form className="space-y-6">
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-foreground/80 mb-1"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-foreground/80 mb-1"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400"
											placeholder="Your email"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-foreground/80 mb-1"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400"
										placeholder="Project inquiry"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-foreground/80 mb-1"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={5}
										className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-400"
										placeholder="Tell us about your project"
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full p-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
