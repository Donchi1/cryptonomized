export const allEmailTransData = {
    transferSender: (receiver: {[key:string]: any}) => ({
        previewText: "Cryptonomize Welcome",
        body:{
            text1: `You have successfully transfered ${receiver.amount} to ${receiver.firstname}`,
            text2:"Please check it out to know more",
            text3: `Date: ${new Date().toDateString()}`,
            text4: "Don't fail to contact us if you have  any questions",
        },
    }),
    transferReceiver:(receiver: {[key:string]: any}, sender: {[key:string]: any}) => ({
        previewText: "Contact Message",
        body:{
            text1: `You have successfully received ${receiver?.amount} from ${sender?.firstname}`,
            text2:`Date: ${new Date().toDateString()}`,
            text3:"Don't fail to contact us if you have issues"
        },
    }),
    investment: (investment:{[key:string]: any}) => ({
        previewText: "Investment",
        body:{
            text1: `You have successfully invested £${investment?.amount} in our platform.`,
            text2:`Expected profit: £${investment?.expectedProfit}`,
            text3:`Date: ${investment?.date}`,
            text4:`Ending Date: ${investment?.endingDate}`,
            text5:"Don't fail to contact us if you have  any questions"
        },
    }),
    transaction:(transaction: {[key:string]: any}) => ({
        previewText: "transaction",
        body:{
            text1: "Transaction has been performed on your account.",
            text2:"Please check it out to know more.",
            text3:`Date: ${transaction?.date}`,
            text4:"Don't fail to contact us if you have  any questions"
        },
    }),
    withdrawals:(user: {[key:string]: any}) => ({
        previewText: "withdrawal",
        body:{
            text1: `${user?.firstname} your withdrawal has been placed successfully`,
            text2:"We will get back to you in less than 24 hours",
            text3:`Time ${new Date().toLocaleString()}`
        }
    })
}