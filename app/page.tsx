import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

