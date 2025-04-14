export interface Dictionary {
	common: {
		nav: {
			home: string;
			services: string;
			projects: string;
			about: string;
			contact: string;
			getInTouch: string;
		};
		contact: {
			title: string;
			subtitle: string;
			info: {
				email: string;
			};
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
		};
		privacy: {
			title: string;
			lastUpdated: string;
			introduction: string;
			sections: {
				dataCollection: {
					title: string;
					content: string;
				};
				dataUsage: {
					title: string;
					content: string;
				};
				dataProtection: {
					title: string;
					content: string;
				};
				cookies: {
					title: string;
					content: string;
				};
				rights: {
					title: string;
					content: string;
				};
				changes: {
					title: string;
					content: string;
				};
			};
		};
	};
	hero: {
		title: string;
		titleHighlight: string;
		subtitle: string;
		buttons: {
			work: string;
			contact: string;
		};
		services: {
			development: {
				title: string;
				description: string;
			};
			design: {
				title: string;
				description: string;
			};
			strategy: {
				title: string;
				description: string;
			};
		};
	};
	services: {
		title: string;
		subtitle: string;
		items: {
			web: {
				title: string;
				description: string;
			};
			mobile: {
				title: string;
				description: string;
			};
			design: {
				title: string;
				description: string;
			};
			strategy: {
				title: string;
				description: string;
			};
			ecommerce: {
				title: string;
				description: string;
			};
			branding: {
				title: string;
				description: string;
			};
		};
	};
	projects: {
		title: string;
		subtitle: string;
		items: {
			project1: {
				title: string;
				description: string;
				technologies: string[];
			};
			project2: {
				title: string;
				description: string;
				technologies: string[];
			};
			project3: {
				title: string;
				description: string;
				technologies: string[];
			};
		};
	};
	about: {
		title: string;
		subtitle: string;
		description: string;
		team: {
			title: string;
			members: {
				member1: {
					name: string;
					role: string;
					description: string;
				};
				member2: {
					name: string;
					role: string;
					description: string;
				};
				member3: {
					name: string;
					role: string;
					description: string;
				};
			};
		};
	};
}
