import Image from "next/image";

export default function Home() {
  return (
    <div className="navbar">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LinceY's lab</span>
                  <Image
                    src="/LinceY-logo.webp"
                    alt="Lincey Logo"
                    width={80}
                    height={80}
                  />
              </a>
          </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                      <li>
                          <a  className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                      </li>
                      <li>
                          <a  className="text-gray-900 dark:text-white hover:underline">Sobre mim</a>
                      </li>
                      <li>
                          <a  className="text-gray-900 dark:text-white hover:underline">Serviços</a>
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

