import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/_components/email-template';
import { ReactElement } from 'react';

import { ZodFormData } from '@/app/_components/EmailForm';

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req: NextRequest) {
	try {
		const body = JSON.stringify(req.body);
		const formData = ZodFormData.safeParse(body);
		if (!formData.success)
			return NextResponse.json(
				'Datele trimise nu sunt valide. Contactati un administrator daca credeti ca aceasta a fost o greseala.'
			);
		const {
			data: { name, email, subject, message },
		} = formData;
		const res = await resend.emails.send({
			from: `${name} <${email}>`,
			to: ['contact@galagym.ro'],
			subject: `${subject}`,
			react: EmailTemplate({ message, name }) as ReactElement,
		});

		return NextResponse.json(res);
	} catch (error) {
		return NextResponse.json('A aparut o eroare. Reincercati mai tarziu.');
	}
}
