import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

interface Deal {
  id: number
  name: string
  price: number
  discount?: number
  imageUrl: string
}

interface DealsSectionProps {
  deals: Deal[]
}

export function TodaysDeals({ deals }: DealsSectionProps) {
  return (
    <section className="container py-8 px-2 w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Today's Deals</h2>
        <Link href="#" className="flex items-center text-sm text-primary hover:underline">
          See all deals
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={deal.imageUrl || "/placeholder.svg"}
                alt={deal.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="line-clamp-2 text-sm font-medium">{deal.name}</h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold">${deal.price.toFixed(2)}</span>
              </div>
              <Button className="mt-2 w-full text-xs" size="sm">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

