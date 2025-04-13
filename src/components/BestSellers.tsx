"use client"

import { productData } from "~/lib/data"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
  

export default function BestSellers() {
    const sectionRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(".image-container", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            ease: "power2.in",
            stagger: 0.5,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        })
    },{ scope: sectionRef })

    return (
        <div ref={sectionRef} className="h-full main-container z-40 bg-white relative w-full flex-col overflow-clip justify-center items-center p-7 px-8 sm:px-14 rounded-[60px] ">
            <div className="sm:pl-4 text-4xl w-full flex justify-center font-medium py-2 ">
                Bestsellers
            </div>
            <div className="flex flex-col pt-7 h-full sm:flex-row space-y-7 sm:space-y-0">
                {productData.map((product) => (
                    <div key={product.id} className="w-full flex-col sm:mx-4 h-fit overflow-clip image-container transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">
                    <div className="relative w-full h-[350px]">
                        <p className="absolute top-5 left-5 px-4 py-2 bg-white text-gray-600 text-xs rounded-full shadow-md">
                            {product.category}
                        </p>
                        <img
                            src={product.image}
                            className="w-full h-full object-cover rounded-[40px]"
                            alt={product.name}
                        />
                        </div>
                        <div className="flex-col pl-2 pt-3 space-y-3">
                        <h2 className="text-2xl text-black">
                            {product.name}
                        </h2>
                        <p className="text-md line-clamp-3 text-gray-500">
                            {product.description}
                        </p>
                        <p className="text-black bottom-0 flex space-x-2 text-md font-medium">
                            $ {" "} {product.price} {" "} USD
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}