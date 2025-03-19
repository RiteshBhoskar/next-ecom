import GetStarted from "~/components/Get-started";
import HeroSection from "~/components/Hero";
import Navbar from "~/components/Navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GetStarted />
    </main>
  )
}
