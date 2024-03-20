import * as React from "react";
import logo from "../../public/logo-brock.svg";
import Image from "next/image";

interface NewLeadTemplateProps {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export const NewLeadTemplate: React.FC<Readonly<NewLeadTemplateProps>> = ({
  nome,
  email,
  telefone,
  mensagem,
}) => (
  <div className="text-white">
    <h3>Novo lead no site</h3>
    <p> Nome: {nome} </p>
    <p>E-mail: {email}</p>
    <p>Telefone : {telefone}</p>
    <p>Mensagem: {mensagem} </p>
    <div>
      {/* <Image src={logo.src} width={50} height={50} alt="logo" /> */}
    </div>
  </div>
);
