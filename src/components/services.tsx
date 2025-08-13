import React from 'react';
import Image from 'next/image';
import Section from './ui/section';

interface ServiceData {
    title: string,
    icon: string,
    alt: string,
    description: string
}

const servicesData: ServiceData[] = [
    {
        title: "Desenvolvimento de Websites personalizados",
        icon: "/endereco-do-website.png",
        alt: "Desenvolvimento de paginas web",
        description: "Criação de sites responsivos e otimizados para todos os dispositivos. Design exclusivo para atender às necessidades do seu negócio. Integração com ferramentas modernas, como chatbots, formulários e APIs."
    },
    {
        title: "Desenvolvimento de Aplicações Web",
        icon: "/aplicacao-de-software.png",
        alt: "Desenvolvimento de Software e Sistemas Web",
        description: "Construção de plataformas robustas para gestão empresarial, e-commerce, ou comunidades online. Soluções escaláveis, seguras e integradas a bancos de dados eficientes. Suporte a tecnologias modernas como React, Angular, Node.js, e mais."
    }
];

interface ServiceItemProps {
    service: ServiceData
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => (
    <>
        <li className="flex items-center m-3 text-2xl">
            <Image
                src={service.icon}
                alt={service.alt}
                width={40}
                height={40}
                className="mr-3"
            />
            {service.title}
        </li>
        <p className="text-base ml-16 mb-4">{service.description}</p>
    </>
);

const Services: React.FC = () => {
    return (
        <Section title="Serviços">
            <ul className="m-8">
                {servicesData.map((service, index) => (
                    <ServiceItem key={index} service={service} />
                ))}
            </ul>
        </Section>
    );
};

export default Services;