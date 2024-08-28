import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Apropos from "./components/apropos/Apropos";


const App = () => {
  return <div>
    <Cursor/>
    <section id="Accueil">
      <Navbar/>
      <Hero/>
    </section>
    {/* <section id="Apropos"> <Apropos/> </section> */}
    <section id="Service"><Parallax type="service"/></section>
    <section><Service/></section>
    <section id="Projet"><Parallax type="projet"/></section>
    <Portfolio/>
    <section id="Contact">
    <Contact/>
    </section>

    
  </div>;
};

export default App;

