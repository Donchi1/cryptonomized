
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import emailData from "../components/emailData"
import { sendMail } from '../components/sendmailTransporter'


type Data = {
  message: string | object


}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
    const { sender, receiver } = req.body


 return sendMail(emailData.transferSender(sender, receiver))
   .then(() => {
    sendMail(emailData.transferReceiver(sender, receiver)).then(() => {
        return res.json({ message: 'Success' })

    }).catch((err: any) => {
        return res.status(403).json({ message: err })
      })
   })
   .catch((err: any) => {
     return res.status(403).json({ message: err })
   })
}
