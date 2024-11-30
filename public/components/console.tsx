"use client"

import { useEffect } from "react";
import StringTypistSimulator from "../scripts/string-typist-simulator";

export default function Console() {
    useEffect(() => {
        StringTypistSimulator("console-line", ["console.log('Hello, my name is Max');",
            "One day per Day[day];",
            "UI/UX are so underrated bruh;",
            "Speaks in Portuguese, English and Leetcode",
            "System.out.println('A mug of happiness');"
        ])

    });
    return (
        <div className="console">

            <div className="header relative flex items-center text-5xl rounded-mdz-0 z-0">
                <div className="bg-console absolute">
                    <p><span className="reserved-word">package</span> utils;</p> <br /> <br />

                    <p><span className="reserved-word">class</span> <span className="object-name">HelloWorld</span> &#123;</p> <br /> <br />

                    <p className="tab-1"><span className="reserved-word">public static void</span> <span className="function-name">main</span>(<span className="object-name">String</span> args[]) </p><br /> <br />

                    <p className="tab-1">&#123;</p> <br /> <br />
                    <p className="tab-2"><span className="object-name">System</span>.out.<span className="function-name">println</span>(<span className="string-color">"Hello World!"</span>);</p> <br /> <br />
                    <p className="tab-1">&#125;</p> <br /> <br />

                    <p>&#125;</p> <br />
                </div>

                <div className="console-line flex">
                    <p> &gt; </p><h1 className="z-0 font-semibold" id="console-line"></h1><div className="cursor"></div>
                </div>
            </div>

            

        </div>

    )
}