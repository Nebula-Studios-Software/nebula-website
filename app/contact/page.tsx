'use client';
import React from 'react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="pt-32 pb-20">
				<ContactForm />
			</main>
		</div>
	);
};

export default Page;
