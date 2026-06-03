import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return(
    <div style={{backgroundColor: "#0f0f0f"}}>
      <Navbar />
      <Hero   />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;