"use client";
import { useParams, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export default function Category(){
  const { category } = useParams();
  const router = useRouter();
  const {data: allProducts , isLoading ,isError} = api.seed.getProducts.useQuery();


  if(isLoading){
    return <div>Loading products...</div>
  }
  if(isError){
    return <div>Error loading products</div>
  }

  const filteredProducts = allProducts?.filter((product) => product.type === category)

 return (
    <div>
        <Button onClick={() => router.back()} variant="outline">
            Back
        </Button>
      <div>Category: {category}</div>
      {filteredProducts ? (
        filteredProducts.length > 0 ? (
          <div>
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <p>{product.imageUrl}</p>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            No products found in this category.
          </div>
        )
      ) : (
        <div>
          No products found in this category.
        </div>
      )}
    </div>
  )
}