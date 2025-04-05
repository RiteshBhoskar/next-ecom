"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { api } from "~/trpc/react";
import { ArrowLeft, AlertCircle, Loader2 } from "lucide-react";
import { AddToCartButton } from "~/components/AddToCartButton";

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();

    const productId = typeof params.id === 'string' ? params.id : undefined;

    const { data: product, isLoading, isError, error } = api.product.getProductById.useQuery(
        { id: productId! },
        { enabled: !!productId } 
    );

    if (isLoading || !productId) {
        return (
            <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
                 <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                <p className="ml-2 text-lg text-muted-foreground">Loading product details...</p>
            </div>
        );
    }

    if (isError || !product) {
        return (
            <div className="container mx-auto flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-8 text-center">
                 <AlertCircle className="h-12 w-12 text-red-500" />
                <h1 className="mt-4 text-2xl font-semibold text-red-600">Product Not Found</h1>
                <p className="mt-2 text-muted-foreground">
                    {isError
                        ? `An error occurred: ${error?.message ?? 'Please try again.'}`
                        : "We couldn't find the product you're looking for."}
                </p>
                 <Button onClick={() => router.back()} variant="outline" className="mt-6">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
             <Button onClick={() => router.back()} variant="outline" size="sm" className="mb-6 hidden md:inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to results
            </Button>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
                     <Image
                        src={product.imageUrl ?? '/placeholder.png'}
                        alt={product.name ?? 'Product Image'}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw" // Optimize image loading
                        className="object-cover"
                        priority // Prioritize loading the main product image
                    />
                </div>

                {/* Column 2: Details & Actions */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                        {product.name}
                    </h1>

                     <p className="mt-3 text-3xl font-semibold text-primary">
                        ${product.price.toFixed(2)}
                    </p>

                    {/* Optional: Add Ratings/Reviews here */}
                    {/* <div className="mt-3 flex items-center"> ... ratings ... </div> */}

                    <Separator className="my-6" />

                     <div className="prose prose-sm text-muted-foreground lg:prose-base"> {/* Basic description styling */}
                        <p>{product.description ?? 'No description available.'}</p>
                    </div>

                    {/* Optional: Add Specifications list here */}
                    {/* <ul className="mt-4 space-y-2"> ... specs ... </ul> */}

                    <Separator className="my-6" />

                    {/* Add to Cart Button */}
                    <div className="mt-auto pt-4"> {/* Pushes button towards bottom */}
                         <AddToCartButton
                            id={product.id.toString()} // Ensure ID is string
                            name={product.name ?? 'Product'}
                            price={product.price}
                            imageUrl={product.imageUrl ?? '/placeholder.png'}
                            // Potentially use a larger button size on product page
                            // className="w-full text-lg py-3"
                        />
                         {/* Optional: Add stock status indicator */}
                         {/* <p className="mt-2 text-sm text-center text-green-600">In Stock</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}