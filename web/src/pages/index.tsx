import Header from "@/containers/header";
import Hero from "@/containers/hero-page";
import About from "@/containers/about-page";

type props = {}

export default function Home({ }: props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
