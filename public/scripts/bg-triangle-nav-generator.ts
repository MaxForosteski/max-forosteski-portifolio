"use client"

export default function CreateTriangles() {
    console.log("teste")
    setInterval(() => {
        let min_left_pos:number = 0;
        let max_left_pos:number = 95
        let randomNum_left_pos:number = Math.floor(Math.random() * (max_left_pos - min_left_pos + 1) ) + min_left_pos;
        
        const triangle:HTMLDivElement = document.createElement('div');

        triangle.classList.add("usu-triangle")
        if(randomNum_left_pos >= 50){  triangle.style.borderBottomColor = `var(--secondary-color)`  }else{ triangle.style.borderBottomColor = `var(--primary-color)`}
        triangle.style.left = `${randomNum_left_pos}%`
        const navbar = document.getElementById("navbar") as HTMLElement | null;
        
        
        if (navbar) {
            navbar.appendChild(triangle)
        } else {
            console.log("Error")
        }


        triangle.addEventListener('animationend', () => {
            triangle.remove(); 
        });
    }, 1800);

}

