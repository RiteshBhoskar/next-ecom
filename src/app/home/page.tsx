import Image from "next/image";
import { redirect } from "next/navigation";
import SeedDb from "~/components/SeedDb";
import Signout from "~/components/Signout";
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
            <ShopByCategory />
            <TodaysDeals deals={products}  />
            hi {session.user.name}
            {session.user.image ? (
                <Image src={session.user.image} alt="user image" width={100} height={100} />
            ) : (
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ccc",
                        borderRadius: "50%",
                        fontSize: "36px",
                        fontWeight: "bold",
                        color: "#fff",
                    }}
                >
                    {(session.user.name ?? "").charAt(0).toUpperCase()}
                </div>
            )}

            <div>
                <h2>OUr Products</h2>
                {products.map((product) => (
                    <div key={product.id}>
                    <img src={product.imageUrl} alt="product url" />
                    <p>
                        {product.name}
                    </p>
                    <p>
                        {product.description}
                    </p>
                    <p>{product.price}</p>
                    </div>
                ) )}
            </div>

            <div>
                <Signout />
            </div>
            <SeedDb />
        </div>
    );
}