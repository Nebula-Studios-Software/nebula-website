'use client';
import React from 'react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = ({ dictionary }: { dictionary: any }) => {
	return (
		<div className="min-h-screen">
			<Navbar dictionary={dictionary} />
			<main className="pt-32 pb-20">
				<ContactForm />
			</main>
		</div>
	);
};

export default Page;
