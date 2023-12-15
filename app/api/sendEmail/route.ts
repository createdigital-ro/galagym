import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend'
import { EmailTemplate } from '@/app/_components/email-template';
import { ReactElement } from 'react';

const resend = new Resend(process.env.RESEND_SECRET);

type FormData = {
    name: string,
    email: string,
    subject: string,
    message: string
} 

export async function POST(req: NextRequest) {
try {
    const body = JSON.stringify(req.body)
    const {name, email, subject, message} = JSON.parse(body) as FormData
    const res = await resend.emails.send({
      from: `${name} <${email}>`,
      to: ['contact@galagym.ro'],
      subject: `${subject}`,
      react: EmailTemplate( {message, name} ) as ReactElement
    });

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error });
  }
}