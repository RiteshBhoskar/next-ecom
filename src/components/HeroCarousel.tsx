"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

export function HeroCarousel() {
    return (
        <section className="relative">
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[400px] flex md:flex-row"> 
                            <div className="p-6 flex flex-col justify-center md:w-1/2 bg-cyan-200 rounded-xl">
                                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl max-w-md">Summer Sale: Up to 50% Off</h1>
                                <p className="mt-2 max-w-md text-muted-foreground md:text-lg">
                                    Shop the hottest deals of the season on electronics, fashion, and more.
                                </p>
                                <Button className="mt-4 w-fit">Shop Now</Button>
                            </div>
                            <div className="relative w-full md:w-1/2 h-full"> 
                                <Image
                                    src="/sony.webp"
                                    alt="Hero banner"
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[400px] flex md:flex-row"> 
                            <div className="relative w-full md:w-1/2 h-full"> 
                                <Image
                                    src="/download.jfif"
                                    alt="Hero banner"
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-center md:w-1/2 bg-gray-300 rounded-xl">
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
    );
}