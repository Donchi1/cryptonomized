
import * as React from "react";



import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Tailwind,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";



const allEmailData = [
    {
        title:"Hello Welcome to Cryptonomize",
        previewText: "Cryptonomize Welcome",
        body:{
            text1: "Congratulations! You're joining the best platform for your crypto investment and fund maximization.",
            text2:"Here's how to get started:"
        },
        actionBtn: true
    },
    {
        title:"Thanks for contacting us",
        previewText: "Contact Message",
        body:{
            text1: " We have successfully received your message and we are glad to hear from you. We will get back to you as soon as possible.",
            text2:"Thanks"
        },
        actionBtn: false,
    },
    {
        title:"Thank you for subscribing for our newsletter",
        previewText: "Newsletter",
        body:{
            text1: "We will reach out to you on news and informations concerning our platform and other related news",
            text2:"Thanks for your time"
        },
        actionBtn: false,
    },
    {
        title:"Thanks for uploading your payment prove",
        previewText: "Payment Prove",
        body:{
            text1: "Your payment prove was sent successfully wait for less than 24 hours while we confirm your payment.",
            text2:"Thanks"
        },
        actionBtn: false,
    },
    {
        title:"Thanks for uploading your access payment prove",
        previewText: "Access code Prove",
        body:{
            text1: "Your access code prove has been sent successfully. We will get back to you in less than 24 hour time",
            text2:"Thanks for trusting us"
        },
        actionBtn: false,
    },
    {
        title:"Your access code has been successfully created",
        previewText: "Access code",
        body:{
            text1: "We want to gladly inform you that your access code has been successfully created",
            text2:"Thanks for trusting us"
        },
        actionBtn: false,
    }
    
]

interface EmailProps {
    text?: string;
    index: number

}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.BASE_URL;



export const emailTemplete = ({
    index
}: EmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{allEmailData[index].previewText}</Preview>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: "#2250f4",
                                offwhite: "#fafbfb",
                            },
                            spacing: {
                                0: "0px",
                                20: "20px",
                                45: "45px",
                            },
                        },
                    },
                }}
            >
                <Body className="bg-offwhite text-base font-sans">
                    <Container className="bg-white p-45">
                        <Img
                            src={"https://cryptonomized.info/assets/img/apple-touch-icon.png"}
                            width="100"
                            height="100"
                            alt="logo"
                            className="mx-auto mb-20 mt-[17px] object-cover"
                        />
                        <Heading className="text-center my-0 leading-8">
                            {allEmailData[index].title}
                        </Heading>

                        <Section>
                            <Row>
                                <Text className="text-base">
                                   {allEmailData[index].body.text1}

                                </Text>

                                <Text className="text-base">{allEmailData[index].body.text2}:</Text>
                            </Row>
                        </Section>


                        {allEmailData[index].actionBtn && <Section className="text-center my-4">
                            <Link href="https://cryptonomized.co/user" className="bg-brand cursor-pointer text-white rounded-lg py-3 px-[18px]">
                                Go to your dashboard
                            </Link>
                        </Section>}


                    </Container>



                    <Container className="mt-[17px]">

                        <Text className="text-center text-gray-400 mb-5">
                            820 king Road kensington, London United Kingdon
                        </Text>

                        <Text className="text-center"> © {new Date().getFullYear()}
                            <Link href="https://cryptonomized.co"> Cryptonomize</Link> All Rights
                            Reserved</Text>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default emailTemplete;


