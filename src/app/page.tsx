"use client";
import Form from "@/components/form";
import Nav from "@/components/nav";
import bg from "./../../public/bg.webp";
import Footer from "@/components/footer";
import InvestmentsTheses from "@/components/investmentsTheses";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-white">
      <Nav />
      <section className="w-full h-[80svh] lg:h-[90svh] relative animatedBg flex flex-col items-start justify-center">
        <div className="max-w-7xl w-full m-auto flex items-center flex-col gap-14 px-6 lg:px-0">
          <h1 className="text-xl lg:text-[28px] leading-loose lg:m-auto tracking-[0.2rem] relative text-[#e2e1e1]    text-center lg:w-[70%]">
            Potencializamos empreendimentos{" "}
            <p className="relative w-min inline text-center group ">
              <span>extraordinários</span>
              {/* <span className="group-hover:w-full w-0 group-hover:h-[20px] opacity-50 bottom-0 absolute left-0  group-hover:block  bg-slate-500 group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out group-hover:delay-300  "></span> */}
            </p>
            <span className="font-body font-bold">, </span>disruptivos e
            pioneiros do futuro
          </h1>
          {/* <h2 className="lg:text-xl font-body font-light text-center lg:w-[60%] m-auto text-[#BCC1D1] ">
            Nosso compromisso é potencializar empresas que resolvam problemas e
            demandas reais de mercado através de soluções completas e
            qualificadas, fundadas em modelos de negócio escaláveis e
            eficientes.
          </h2> */}
        </div>
        <div>
          <a
            href="/#about"
            className="font-body text-base left-0 right-0 bottom-10 mx-auto w-min text-center after:w-0 hover:after:w-full hover:animate-pulse hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all after:absolute  text-[#BCC1D1] hover:text-white transition-all whitespace-nowrap my-0 absolute "
          >
            {" "}
            Conheça nosso propósito
          </a>
        </div>
      </section>

      <section
        id="about"
        className="px-6 lg:px-0 py-[100px] lg:py-[150px]  flex flex-col max-w-7xl m-auto h-full justify-center items-center gap-8"
      >
        <h3 className="lg:text-4xl text-3xl text-center text-[#3C5086] font-body font-bold">
          Juntamos forças com os visionários,
          <br /> catalisamos a inovação
        </h3>
        <p className="lg:text-lg text-center text-[#7A7A7A] lg:w-[60%] font-body">
          Estabelecemos parcerias com empresas maduras, escaláveis, organizadas
          e com propósitos sólidos e fundamentados. Confiamos na excelência
          técnica combinada com a audácia de construir o futuro.
        </p>

        <button className="bg-[#3C5086] mt-[20px] text-[#ffff] text-base border-[#3C5086] border-[1px] font-body px-6 py-4 rounded-[9px]">
          Conheça a Brock Investimentos
        </button>
      </section>

      {/* <span className="block h-[1px] w-[80%] bg-slate-400 m-auto opacity-40"></span> */}

      <section className="px-6 lg:px-0 pt-[120px] pb-[50px] lg:pb-[100px] flex flex-col max-w-7xl m-auto h-full justify-center items-center gap-8">
        <h3 className="lg:text-4xl text-3xl text-center text-[#3C5086] font-body font-bold">
          Excelência para o futuro
        </h3>
        <p className="lg:text-lg text-base text-center text-[#7A7A7A] lg:w-full font-body ">
          Mantemos padrões de excelência elevados para a escolha de nossos
          parceiros. <br /> Estes são alguns dos critérios de nossa equipe.
        </p>
      </section>
      <InvestmentsTheses />

      {/* <span className="block h-[1px] w-[80%] bg-slate-400 m-auto opacity-40"></span> */}

      <section className="flex flex-col bg-white">
        <Form />
      </section>
      <Footer />
    </main>
  );
}
