import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Guest from "./components/sections/Guest";
import Timeline from "./components/sections/Timeline";
import Sponsors from "./components/sections/Sponsors";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/common/Footer";

function App() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Guest />
            <Timeline />
            <Sponsors />
            <FAQ />
            <Footer />
        </main>
    );
}

export default App;