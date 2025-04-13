import { redirect } from "next/navigation";
import HeroSection from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Products from "~/components/Products";
import Section3 from "~/components/Section3";
import Section4 from "~/components/Section4";
import Section5 from "~/components/Section5";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();

  if(session?.user){
    return redirect("/home");
  }

  return (
    <main className="flex flex-col h-full w-full justify-center items-center overflow-clip">
      <Navbar />
      <HeroSection />
      <Products />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  )
}
