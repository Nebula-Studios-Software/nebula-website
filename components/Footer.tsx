'use client';

import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from '@heroui/link';

const Footer = () => {
	return (
		<footer className="py-12 mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="glass-panel rounded-xl px-6 py-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="md:col-span-1">
							<div className="flex items-center space-x-2 mb-4">
								<Sparkles className="h-5 w-5 text-primary-400" />
								<span className="text-lg font-bold text-gradient">Nebula Studios</span>
							</div>
							<p className="text-sm text-muted-foreground mb-4">
								Creating stellar digital experiences for forward-thinking businesses.
							</p>
							<div className="flex space-x-4">
								<a
									href="https://github.com"
									className="text-foreground/70 hover:text-primary-400 transition-colors"
								>
									<Github className="h-5 w-5" />
								</a>
								<a
									href="https://twitter.com"
									className="text-foreground/70 hover:text-primary-400 transition-colors"
								>
									<Twitter className="h-5 w-5" />
								</a>
								<a
									href="https://linkedin.com"
									className="text-foreground/70 hover:text-primary-400 transition-colors"
								>
									<Linkedin className="h-5 w-5" />
								</a>
								<a
									href="mailto:hello@nebulastudios.dev"
									className="text-foreground/70 hover:text-primary-400 transition-colors"
								>
									<Mail className="h-5 w-5" />
								</a>
							</div>
						</div>

						<div>
							<h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
								Services
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/services/web-development"
										className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
									>
										Web Development
									</Link>
								</li>
								<li>
									<Link
										href="/services/ux-design"
										className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
									>
										UX/UI Design
									</Link>
								</li>
								<li>
									<Link
										href="/services/branding"
										className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
									>
										Branding
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
								Company
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/about"
										className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="text-muted-foreground hover:text-primary-400 transition-colors text-sm"
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
								Contact
							</h3>
							<ul className="space-y-2">
								<li className="text-muted-foreground text-sm">
									hello@nebulastudios.dev
								</li>
								<li className="text-muted-foreground text-sm">+1 (555) 123-4567</li>
								<li className="text-muted-foreground text-sm">
									123 Cosmic Way, San Francisco, CA 94107
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-12 pt-8 border-t border-white/10">
						<p className="text-xs text-muted-foreground text-center">
							© {new Date().getFullYear()} Nebula Studios. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
