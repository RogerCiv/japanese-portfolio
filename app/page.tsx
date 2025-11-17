import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Skills />
      <Experience />
    </>
  );
}
