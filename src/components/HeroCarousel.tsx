"use client"

import Image from "next/image"
import { Carousel,  CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Button } from "./ui/button"

export function HeroCarousel() {
  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[400px]">
              <Image
                src="/sony.webp"
                alt="Hero banner"
                height={400}
                width={300}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent p-6 flex flex-col justify-center">
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl max-w-md">Summer Sale: Up to 50% Off</h1>
                <p className="mt-2 max-w-md text-muted-foreground md:text-lg">
                  Shop the hottest deals of the season on electronics, fashion, and more.
                </p>
                <Button className="mt-4 w-fit">Shop Now</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Hero banner"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent p-6 flex flex-col justify-center">
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl max-w-md">New Tech Arrivals</h1>
                <p className="mt-2 max-w-md text-muted-foreground md:text-lg">
                  Discover the latest gadgets and electronics at unbeatable prices.
                </p>
                <Button className="mt-4 w-fit">Explore</Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  )
}

