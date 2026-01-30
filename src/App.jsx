import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import FAQ from './components/sections/FAQ';
import Footer from './components/common/Footer';

function App() {
    return (
        <div className="min-h-screen bg-primary text-white font-sans">
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}

export default App;
