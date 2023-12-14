"use client";
import Form from "@/components/form";
import Nav from "@/components/nav";
import bg from "./../../public/bg.webp";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-white">
      <Nav />
      <section className="w-full h-[440px] lg:h-[600px] relative bg-white flex flex-col items-start justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bg.src}
          alt=""
          className="absolute top-0 w-full h-full object-cover "
        />
        <div className="z-50 max-w-7xl w-full m-auto flex flex-col gap-14 px-6 lg:px-0">
          <h1 className="lg:text-4xl text-[33px] font-body ">Family Office</h1>
          <h2 className="lg:text-3xl text-[22px] w-full lg:w-[70%] font-body font-light ">
            Texto falando com mais detalhes sobre a empresa, o que ela propõe e
            seus objetivos e etc.
          </h2>
        </div>
      </section>

      <section className="px-6 lg:px-0 mt-[80px] mb-[120px] flex flex-col gap-8 max-w-7xl m-auto lg:h-[300px] justify-center">
        <h3 className="text-[33px] text-[#494949] font-body font-semibold">
          Texto About us sobre a Brock{" "}
        </h3>
        <p className="text-[22px] text-[#494949] lg:w-[80%]">
          Texto About us sobre a Brock, seus princípios, valores e seus
          objetivos, Texto About us sobre a Brock, seus princípios, valores e
          seus objetivos. Texto About us sobre a Brock.
        </p>
      </section>

      <section className="flex flex-col bg-white">
        <Form />
      </section>
      <Footer />
    </main>
  );
}
