import Delay from "../utils/delay";

export default function StringTypistSimulator(Id_Element: string, Phrases_List: Array<String>) {
    let Index: number = 0
    let Element: HTMLElement = document.getElementById(Id_Element) as HTMLElement
    for (let i = 0; i < Phrases_List.length; i++) {
        function write() {
            if (Index < Phrases_List[i].length) {
                Element.textContent += Phrases_List[i].charAt(Index);
                Index++;
                setTimeout(write, 100)
            }
        }
    }
}

