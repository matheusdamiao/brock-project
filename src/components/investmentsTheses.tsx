import React from "react";

interface cardType {
  title: string;
  body: string;
}

const InvestmentsTheses = () => {
  const data: cardType[] = [
    {
      title: "Demanda de mercado bem definida",
      body: "É extremamente importante identificar uma demanda resiliente no mercado. Assim, o negócio proposto estará resolvendo um problema importante, para o qual a solução seria essencial.",
    },
    {
      title: "Solução completa, qualificada e monetizada",
      body: "Valorizamos empresas que oferecem soluções completas, concretas e de alta qualidade para seu mercado-alvo e que já validaram eficientemente sua estratégia de monetização.",
    },
    {
      title: "Mercado-alvo de alto potencial",
      body: "Preferimos mercados que oferecem um potencial de receita substancial. Isso se deve à nossa busca por oportunidades de investimento que possam proporcionar retornos significativos ao longo do tempo.",
    },
    {
      title: "Expertise do time consolidada",
      body: "Gostamos de encontrar pessoas que demonstrem capacidade técnica e interpessoal, know-how e que tenham uma história de vida de evolução e superação de desafios.",
    },
    {
      title: "Modelo de negócio eficiente e escalável",
      body: "Buscamos empresas com histórico e uma projeção de crescimento rápido no mercado, com boa margem de lucro, baixa necessidade de capex, previsão de atingir o ponto de equilíbrio em cerca de 12 meses e capacidade de crescer com recursos limitados.",
    },
    {
      title: "Histórico evolutivo",
      body: "Analisamos o histórico de desenvolvimento do produto, assim como o histórico de crescimento da receita desde o início da empresa. Um bom histórico é aquele que demonstra uma evolução rápida na conquista de participação de mercado a cada ano.",
    },
  ];

  return (
    <div className="flex flex-wrap max-w-7xl w-full m-auto justify-center px-6 gap-7 pb-[150px]">
      {data.map((card: cardType) => {
        return (
          <div
            key={card.title}
            className="w-full h-full lg:w-[350px] lg:h-[300px]  border-[#3C5086] hover:shadow-2xl transition-shadow shadow-gray-400 border-[1px] flex flex-col lg:py-11 lg:px-11 px-6 py-6 gap-4 rounded-[9px]"
          >
            <h4 className="text-[#3C5086] font-body text-xl font-bold">
              {card.title}
            </h4>
            <p className="text-[#242424] font-normal font-body text-sm">
              {card.body}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InvestmentsTheses;
