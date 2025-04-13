import { redirect } from "next/navigation";
import HeroSection from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Products from "~/components/Products";
import { auth } from "~/server/auth";
import ShowCase from "~/components/Showcase";
import BestSellers from "~/components/BestSellers";
import Features from "~/components/Features";
import Shipping from "~/components/Shipping";
import LandingFooter from "~/components/LandingFooter";

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
      <ShowCase />
      <BestSellers />
      <Features />
      <Shipping />
      <LandingFooter />
    </main>
  )
}
