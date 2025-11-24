import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Stats from "@/components/Stats";
import Companies from "@/components/Companies";
import Universities from "@/components/Universities";
import Books from "@/components/Books";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Stats />
      <Companies />
      <Universities />
      <Books />
      <Team />
      <Footer />
    </main>
  );
}

