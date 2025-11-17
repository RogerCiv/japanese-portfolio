
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '@/components/About';
import { Skills } from '@/components/Skills';
import { Works } from '@/components/Works';
import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <>

      <Hero />
      {/* <About /> */}
      <Works />
      <Skills />
      <Experience />

    </>
  );
}

