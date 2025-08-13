import React from 'react';
import Navbar from '../components/navbar';
import Console from '../components/console';
import Footer from '../components/footer';
import About from '../components/about';
import Projects from '../components/projects';
import Services from '../components/services';
import Contact from '../components/contacts';

export default function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Console />
                <About />
                <Projects />
                <Services />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}