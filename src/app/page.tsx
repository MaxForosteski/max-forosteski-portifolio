import Image from "next/image";
import React from 'react';
import Script from 'next/script';

export default function Home() {
    return (
        <div className="main">
            <header>
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
                                        <a className="text-gray-900 dark:text-white hover:underline">Projetos</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-900 dark:text-white hover:underline">Serviços</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-900 dark:text-white hover:underline">Contatos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <main>
                <div className="container">
                    <div className="header absolute flex items-center text-7xl rounded-md">
                        <h1>Hello, my name is Max</h1>
                    </div>
                    <div className="header">
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className="sobremim mt-8 text-justify">
                        <h1 className="text-5xl ml-8 m-4">Sobre mim</h1>
                        <div className="perfil flex items-center w-100">
                            <div className="img-perfil w-3/12 relative m-12">
                                <Image
                                    src="/profile.png"
                                    alt="Profile_Pic"
                                    width={280}
                                    height={280}

                                />
                            </div>
                            <div className="w-1/12">
                            </div>
                            <p className="w-8/12">
                                Meu nome é Marcos Max Forosteski da Silva, nascido e criado em Santa Catarina, Brasil. Desde a adolescência, sempre tive um grande interesse pela área de desenvolvimento de software.
                            </p>
                        </div>
                        <div className="estudos w-100 flex items-center m-12">
                            <p className="w-9/12">
                                Esse entusiasmo me levou a cursar um técnico em Tecnologia da Informação, que abriu portas para uma trajetória ainda mais sólida. Atualmente, estou cursando Bacharelado em Sistemas de Informação, ampliando meus conhecimentos e habilidades.
                            </p>
                            <div className="img-estudos w-3/12">
                                <Image
                                    src="/tecnologica.png"
                                    alt="avanço nos estudos"
                                    width={280}
                                    height={280}
                                />
                            </div>
                        </div>
                        <div className="profissional flex items-center w-100 m-12">
                            <div className="profissional-img w-3/12">
                                <Image
                                    src="/machine-learning.png"
                                    alt="Evolução da mente"
                                    width={280}
                                    height={280}
                                />
                            </div>
                            <p className="w-9/12">
                                Minha jornada profissional começou como estagiário, evoluindo rapidamente para a posição de desenvolvedor web, onde atuo há 2 anos. Durante esse período, participei de uma variedade de projetos, desde soluções simples até desafios críticos, sempre buscando a melhor performance e qualidade nos resultados.
                            </p>
                        </div>

                    </div>
                    <div className="projetos">
                        <h1 className="text-5xl ml-8 m-4">Projetos</h1>
                        <div className="projetos-cards m-12">
                            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Paper Management System (PMS)</h5>
                                <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Sistema de gerenciamento de produção de papel feito para a empresa Adami S/A junto a uma equipe de 4 desenvolvedores, 1 tech lead, 1 product owner e 1 project leader</p>
                            </a>
                        </div>
                    </div>
                    <div className="servicos">
                        <h1 className="text-5xl ml-8 m-4">Serviços</h1>
                    </div>
                    <div className="contatos">
                        <h1 className="text-5xl ml-8 m-4">Contatos</h1>
                    </div>
                </div>
            </main>


            <footer>
                <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>
            </footer>
        </div>

    );
}

