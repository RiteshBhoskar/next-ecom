import { redirect } from "next/navigation";
import SeedDb from "~/components/SeedDb";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import { HeroCarousel } from "../../components/HeroCarousel";
import { ShopByCategory } from "~/components/ShopByCategory";
import { TodaysDeals } from "~/components/Today'sDeals";

export default async function Home() {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    const products = await api.product.getProducts();

    return (
        <div>
            <HeroCarousel />
            <div className="my-6 text-center">
                <h1 className="text-3xl">Welcome, {session.user.name}!</h1>
                <p className="mt-2 text-gray-500">Explore our simulated shopping experience, including product Browse, a shopping cart, and a dummy checkout process.</p>
            </div>
            <ShopByCategory />
            <TodaysDeals deals={products}  />
            {process.env.NODE_ENV === 'development' && <SeedDb />}
        </div>
    );
}