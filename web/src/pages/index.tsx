import { Provider } from 'react-redux';

import About from "@/containers/about-page";
import Experience from '@/containers/experience';
import Header from "@/containers/header";
import Hero from "@/containers/hero-page";
import Skills from '@/containers/skills-page';
import Contact from '@/containers/contact-page';

import store from '@/state/store';

type props = {}

export default function Home({ }: props) {
  return (
    <Provider store={store}>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <Experience />
        </section>

        <section id="skills" className="snap-center">
          <Skills />
        </section>

        <section id="contact" className="snap-center">
          <Contact />
        </section>

      </div>
    </Provider>
  );
}
