import { BrowserRouter } from 'react-router-dom'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
        <Header />
        <main id="home" className="py-5 md:py-24">
          <Home />
        </main>
        <section id="about" className="py-5 md:py-24">
          <About />
        </section>
        <section id="projects" className="py-5 md:py-24">
          <Projects />
        </section>
        <section id="contact" className="py-5 md:py-24">
          <Contact />
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
