

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import emailData from "../components/emailData"
import { sendMail } from '../components/sendmailTransporter'
import { Resend } from 'resend';


type Data = {
  message: string | object
}

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
    const info = req.body




try{


await sendMail(emailData.message(info));
return res.json({message: "success"})
}catch(error: any){
    console.log(error)
  return res.status(403).json({message: error.message})
}  

}
