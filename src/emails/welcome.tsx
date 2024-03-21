import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Recebemos seu contato - Brock Investments</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Bem-vindo a Brock</Heading>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Olá, {name}! <br /> Recebemos seu contato e agradecemos por expressar
          seu interesse em evoluir sua empresa conosco. Em breve entraremos em
          contato.
        </Text>

        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "10px",
            marginBottom: "16px",
            fontSize: "14px",
            lineHeight: "16px",
          }}
        >
          Esta é uma mensagem automática, por favor não respondê-la. Para mais
          informações, entre em contato pelo email
          secretaria@brockempreendimentos.com.br
        </Text>
        <Img
          src="https://res.cloudinary.com/dxovlysx1/image/upload/v1710969606/logo-brock-black_1_cwrevw.png"
          width="100"
          height="43"
          alt="Brock's Logo"
        />
        <Hr style={hr} />

        <Text style={footer}>
          Rua Joaquim Floriano, 72 Conj. 141 e 142 Parte Edif. Sao Paulo Head
          Offices Itaim Bibi, São Paulo, SP
        </Text>
      </Container>
    </Body>
  </Html>
);

// WelcomeEmail.PreviewProps = {
//   name: "Matheus",
// } as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "20px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  margin: "18px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "10px",
  lineHeight: "18px",
  marginTop: "10px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};

const hr = {
  borderColor: "#cccccc",
  margin: "10px 0",
};
