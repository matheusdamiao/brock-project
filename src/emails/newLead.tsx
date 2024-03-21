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

interface NewLeadProps {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export const NewLead = ({ nome, email, telefone, mensagem }: NewLeadProps) => (
  <Html>
    <Head />
    <Preview>Novo Lead - Brock Investments</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Novo Lead do site </Heading>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Recebemos um novo contato pelo site.
        </Text>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Nome: {nome} <br />
          E-mail: {email} <br />
          Telefone: {telefone} <br />
          Mensagem: {mensagem}
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

// NewLead.PreviewProps = {
//   nome: "Matheus",
//   email: "matheus.damiaoliveira@gmail.com",
//   telefone: "29239329",
//   mensagem: "Minha empresa tem interesse de evoluir com a Brock.",
// } as NewLeadProps;

export default NewLead;

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
