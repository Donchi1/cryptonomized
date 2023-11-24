
export const runtime = 'edge';
export const dynamic = 'force-dynamic';



export async function sendMail(data:any) {
  return await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify(data),
  });
   
 
}