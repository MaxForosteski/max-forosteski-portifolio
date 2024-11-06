import Image from "next/image";

export default function Home() {
    return (
        <div className="navbar">
            <nav className="bg-gray-50 usu-bg-nav">
                <div className="max-w-screen-xl px-4">
                    <div className="flex items-center">
                        <ul className="flex flex-row items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg">
                            <li>
                                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <Image
                                            src="/LinceY-logo.webp"
                                            alt="Lincey Logo"
                                            width={60}
                                            height={60}
                                            style={{ borderRadius: "50px" }}
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
                                <a className="text-gray-900 dark:text-white hover:underline">Serviços</a>
                            </li>
                            <li>
                                <a className="text-gray-900 dark:text-white hover:underline">Projetos</a>
                            </li>
                            <li>
                                <a className="text-gray-900 dark:text-white hover:underline">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

