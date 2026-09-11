import { About } from "./About";
import { Contact, Footer } from "./Contact";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { LangProvider } from "./i18n";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Stats } from "./Stats";
import { useReveal } from "./useReveal";

function Page() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
