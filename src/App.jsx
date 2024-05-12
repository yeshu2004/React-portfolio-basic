import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Techno from "./components/Techno"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"
import LocomotiveScroll from "locomotive-scroll"

export const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="overflow-x-hidden text-neutral-50 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 lg:px-1 2xl:px-10">
      <Navbar />
      <Hero />
      <About />
      <Techno/>
      <Experience/>
      <Project/>
      <Contact/>
      </div>
    </div>
  )
}

export default App