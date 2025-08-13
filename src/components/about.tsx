import React from 'react';
import Section from './ui/section';

const About: React.FC = () => {
    return (
        <Section title="Sobre mim">
            <div className="perfil flex items-center w-full ml-8">
                <p className="text-justify">
                    Sou Desenvolvedor Full Stack com quase 5 anos de experiência em projetos web e corporativos,
                    atuando do frontend ao backend. Domino tecnologias como Java, Spring Boot, Jakarta EE, React, Angular e Hibernate, além de bancos de dados MySQL, PostgreSQL, SQL Server e Oracle. Tenho vivência em arquiteturas escaláveis,
                    metodologias ágeis e integração de sistemas, sempre buscando entregar soluções eficientes e de alto impacto.
                </p>
            </div>
        </Section>
    );
};

export default About;