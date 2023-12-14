"use client";
import Form from "@/components/form";
import Nav from "@/components/nav";
import bg from "./../../public/bg.webp";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-white">
      <Nav />
      <section className="w-full h-[600px] relative bg-white flex flex-col items-start justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bg.src}
          alt=""
          className="absolute top-0 w-full h-full object-cover"
        />
        <div className="z-50 max-w-7xl w-full m-auto flex flex-col gap-14 px-6 lg:px-0">
          <h2 className="text-4xl font-body ">Family Office</h2>
          <h3 className="text-3xl w-full lg:w-[70%] font-body font-light ">
            Texto falando com mais detalhes sobre a empresa, o que ela propõe e
            seus objetivos e etc.
          </h3>
        </div>
      </section>

      <section className="flex flex-col bg-white">
        <Form />
      </section>
      <Footer />
    </main>
  );
}
