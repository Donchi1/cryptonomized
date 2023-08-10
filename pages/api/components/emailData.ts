import { DocumentData } from "firebase/firestore"

const emailData = {
  accessCodeProve: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Access Code Prove',
    html: `<h1>Your access code prove has been sent successfully.
     We will get back to you in less than 24 hour time </h1>
  <br/>
    <small> © ${new Date().getFullYear()}
    <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
     Reserved</small>
             `,
  }),
  accessCode: (user: DocumentData, accessCode: string) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Access Code',
    html: `<h1>Your access code has been successfully created </h1>
                    <p>${accessCode} happy trading</p>
                    <br/>
                    <p>this email contains sensitive informations</p>
                     <small> © ${new Date().getFullYear()}
                 <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  payment: (profile: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: profile?.email,
    subject: 'payment prove ',
    html: `<h1>Your payment prove was sent successfully wait for less than 24 hours while we confirm your payment.</h1>
    <p>Thank.</p>
              
                    <br/>
                  <small> © ${new Date().getFullYear()}
                 <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),

  welcome: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Welcome',
    html: `<h1>Hi ${user?.firstname} you are welcome to ultimatecoins</h1>
                    <p>We are happy to see you</p>
                    <p>Make your life changing investment and enjoy while sit at home</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                   <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
                  
             `,
  }),

  passwordUpdate: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'password Update',
    html: `<h1>${
      user?.firstname
    } your password has been successfully changed</h1>
                    <p>if you did not do this, kindly contact our support team</p>
                     <p>Time ${new Date()}</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                   <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  passwordReset: (email: string) => ({
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: 'password Update',
    html: `<h1>Your password has been successfully changed</h1>
                    <p>if you did not do this, kindly contact our support team</p>
                     <p>Time ${new Date()}</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                   <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  profileUpdate: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'profile Update',
    html: `<h1>${user.firstname} you have updated your profile</h1>
                    <p>if you did not do this, kindly contact our support team</p>
                     <p>Time ${new Date()}</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                   <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  withdrawals: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Withdrawal Information',
    html: `<h1>${
      user?.firstname
    } your withdrawal has been placed successfully</h1>
                    <p>We will get back to you in less than 24 hours</p>
                     <p>Time ${new Date()}</p>
                    <br/>
                    <small> © ${new Date().getFullYear()}
                   <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  contacts: (user: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user?.email,
    subject: 'Contact Notification',
    html: `<h1>${user.name} thank you for contacting us</h1>
                    <p>We will get back to you soon.</p>                   
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
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
    html: `<h1>Thank you for subscribing for our newsletter</h1>
                    <p>We will reach out to you if there is any information</p>                   
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  investment: (user: DocumentData, investment: any) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Investment',
    html: `<h1>You have successfully invested €${investment?.amount} in our platform.</h1>
                    <p>Expected profit: €${investment?.expectedProfit}</p>                   
                    <p>Date: ${investment?.date}</p>                   
                    <p>Ending Date: ${investment?.endingDate}</p> 
                    <h5>Don't fail to contact us if you have  any questions</h5>              
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  transaction: (user: DocumentData, transaction: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: user.email,
    subject: 'Transaction',
    html: `<h1>Transaction has been done on your account. </h1>
                    <p>Please check it out to know more.</p>                   
                    <p>Date: ${transaction?.date}</p>                 
                    <h5>Don't fail to contact us if you have  any questions</h5>              
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  transferSender: (sender: DocumentData, receiver: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: sender.email,
    subject: 'Transfered',
    html: `<h1>You have successfully transfered ${receiver.amount} to ${receiver.firstname}  </h1>
                    <p>Please check it out to know more.</p>                   
                    <p>Date: ${new Date().toDateString()}</p>                 
                    <h5>Don't fail to contact us if you have  any questions</h5>              
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
  transferReceiver: (sender: DocumentData, receiver: DocumentData) => ({
    from: process.env.EMAIL_SENDER,
    to: receiver.email,
    subject: 'Transfer Received',
    html: `<h1>You have successfully received ${receiver.amount} from ${sender.firstname}  </h1>
                                    
                    <p>Date: ${new Date().toDateString()}</p>                 
                    <h5>Don't fail to contact us if you have issues</h5>              
                    <br/>
                    <small> © ${new Date().getFullYear()}
                  <a href="https://cryptonomized.info"> Cryptonomize</a> All Rights
                  Reserved</small>
             `,
  }),
}

export default emailData
