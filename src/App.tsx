import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'

export default function App() {
  return (
    <>
      <Navbar />
      <BackToTop />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
