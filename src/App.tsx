import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
