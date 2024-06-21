"use client";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import bnex from "./../../public/logos/bnex.svg";
import zarv from "./../../public/logos/zarv.svg";
import cubos from "./../../public/logos/cubos.svg";
import brain4care from "./../../public/logos/brain4care.svg";
import droneexpress from "./../../public/logos/droneexpress.svg";
import energysource from "./../../public/logos/energysource.svg";
import foodtosave from "./../../public/logos/food-to-save.svg";
import growin from "./../../public/logos/growin.svg";
import illuminarium from "./../../public/logos/illuminarium.svg";
import jotelulu from "./../../public/logos/jotelulu.svg";
import oticaverbem from "./../../public/logos/oticaverbem.png";
import picme from "./../../public/logos/pic-me.svg";
import powerbears from "./../../public/logos/powerbears.svg";
import superopa from "./../../public/logos/superopa.svg";
import arrow from './../../public/arrow.svg'

import Image from "next/image";
import { useDotButton } from "./EmblaCarouselDots";

const partners = [
  {
    text: "“Mais faturamento para o varejo, market share para a indústria e engajamento para o shopper. A combinação completa de Big Data, AI e Analytics para o aumento das vendas.”",
    link: "https://www.bnex.com.br/",
    logo: bnex,
  },
  {
    text: "“A tecnologia da Zarv permite que sua empresa gerencie em um único sistema todas as ocorrências e assistências da sua frota. Acompanhamos seus veículos e sinistros em tempo real e conectamos automaticamente os agentes mais próximos para atender os seus chamados em campo.”",
    link: "https://www.zarv.com/br",
    logo: zarv,
  },
  {
    text: "“Tudo que você precisa para evoluir a sua carreira do zero ao avançado e conquistar as melhores vagas no mercado da tecnologia.”",
    link: "https://cubos.academy/",
    logo: cubos,
  },
  {
    text: "“Salve alimentos de restaurantes, padarias e hortifrutis com até 70% de desconto, e faça parte deste movimento sustentável que combate o desperdício de alimentos.”",
    link: "https://www.foodtosave.com.br/",
    logo: foodtosave,
  },

  {
    text: "“Plataforma digital que conecta marcas de bens de consumo, comanufatura, co-packers, fornecedores de ingredientes e embalagens e parceiros de negócios para o desenvolvimento de produtos e fornecimento global.”",
    link: "https://growinco.com/pt/",
    logo: growin,
  },

  {
    text: "“Transformamos empresas de TI em fornecedores de cloud. Ajudamos empresas de TI e comunicações a fornecer soluções na nuvem para as PME, com facilidade e maior margem de lucro.”",
    link: "https://jotelulu.com/pt-pt/",
    logo: jotelulu,
  },

  {
    text: "“A Illuminarium Experiences é uma empresa americana que cria entretenimento experimental em larga escala em teatros imersivos reprogramáveis, chamados 'Illuminariums', em cidades ao redor do mundo.”",
    link: "https://www.illuminarium.com/",
    logo: illuminarium,
  },

  {
    text: "“Transformamos desperdício em economia para todos. Mais 1 milhão de quilos de alimentos salvos.”",
    link: "https://superopa.com/",
    logo: superopa,
  },

  {
    text: "“Transformamos o seu descarte de baterias em novos produtos.”",
    link: "https://www.energysource.com.br/",
    logo: energysource,
  },

  {
    text: "“Monitoramento não invasivo da dinâmica da pressão intracraniana. Em menos de um minuto você pode acessar informações que antes só estavam disponíveis através de métodos invasivos e em situações muito restritas e específicas.”",
    link: "https://brain4.care/en/home-english/",
    logo: brain4care,
  },

  {
    text: "“Entrega local na velocidade do agora. Revolucionando a experiência de compra local: o que você quiser, quando quiser.”",
    link: "https://droneexpress.com/",
    logo: droneexpress,
  },

  {
    text: "“Estamos criando uma ótica que questiona a maneira como o mercado tradicional vem atuando. Acreditamos que óculos não deveriam ser artigos de luxo, mas sim itens acessíveis para todos que precisam de correção oftalmológica.”",
    link: "https://www.verbem.com.br/",
    logo: oticaverbem,
  },

  {
    text: "“Snacks gostosos, saudáveis e práticos agora entregues no conforto da sua casa.”",
    link: "https://www.picmenatural.com.br/",
    logo: picme,
  },

  {
    text: "“Oferecemos uma combinação de dar água na boca de gomas deliciosas e conceitos de jogos lendários. Prepare-se para uma nova experiência de lanches! Powerbeärs representa receitas inovadoras e benefícios nutricionais sem abrir mão do sabor.”",
    link: "https://www.powerbears.com/",
    logo: powerbears,
  },
];

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ stopOnInteraction: false, playOnInit: true, delay: 2000 }),
  ]);

  const {onDotButtonClick, scrollSnaps, selectedIndex} = useDotButton(emblaApi)

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {partners.map((v, index) => (
            <div className="embla__slide" key={index}>
              <Image src={v.logo} alt="" />
              <p className="text-sm max-w-[400px] text-center text-gray-500 font-body">
                {v.text}
              </p>
              <a href={v.link} target="_blank" className="text-center text-gray-900 font-body cursor-pointer hover:underline">
                {v.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-[99999999] flex items-center justify-center  gap-4 bottom-0 lg:bottom-10 hover:cursor-pointer">
          {scrollSnaps.map((_, index)=> 
            <div key={index} onClick={()=> onDotButtonClick(index)}
             className={`${index === selectedIndex ? 'bg-gray-500' : 'bg-gray-300'} w-2 h-2 lg:w-3 lg:h-3 rounded-full`}>

            </div>
          )}
      </div>

     
        <button className="absolute left-[-15px] bg-slate-200 w-[50px] h-[50px] flex items-center justify-center rounded-full " onClick={()=> emblaApi?.scrollPrev()}>
          <Image src={arrow} width={15} height={15} alt='' className="rotate-180 mr-1" />
        </button>
        <button className="absolute right-[-15px] bg-slate-200 w-[50px] h-[50px] flex items-center justify-center rounded-full "  onClick={()=> emblaApi?.scrollNext()}>
        <Image src={arrow} width={15} height={15} alt='' className="ml-2" />

        </button>
      
    </section>
  );
};

export default EmblaCarousel;
