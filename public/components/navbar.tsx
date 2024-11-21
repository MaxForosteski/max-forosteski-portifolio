"use client"

import Image from "next/image"
import { useEffect } from "react";
import CreateTriangles from "../scripts/bg-triangle-nav-generator";

export default function Navbar() {
    useEffect(() => {
        CreateTriangles();
    }, [])
    return (
        <div className="navbar">
            <nav id="navbar" className="bg-gray-50 usu-bg-nav w-full">
                <div className="max-w-screen-xl px-4 ">
                    <div className="flex items-center">
                        <div className="usu-triangle" id="usu-triangle">
                        </div>
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
    )
}