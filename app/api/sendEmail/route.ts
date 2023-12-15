import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST() {
try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: 
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}