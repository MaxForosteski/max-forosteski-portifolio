import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="my-8">
            <h1 className="text-5xl ml-8 m-4">{title}</h1>
            <div className="ml-8">
                {children}
            </div>
        </section>
    );
};

export default Section;