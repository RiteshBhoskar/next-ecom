import { redirect } from "next/navigation";
import HeroSection from "~/components/Hero";
import Navbar from "~/components/Navbar";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();

  if(session?.user){
    return redirect("/home");
  }

  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  )
}
