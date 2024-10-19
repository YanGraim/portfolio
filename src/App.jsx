import Projects from "./components/ Projects";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
