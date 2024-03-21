import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32">
      {/* <Hero /> */}
      <About />
      <Stack />
      <Projects />
      <Contacts />
    </main>
  );
}
