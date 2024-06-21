import React from "react";
import logo from "./../../public/logo-brock-white.svg";

const Footer = () => {
  return (
    <footer className="bg-[#111726] mt-32">
      <div className="px-6  py-16 h-full w-full flex flex-col max-w-7xl m-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="" className="max-w-[100px]" />
        <div className="text-[#E6E7EB] pt-8 font-body font-normal flex flex-col gap-4">
          <a href="/#contact">Contato</a>
          {/* <p>Impulsionamos o crescimento de negócios visionários</p> */}
          {/* <p>email@brockinvestimentos.com</p> */}
          <div className="flex flex-col flex-wrap text-[#BCC1D1] ">
            <p>Endereço: Rua Joaquim Floriano, 72</p>
            <p>Conj. 141 e 142 Parte Edif. Sao Paulo Head Offices</p>
            <p>Itaim Bibi, São Paulo, SP.</p>
            <p> CEP: 04534-000</p>
          </div>
        </div>
        <span className="bg-[#494949] h-[1px] w-[90%] block mt-10 lg:mt-8"></span>
        <p className="text-[#E6E7EB] text-center pt-3 font-body">
          @2024 BROCK - Todos direitos reservados{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
