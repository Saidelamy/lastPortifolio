import About from '../componants/About';
import Contact from '../componants/Contact';
import Hero from '../componants/Hero';
import Marquee from '../componants/Marquee';
import Navbar from '../componants/Navbar';
import Projects from '../componants/Projects';

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default Home;
