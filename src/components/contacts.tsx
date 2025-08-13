import React from 'react';
import Image from 'next/image';
import Section from './ui/section';

const Contact = () => {
    return (
        <Section title="Contatos">
            <ul className="m-8 flex text-2xl">
                <li className="flex flex-row items-center mr-5">
                    <Image
                        src="/gmail.png"
                        alt="Gmail"
                        width={60}
                        height={60}
                    />
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=max.forosteski.dev@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 underline hover:text-blue-600"
                    >
                        max.forosteski.dev@gmail.com
                    </a>
                </li>
                <li className="flex flex-row items-center mr-5">
                    <Image
                        src="/github.png"
                        alt="Github"
                        width={60}
                        height={60}
                    />
                    <a
                        href="https://github.com/MaxForosteski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 underline hover:text-blue-600"
                    >
                        github.com/MaxForosteski
                    </a>
                </li>
                <li className="flex flex-row items-center mr-5">
                    <Image
                        src="/linkedin.png"
                        alt="Linkedin"
                        width={60}
                        height={60}
                    />
                    <a
                        href="https://www.linkedin.com/in/max-forosteski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 underline hover:text-blue-600"
                    >
                        github.com/MaxForosteski
                    </a>
                </li>
                <li className="flex flex-row items-center mr-5">
                    <Image
                        src="/whatsapp.png"
                        alt="Whatsapp"
                        width={60}
                        height={60}
                    />
                    <p
                        className="ml-5"
                    >
                        +55 (49) 99824-0607
                    </p>
                </li>
            </ul>
        </Section>
    );
};

export default Contact;