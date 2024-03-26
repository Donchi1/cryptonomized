import * as React from "react";
import { Body, Container, Head, Html, Img, Preview, Row, Section, Tailwind, Text, Link} from '@react-email/components'


interface TransactionEmailProps {
     info: {[key: string]: any}
}


//contact message reply templete
function transactionTemplete({info}: TransactionEmailProps) {

  return(
          <Html>
            <Head />
            <Preview>{info?.previewText}</Preview>
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
                  <Text style={text}>Hi Dear,</Text>
                  <Text style={text}>
                    {info.body?.text1}
                  </Text>
                  <Text style={text}>
                    {info.body?.text2}
                  </Text>
                  <Text style={text}>
                    {info.body?.text3}
                  </Text>
                  <Text style={text}>
                    {info.body?.text4}
                  </Text>
                  <Text style={text}>
                    {info.body?.text5}
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
      
      export default transactionTemplete;
      
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