import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Experience from "./pages/Experience/Experience";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
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
