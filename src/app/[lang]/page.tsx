import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/app/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: 'tr' | 'us' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <main>
      <Navbar dict={dict.nav} lang={lang} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Skills dict={dict.skills} />
      <Projects dict={dict.projects} />
      <Contact dict={dict.contact} />
    </main>
  );
}