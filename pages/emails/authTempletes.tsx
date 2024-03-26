import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface DropboxResetPasswordEmailProps {
    user?: {[key:string]:any};
    index: number
  }

  const allEmailData = [
    {
        title:"Your password was updated",
        previewText: "password Update",
        body:{
            
            text1: `You recently requested a password change for Cryptonomized account. Your password has been successfully changed`,
            text2:"if you did not do this or made this request, kindly contact our support team"
        }
    },
    {
        title:"Your profile has been updated",
        previewText: "Profile update",
        body:{
            
            text1: `You recently requested a profile update for Cryptonomized account. Your ccount has been successfully updated`,
            text2:"if you did not do this or made this request, kindly contact our support team",
        },
    }
   
  ]
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const authTemplete = ({
    user,
    index = 0
  }: DropboxResetPasswordEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>{allEmailData[index].previewText}</Preview>
        <Tailwind>

        <Body style={main}>
          <Container style={container}>
            <Img
              src={"https://cryptonomized.info/assets/img/apple-touch-icon.png"}
              width="40"
              height="33"
              alt="Dropbox"
            />
            <Section>
              <Text style={text}>Hi {user?.firstname},</Text>
              <Text style={text}>
                {allEmailData[index].body.text1}
              </Text>
              <Text style={text}>
                {allEmailData[index].body.text2}
              </Text>
              <Text style={text}>
                Date {new Date().toLocaleTimeString(undefined, {year:"numeric",month:"short",day:"2-digit",hour:"2-digit", minute:"2-digit"})}
              </Text>
              <Text style={text}>
                To keep your account secure, please don&apos;t forward this email
                to anyone. See our Help Center for{" "}
                <Link style={anchor} href="https://cryptonomized.co">
                  more security tips.
                </Link>
              </Text>
              <Text style={text}>Happy Trading!</Text>
            </Section>
            
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
  
  export default authTemplete;
  
  const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
  };
  
  const text = {
    fontSize: "16px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
  };
  
  
  const anchor = {
    textDecoration: "underline",
  };