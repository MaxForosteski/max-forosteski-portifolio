"use client"

import { useEffect } from "react";
import StringTypistSimulator from "../scripts/string-typist-simulator";

export default function Console() {
    useEffect(() => {
        StringTypistSimulator("console-line",["Hello, my name is Max"])
    });
    return (
        <div className="console">
            <div className="header absolute flex items-center text-7xl rounded-md">
                <div className="console-line flex">
                    <p> &gt; </p><h1 className="z-0 font-semibold" id="console-line"></h1><div className="cursor"></div>
                </div>
            </div>
            <div className="header" >
                Lorem ipsum dolor sit amet consectetur
            </div >
        </div>

    )
}