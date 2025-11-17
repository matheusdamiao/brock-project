"use client";
export const dynamic = "force-dynamic";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import pdfIcon from "./../../public/pdf.svg";
import pptIcon from "./../../public/ppt.svg";
import docIcon from "./../../public/doc.svg";
import { toast } from "react-toastify";
import { createClient } from "@/utils/supabase/client";
import { removeDiacritics } from "@/utils/removeDiacritics";

interface SupabaseUploadResponse {
  data: { path: string; fullPath: string } | null;
  error: any | null;
}

const Form = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(null);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const supabase = createClient();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!acceptedFiles || acceptedFiles.length === 0) {
        return;
      }
      console.log(acceptedFiles);
      // TODO: adicionar checagem de tamanho do file
      const selected = acceptedFiles[0];
      if (selected.size > 28 * 1024 * 1024) {
        toast.error("O arquivo não pode ser maior que 28MB");
        return;
      }
      setFile(selected);
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // toast.success("Preparando o envio...", {
      //   autoClose: 1500,
      // });

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);
      let toastId;
      if (file) {
        toastId = toast.loading("Anexando seu arquivo. Aguarde", {
          autoClose: false,
        });

        console.log('olha o file', file)
        const cleanedFileName = String(new Date().getTime()) + removeDiacritics(file.name)
        const bucket = "brock/propostas";
        const data = await supabase.storage
          .from(bucket)
          .upload(cleanedFileName, file);

        const castedResponse = data as SupabaseUploadResponse;

        if(castedResponse.error) {
          console.log('erro:', castedResponse.error)
          toast.update(toastId, {
            render: "Erro ao carregar arquivo. Tente novamente",
            type: "error",
            autoClose: 2000,
            isLoading: false,
          })
           setIsLoading(false);
           setIsSent(false);
          return
        }

        // console.log("olha a informação aí", castedResponse);
        formData.append(
          "file",
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${castedResponse.data.fullPath}`
        );

        formData.append("fileName", cleanedFileName);

        // console.log("olha o path todo aí", formData.get("file"));
        // console.log("olha o nome  aí", formData.get("fileName"));
      }

      const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });
      const resposta = await res.json();
       console.log('res da API', resposta)
      if(!resposta.success) {

         toast.update(toastId, {
            render: resposta.message,
            type: "error",
            autoClose: 2000,
            isLoading: false,
          })
           setIsLoading(false);
           setIsSent(false);
          return 
      } 



      toast.update(toastId, {
          render: "Arquivo carregado!",
          type: "success",
          autoClose: 1000,
          isLoading: false,
      });

      toast.success('Mensagem enviada com sucesso!', {
        autoClose: 3000
      })

      setIsLoading(false);
      
     

      

      // toast.update(toastId, {
      //   render: "Arquivo carregado!",
      //   type: "success",
      //   autoClose: 1000,
      //   isLoading: false,
      // });

      // toast.success("Mensagem enviada! Obrigado!", {
      //   autoClose: 4000,
      // });

      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setFile(null);
      setTimeout(() => {
        setIsSent(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setIsSent(false);
      console.log(error);
    }
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
    <div
      id="contact"
      className="text-black max-w-7xl m-auto px-6 lg:px-0 py-10 lg:py-[120px] w-full "
    >
      <h3 className="lg:text-4xl text-3xl text-[#3C5086] font-body font-bold text-center">
        Torne-se um parceiro
      </h3>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col h-full font-body max-w-2xl m-auto"
      >
        {" "}
        <h4 className="text-[#7A7A7A] pt-6 lg:pb-16 pb-10 text-center font-body lg:text-lg text-base">
          {" "}
          Se está buscando investimento para um negócio que tem o perfil que queremos, você pode nos enviar uma apresentação, preenchendo seus dados no espaço a seguir
        </h4>
        <div className="flex gap-4 items-start lg:flex-nowrap flex-wrap flex-col lg:flex-row">
          <p className="relative float-label-input !m-0 w-full lg:max-w-[200px] ">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder=""
              required
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
          <p className="relative float-label-input !m-0 w-full lg:max-w-[200px]">
            <input
              type="text"
              name="phone"
              required
              className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal text-[#494949] focus:border-blue-400"
              value={phone}
              placeholder=""
              onChange={handleChange}
            />
            <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
              Telefone
            </label>
          </p>
          <p className="relative float-label-input !m-0 w-full lg:max-w-[240px]">
            <input
              type="email"
              name="email"
              required
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
            className=" w-full max-w-full h-24 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal text-[#494949] focus:border-blue-400"
            onChange={handleChange}
          />
          <label className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">
            Mensagem
          </label>
        </p>
        <h4 className="pb-0 text-[#494949]">Apresentação*:</h4>
        <small className="text-[#888888] pb-4">
          *Envie arquivos com extensões .pdf, .ppt ou .doc e tamanho não
          superior a <b>28MB</b>.
        </small>
        <div
          className="relative border-2 rounded-md border-[#A7A7A7] h-[150px] cursor-pointer  w-full border-dashed flex items-center justify-center"
          {...getRootProps()}
        >
          <input
            {...getInputProps()}
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png, .pdf, .pptx"
          />
          {!isDragActive && !file ? (
            <p className="text-[#A7A7A7] text-sm px-6 text-center lg:px-0">
              Clique aqui para adicionar seu documento
            </p>
          ) : file && file.type == "application/pdf" ? (
            <div className="flex flex-col items-center justify-center">
              <img src={pdfIcon.src} alt="" />
              <p className="text-center"> {file.name}</p>
            </div>
          ) : file.type ==
            "application/vnd.openxmlformats-officedocument.presentationml.presentation" ? (
            <div className="flex flex-col items-center justify-center">
              <img src={pptIcon.src} alt="" />
              <p className="text-center text-sm"> {file.name}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img src={docIcon.src} alt="" />
              <p> {file.name}</p>
            </div>
          )}

          <button
            type="button"
            className="bg-[#3F5C9A] w-12 h-12 rounded-full absolute right-[-25px] flex items-center justify-center"
          >
            <p className="text-white text-5xl h-[85%] block">+</p>
          </button>
        </div>
        {/* <p className="max-w-2xl flex items-start mt-6 gap-3">
          <input type="checkbox" />
          <small className="font-body text-xs leading-none max-w-[500px] text-[#494949]">
            Eu permito que a Brock processe meus dados de acordo com a Política
            de Privacidade, usando-os para atender minha solicitação de produtos
            e serviços.*
          </small>
        </p> */}
        <button
          className="bg-[#3C5086] mt-[20px] text-[#ffff] text-base border-[#3C5086] border-[1px] font-body px-6 py-4 rounded-[9px]"
          type="submit"
        >
          {isLoading ? (
            <div
              role="status"
              className="flex items-center justify-center gap-4"
            >
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              {/* <span className="">Enviando..</span> */}
            </div>
          ) : isSent ? (
            <p>Mensagem enviada!</p>
          ) : (
            <p> Enviar mensagem </p>
          )}
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
