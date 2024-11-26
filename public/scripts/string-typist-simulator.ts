import Delay from "../utils/delay";

export default async function StringTypistSimulator(Id_Element:string, Phrases_List:Array<string>) {
    const Element = document.getElementById(Id_Element) as HTMLElement;

    // Função para escrever texto gradualmente
    async function Write(text:string) {
        for (let i = 0; i < text.length; i++) {
            Element.textContent += text.charAt(i);
            await Delay(30); // Aguarda 10ms entre cada caractere
        }
    }

    // Função para apagar texto gradualmente
    async function Clear(text:string) {
        for (let i = text.length; i >= 0; i--) {
            Element.textContent = text.substring(0, i);
            await Delay(30); // Aguarda 10ms entre cada caractere removido
        }
    }

    // Loop infinito para iterar pelas frases
    while (true) {
        for (let phrase of Phrases_List) {
            await Write(phrase); // Escreve a frase
            await Delay(3000); // Aguarda 3 segundos
            await Clear(phrase); // Apaga a frase
            await Delay(2000); // Aguarda 2 segundos antes de passar para a próxima
        }
    }
}
