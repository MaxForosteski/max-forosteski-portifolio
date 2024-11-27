"use client"

import { useEffect } from "react";
import StringTypistSimulator from "../scripts/string-typist-simulator";

export default function Console() {
    useEffect(() => {
        StringTypistSimulator("console-line",["console.log('Hello, my name is Max');",
                                                "One day per Day[day];",
                                                "UI/UX are so underrated bruh;",
                                                "Speaks in Portuguese, English and Leetcode",
                                                "System.out.println('A mug of happiness');"
                                            ])
    });
    return (
        <div className="console">
            <div className="header relative flex items-center text-5xl rounded-mdz-0 z-0">
                <div className="console-line flex">
                    <p> &gt; </p><h1 className="z-0 font-semibold" id="console-line"></h1><div className="cursor"></div>
                </div>
            </div>
            
        </div>

    )
}