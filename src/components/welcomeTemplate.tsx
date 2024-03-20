import * as React from "react";
import logo from "../../public/logo-brock.svg";
import Image from "next/image";

interface WelcomeTemplateProps {
  nome: string;
}

export const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({
  nome,
}) => (
  <div className="text-white">
    <h3>Bem vindo a Brock Investimentos, {nome}!</h3>
    <p> Agradecemos seu contato. </p>
    <p>Em breve um membro da nossa equipe entrará em contato com você</p>
    <div>
      {/* <Image src={logo.src} width={50} height={50} alt="logo" /> */}
    </div>
  </div>
);
