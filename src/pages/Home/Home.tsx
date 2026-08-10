import Navigation from "../../components/navigation/Navigation";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Toolbox from "../../sections/Toolbox/Toolbox";
import SelectedWork from "../../sections/SelectedWork/SelectedWork";
import Journey from "../../sections/Journey/Journey";
import Achievements from "../../sections/Achievements/Achievements";
import Process from "../../sections/Process/Process";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Toolbox />
        <SelectedWork />
        <Journey />
        <Achievements />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
