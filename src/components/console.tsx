"use client"

import { useEffect } from "react";
import StringTypistSimulator from "../../public/scripts/string-typist-simulator";

const CONSOLE_LINE_ID: string = "console-line";

const SOFTWARE_ADJECTIVES: string[] = [
                "Escalável",
                "Rápido",
                "Confiável",
                "Intuitivo",
                "Seguro",
                "Flexível",
                "Otimizado",
                "Personalizável",
                "Responsivo",
                "Integrável",
                "Automatizado",
                "Robusto",
                "Inteligente",
                "Eficiente",
                "Sustentável",
                "Inovador",
                "Multiplataforma",
                "Consistente",
                "Interativo",
                "Modular"
            ]

export default function Console() {
    useEffect(() => {
        StringTypistSimulator(CONSOLE_LINE_ID, SOFTWARE_ADJECTIVES)

    });
    return (
        <div className="console">

            <div className="header relative flex items-center text-5xl rounded-mdz-0 z-0">
                <div className="bg-console absolute">
                    <p><span className="reserved-word">package</span> utils;</p> <br /> <br />

                    <p><span className="reserved-word">class</span> <span className="object-name">HelloWorld</span> &#123;</p> <br /> <br />

                    <p className="tab-1"><span className="reserved-word">public static void</span> <span className="function-name">main</span>(<span className="object-name">String</span> args[]) </p><br /> <br />

                    <p className="tab-1">&#123;</p> <br /> <br />
                    <p className="tab-2"><span className="object-name">System</span>.out.<span className="function-name">println</span>(<span className="string-color">&quot;Hello World!&quot;</span>);</p> <br /> <br />
                    <p className="tab-1">&#125;</p> <br /> <br />

                    <p>&#125;</p> <br />
                </div>

                <div className="console-line flex align-items-center text-6xl">
                    <p className="mr-4"> &gt;Software é</p><h1 className="z-0 font-semibold text-cyan-400" id={ CONSOLE_LINE_ID }></h1><div className="cursor"></div>
                </div>
            </div>



        </div>

    )
}