'use client';

import React, { ChangeEvent, useState } from 'react';

import toast from 'react-hot-toast';
import * as z from 'zod';

export const ZodFormData = z.object({
	name: z.string({
		required_error: 'Trebuie sa introduceti un email.',
		invalid_type_error: 'Numele nu este un sir de caractere valid.',
	}),
	email: z.string().email({ message: 'Adresa de email introdusa este invalida.' }),
	subject: z
		.string({
			required_error: 'Trebuie sa introduceti un mesaj.',
			invalid_type_error: 'Mesajul nu este un sir de caractere valid.',
		})
		.min(5, { message: 'Subiectul trebuie sa aiba cel putin 5 caractere.' }),
	message: z
		.string({
			required_error: 'Trebuie sa introduceti un mesaj.',
			invalid_type_error: 'Mesajul nu este un sir de caractere valid.',
		})
		.min(10, { message: 'Mesajul trebuie sa aiba cel putin 10 caractere.' }),
});

const EmailForm = () => {
	const emptyData = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};
	const [formData, setFormData] = useState(emptyData);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const parseRes = ZodFormData.safeParse(formData);
		if (!parseRes.success) return toast.error(parseRes.error.errors[0].message);
		try {
			const res = await fetch('/api/sendEmail', {
				method: 'POST',
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				toast.success('Email-ul a fost trimis cu succes.');
				setFormData(emptyData);
			} else {
				setFormData(formData);
			}
		} catch (error) {
			return toast.error(`${error}`);
		}
	};

	const inputStyles = 'border-b-2 pb-1 focus:outline-none';

	return (
		<form
			onSubmit={handleSubmit}
			className='border-4 border-[#0f0f0f] p-8 flex flex-col w-[290px] sm:w-[330px] xl:w-[500px] xl:h-[520px]'
		>
			<h1 className='text-2xl font-semibold text-[#0f0f0f] lg:text-3xl xl:text-5xl'>Trimite-ne un mail</h1>
			<h3 className='text-2xl xl:text-3xl font-bold text-[#0f0f0f] mb-10'>contact@galagym.ro</h3>
			<div className='flex flex-col gap-8 xl:gap-10'>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					placeholder='Nume intreg'
					className={inputStyles}
				/>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					placeholder='Adresa de email'
					className={inputStyles}
				/>
				<input
					type='text'
					name='subject'
					value={formData.subject}
					onChange={handleChange}
					placeholder='Subiect'
					className={inputStyles}
				/>
				<input
					type='text'
					name='message'
					value={formData.message}
					onChange={handleChange}
					placeholder='Mesaj'
					className={inputStyles}
				/>
				<button
					type='submit'
					className=' bg-[#0f0f0f] w-full transition px-4 xl:px-6 xl:text-lg text-center xl:py-2 text-white rounded-lg mx-auto mt-2 py-1 hover:shadow-[2px_2px] hover:shadow-yellow-400 active:scale-105 active:shadow-yellow-400 active:shadow-[2px_2px] active:text-yellow-400'
				>
					Trimite
				</button>
			</div>
		</form>
	);
};

export default EmailForm;
