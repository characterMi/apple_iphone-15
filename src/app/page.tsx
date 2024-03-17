import { Hero, Highlights, Model, Features, HowItWorks } from "@/components";

export default function Home() {
  return (
    <main className="bg-black" id="root">
      <div className="h-20 w-full" />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
}
