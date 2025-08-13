import React from 'react';
import Section from './ui/section';

interface ProjectData {
    title: string,
    technologies: string,
    description: string,
    results: string,
    link: string | null
}

const projectsData: ProjectData[] = [
    {
        title: "Landing Page - Sadraque Auto Center",
        technologies: "Next.js, React, CSS Responsivo, SEO, Vercel",
        description: "Desenvolvimento de landing page responsiva para aumentar a presença digital de uma oficina mecânica. Implementação de SEO local para melhorar o posicionamento no Google, atraindo potenciais clientes da região.",
        results: "Otimização de carregamento, aumento da visibilidade no Google Maps.",
        link: "https://sadraqueautocenter.vercel.app/"
    },
    {
        title: "Portal do Conhecimento - Adami S/A",
        technologies: "Python, Arquitetura Limpa, Gemini API, BERT Portuguese, ChromaDB, NoSQL",
        description: "Criação de portal interativo capaz de responder perguntas dos usuários com base em documentos internos, utilizando processamento de linguagem natural. Implementação de embeddings para consultas rápidas e precisas, e autenticação JWT integrada ao AD da empresa.",
        results: "Redução do tempo de busca de informações internas em até 80%, melhorando a produtividade dos usuários finais.",
        link: null
    },
    {
        title: "Módulo PMS - Adami S/A",
        technologies: "Java, SOAP, RESTful APIs, Oracle Database, SQLServer, Javascript, C#, Low-Code",
        description: "Desenvolvimento e manutenção de módulo para gerenciamento de processos da unidade de papel. Implementação de integrações entre múltiplos sistemas e bancos de dados heterogêneos.",
        results: "Automação de processos internos, diminuindo erros manuais e aumentando a eficiência operacional.",
        link: null
    },
    {
        title: "API e Frontend - Neomind",
        technologies: "Java 21/11, Jakarta EE (JAX-RS, CDI, EJB, JPA), Hibernate, Docker, Docker-Compose, JUnit, Angular, React (Vite), Styled-Components, Typescript, GitLab, SonarLint, ESLint",
        description: "Desenvolvimento de soluções full stack para clientes e demandas internas, incluindo APIs RESTful, persistência com Hibernate e front-end moderno. Utilização de containers para padronizar ambientes de desenvolvimento e testes.",
        results: "Entrega de funcionalidades alinhadas a sprints ágeis, com cobertura de testes e integração contínua.",
        link: null
    }
];



interface ProjectItemProps {
    project: ProjectData;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
    <div className="mb-8 ml-8">
        <h2 className="text-3xl m-4">{project.title}</h2>
        <div className="ml-16 space-y-4 text-2xl">
            <p><b>Tecnologias:</b> {project.technologies}</p>
            <p><b>Descrição:</b> {project.description}</p>
            <p><b>Resultados:</b> {project.results}</p>
            <p>
                <b>Link do projeto:</b>{' '}
                {project.link ? (
                    <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" href={project.link}>
                        {project.link}
                    </a>
                ) : (
                    "Projeto interno confidencial"
                )}
            </p>
        </div>
    </div>
);


const Projects:React.FC = () => {
    return (
        <Section title="Projetos">
            {projectsData.map((project, index) => (
                <ProjectItem key={index} project={project} />
            ))}
        </Section>
    );
};

export default Projects;