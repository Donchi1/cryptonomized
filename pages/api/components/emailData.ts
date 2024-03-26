import { DocumentData } from "firebase/firestore"
import transactionTempletes from "../../emails/transactionalTemplete"
import emailTemplete from "../../emails/emailTemplete"
import authTemplete from "../../emails/authTempletes"
import { allEmailTransData } from "../components/transEmailData"


const emailData = {
  message: (info: any) => ({
    from: `Cryptonomize <${process.env.EMAIL_SENDER}>`,
    to: [info?.to],
    subject: info?.subject,
    react: emailTemplete({ index: 0 })

  }),
  accessCodeProve: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Access Code Prove',
    react: emailTemplete({ index: 4 })
  }),
  accessCode: (user: DocumentData, accessCode: string) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Access Code',
    react: emailTemplete({ index: 5 })
  }),
  payment: (profile: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: profile?.email,
    subject: 'payment prove ',
    react: emailTemplete({ index: 3 })
  }),


  passwordUpdate: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'password Update',
    react: authTemplete({ index: 0, user })
  }),
  passwordReset: (email: string, user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: 'password Update',
    react: authTemplete({ index: 0, user })

  }),
  profileUpdate: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'profile Update',
    react: authTemplete({ index: 1, user })
  }),
  withdrawals: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Withdrawal Information',
    react: transactionTempletes({ info: allEmailTransData.withdrawals(user) })
  }),
  contacts: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Contact Notification',
    react: emailTemplete({ index: 1 })
  }),
  contactsForAdmin: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: process.env.TO,
    subject: 'Contact Notification',
    html: `<h1>${user?.name} just contacted you</h1>
                    <p>Login now and check it out</p>                   
                    <br/>
                    <small> © ${new Date().getFullYear()}
                   <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  newsLetters: (email: string) => ({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: 'Newsletter',
    react: emailTemplete({ index: 2 })
  }),
  investment: (user: DocumentData, investment: any) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Investment',
    react: transactionTempletes({ info: allEmailTransData.investment(user) })
  }),
  transaction: (user: DocumentData, transaction: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Transaction',
    react: transactionTempletes({ info: allEmailTransData.transaction(user) })
  }),
  transferSender: (sender: DocumentData, receiver: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: sender.email,
    subject: 'Transfered',
    react: transactionTempletes({ info: allEmailTransData.transferSender(receiver) })
  }),
  transferReceiver: (sender: DocumentData, receiver: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: receiver.email,
    subject: 'Transfer Received',
    react: transactionTempletes({ info: allEmailTransData.transferReceiver(receiver, sender) })
  }),
}

export default emailData
