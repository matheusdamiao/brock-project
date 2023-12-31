"use client";
export const dynamic = "force-dynamic";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import pdfIcon from "./../../public/pdf-icon.svg";

const Form = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: React.SetStateAction<File | null>[]) => {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0]);
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const encode = (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    if (file) {
      formData.append("file", file, file.name);
    }

    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Obrigado por testar!");
    // try {
    //   const data = {
    //     "form-name": "contact",
    //     name,
    //     email,
    //     phone,
    //     message,
    //   };
    //   console.log(file);
    //   const res = await fetch("https://fabform.io/f/m8WRx_T", {
    //     method: "POST",
    //     headers: { "Content-Type": "multipart/form-data; boundary=random" },
    //     // headers: { "Content-Type": "application/json" },
    //     body: encode(data),
    //     // body: JSON.stringify(data),
    //   });
    //   console.log(res);
    //   const result = res.json();
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    }
    if (name === "email") {
      return setEmail(value);
    }
    if (name === "message") {
      return setMessage(value);
    }
    if (name === "phone") {
      return setPhone(value);
    }
  };

  return (
    <div className="text-black max-w-7xl m-auto px-6 lg:px-0 py-10 lg:py-16 w-full">
      <h3 className="font-body text-lg lg:text-3xl text-[#494949]">
        Tem uma proposta de negócio para nos apresentar?{" "}
      </h3>
      <form
        // data-netlify="true"
        // data-netlify-honeypot="bot-field"

        onSubmit={handleSubmit}
        // name="contact"
        method="post"
        className="flex flex-col h-full"
      >
        {" "}
        <h4 className="text-[#494949] pt-10 pb-4 font-body text-sm lg:text-xl">
          {" "}
          Preencha abaixo com suas informações
        </h4>
        <div className="flex gap-4 items-start lg:flex-nowrap flex-wrap flex-col lg:flex-row">
          <p className="relative float-label-input !m-0  ">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder=""
              onChange={handleChange}
              className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal text-[#494949] focus:border-blue-400"
            />
            <label
              htmlFor="name"
              className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker"
            >
              Nome
            </label>
          </p>
          <p className="relative float-label-input !m-0">
            <input
              type="text"
              name="phone"
              className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal text-[#494949] focus:border-blue-400"
              value={phone}
              placeholder=""
              onChange={handleChange}
            />
            <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
              Telefone
            </label>
          </p>
          <p className="relative float-label-input !m-0">
            <input
              type="email"
              name="email"
              placeholder=""
              className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal text-[#494949] focus:border-blue-400"
              value={email}
              onChange={handleChange}
            />
            <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
              E-mail
            </label>
          </p>
        </div>
        <p className="relative float-label-input !mt-3">
          <textarea
            name="message"
            value={message}
            placeholder=""
            className=" w-full max-w-xs h-24 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal text-[#494949] focus:border-blue-400"
            onChange={handleChange}
          />
          <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
            Mensagem
          </label>
        </p>
        <h4 className="pb-5 text-[#494949]">Apresentação:</h4>
        <div
          className="relative border-2 rounded-md border-[#A7A7A7] h-[100px] max-w-[400px] w-full border-dashed flex items-center justify-center"
          {...getRootProps()}
        >
          <input
            {...getInputProps()}
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png, .pdf"
          />
          {!isDragActive && !file ? (
            <p className="text-[#A7A7A7] text-sm px-6 text-center lg:px-0">
              Arraste o documento aqui ou faça download
            </p>
          ) : (
            file &&
            file.type == "application/pdf" && (
              <div className="flex flex-col items-center justify-center">
                <img src={pdfIcon.src} alt="" />
                <p> {file.name}</p>
              </div>
            )
          )}

          <button
            type="button"
            className="bg-[#3F5C9A] w-12 h-12 rounded-full absolute right-[-25px] flex items-center justify-center"
          >
            <p className="text-white text-5xl h-[110%] block">+</p>
          </button>
        </div>
        <p className="max-w-2xl flex items-start mt-6 gap-3">
          <input type="checkbox" />
          <small className="font-body text-xs leading-none max-w-[500px] text-[#494949]">
            Eu permito que a Brock processe meus dados de acordo com a Política
            de Privacidade, usando-os para atender minha solicitação de produtos
            e serviços.*
          </small>
        </p>
        <button
          className="mt-10 h-full font-body font-bold text-lg lg:text-2xl max-w-[400px] text-white px-6 py-6 rounded-[10px] min-h-[74px] w-full bg-[#3F5C9A]"
          type="submit"
        >
          Enviar proposta de negócio
        </button>
      </form>
      {/* <div className="h-screen w-full left-0 top-0 ">
        <div className="flex items-center justify-center">
          {status === "enviado"}
        </div>
      </div> */}
    </div>
  );
};

export default Form;
