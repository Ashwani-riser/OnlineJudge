import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  );
}