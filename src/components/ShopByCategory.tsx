import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Electronics", image: "/electronics.jpg" },
  { name: "Appliances", image: "/sony.webp" },
  { name: "Clothes", image: "/zara.jpg" },
  { name: "Books", image: "/books.avif" },
  { name: "Accessories", image: "/accessories.jpg" },
  { name: "Supplements", image: "/supplements.webp" },
];

export function ShopByCategory() {
  return (
    <section className="container py-8">
      <h2 className="mb-6 text-4xl text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/home/${category.name.toLowerCase()}`}
            className="group block rounded-xl border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-md hover:scale-105"
          >
            <div className="relative w-full h-40">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
