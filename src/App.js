import { createContext, useState } from "react";
import "./App.css";
import NavBarComp from "./Components/NavBarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

AOS.init();
export const AppContext = createContext(null);
function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <div className="App">
      <AppContext.Provider value={{ mode, setMode, textMode, setTextMode }}>
        {/* Theme Provider from Material UI */}
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {/* Page components... */}
          <NavBarComp />
          <div id="banner">
            <Banner />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
