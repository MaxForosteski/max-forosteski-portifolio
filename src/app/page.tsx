import Image from "next/image";
import React from 'react';
import Script from 'next/script';

export default function Home() {
    return (
        <div className="main">
            <div className="navbar">
                <nav className="bg-gray-50 usu-bg-nav w-full">
                    <div className="max-w-screen-xl px-4 ">
                        <div className="flex items-center">
                        <div className="usu-triangle"></div>
                        <script src="bg-triangle-nav-generator.tsx">

                        </script>
                            <ul className="w-full flex justify-evenly usu-list-nav flex flex-row items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg">
                                <li>
                                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                                        <a className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <Image
                                                src="/LINCEY-newlogo.png"
                                                alt="Lincey Logo"
                                                width={80}
                                                height={80}
                                                style={{ borderRadius: "20px" }}
                                            />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 dark:text-white hover:underline">Sobre mim</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 dark:text-white hover:underline">Serviços</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 dark:text-white hover:underline">Projetos</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 dark:text-white hover:underline">Contatos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="header absolute flex items-center text-7xl rounded-md">
                    <h1>Hello, my name is Max</h1>
                </div>
                <div className="header">
                    Lorem ipsum dolor sit amet consectetur
                </div>
                <p>
                Meu nome é Marcos Max Forosteski da Silva, nascido e criado em Santa Catarina, Brasil. Desde a adolescência, sempre tive um grande interesse pela área de desenvolvimento de software, explorando as diversas possibilidades que a tecnologia oferece.

Esse entusiasmo me levou a cursar um técnico em Tecnologia da Informação, que abriu portas para uma trajetória ainda mais sólida. Atualmente, estou cursando Bacharelado em Sistemas de Informação, ampliando meus conhecimentos e habilidades.

Minha jornada profissional começou como estagiário, evoluindo rapidamente para a posição de desenvolvedor web, onde atuo há 2 anos. Durante esse período, participei de uma variedade de projetos, desde soluções simples até desafios críticos, sempre buscando a melhor performance e qualidade nos resultados.
    
                </p>
            </div>
        </div>
    );
}

