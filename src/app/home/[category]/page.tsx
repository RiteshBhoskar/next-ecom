"use client"

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { api } from "~/trpc/react";
import { ArrowLeft } from "lucide-react"; 
import { AddToCartButton } from "~/components/AddToCartButton";

function capitalizeFirstLetter(string: string | string[] | undefined) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export default function Category() {
  const { category } = useParams();
  const router = useRouter();
  const { data: allProducts, isLoading, isError } = api.product.getProducts.useQuery();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-red-600">Error loading products. Please try again later.</p>
      </div>
    );
  }

  const filteredProducts = allProducts?.filter((product) => product.type === category);
  const categoryName = capitalizeFirstLetter(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <Button onClick={() => router.back()} variant="outline" size="icon" className="rounded-full">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {categoryName} Products
        </h1>
      </div>
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="grid grid-rows-[auto_1fr_auto] h-full overflow-hidden transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.imageUrl ?? '/placeholder.png'}
                  alt={product.name ?? 'Product Image'}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform hover:scale-105"
                  priority={filteredProducts.indexOf(product) < 4}
                />
              </div>
              <CardContent className="flex flex-col p-4">
                <h3 className="mb-1 line-clamp-2 text-lg font-semibold leading-tight" title={product.name ?? ''}>
                  {product.name}
                </h3>
                <p className="mb-2 line-clamp-2 text-sm text-muted-foreground" title={product.description ?? ''}>
                  {product.description}
                </p>
                <p className="mt-auto pt-2 text-xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <div className="px-4 pb-4 pt-0">
                <AddToCartButton
                  id={product.id.toString()}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center rounded-md border border-dashed">
          <p className="text-lg text-muted-foreground">
            No products found in the "{categoryName}" category.
          </p>
        </div>
      )}
    </div>
  );
}