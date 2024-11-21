"use client"

export default function CreateTriangles() {
    console.log("teste")
    setInterval(() => {
        const triangle = document.createElement('div');
        triangle.classList.add("usu-triangle")
        triangle.style.left = "60px"
        const navbar = document.getElementById("navbar") as HTMLElement | null;
        if (navbar) {
            navbar.appendChild(triangle)
        } else {
            console.log("Error")
        }

    }, 3000);
}

