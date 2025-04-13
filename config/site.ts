import { Home, Briefcase, Users, Info, Mail } from 'lucide-react';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Nebula Studio',
	description:
		'A forward-thinking development studio crafting exceptional digital experiences.',
	navItems: [
		{
			name: 'Home',
			path: '/',
			icon: Home,
			translationKey: 'home',
		},
		{
			name: 'Services',
			path: '/services',
			icon: Briefcase,
			translationKey: 'services',
		},
		{
			name: 'Projects',
			path: '/projects',
			icon: Users,
			translationKey: 'projects',
		},
		{
			name: 'About',
			path: '/about',
			icon: Info,
			translationKey: 'about',
		},
	],
	links: {
		github: 'https://github.com/nebula-studio',
		twitter: 'https://twitter.com/nebula-studio',
		linkedin: 'https://linkedin.com/company/nebula-studio',
	},
};
