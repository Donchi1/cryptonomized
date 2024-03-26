
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail (data:any) {
   return resend.emails.send(data)
 
}