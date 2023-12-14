import React from "react";
import logo from "./../../public/logo-brock.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] mt-32">
      <div className="px-6 lg:px-0 py-8 h-full w-full flex flex-col max-w-7xl m-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="" className="max-w-[100px]" />
        <div className="text-[#494949] pt-8 font-body font-normal flex flex-col gap-4">
          <p>Frase de efeito</p>
          <p>email@brockinvestimentos.com</p>
          <div className="flex flex-col flex-wrap ">
            <p>Endereço: Rua Joaquim Floriano, 72</p>
            <p>Conj. 141 e 142 Parte Edif. Sao Paulo Head Offices</p>
            <p>Itaim Bibi, São Paulo, SP.</p>
            <p> CEP: 04534-000</p>
          </div>
        </div>
        <span className="bg-[#494949] h-[1px] w-[90%] block mt-10 lg:mt-8"></span>
        <p className="text-[#494949] text-center pt-3">
          @2023 BROCK - Todos direitos reservados{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
