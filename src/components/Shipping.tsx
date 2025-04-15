"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { shippingData } from "~/lib/data";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Shipping() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".to-animate", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
            stagger: 0.3,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="h-full my-20 sm:mt-40 w-full flex flex-col items-center overflow-clip justify-center px-8 sm:px-14 gap-7">
            <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-7 items-center justify-between sm:pl-16 w-full">
                {shippingData.map((item) => (
                    <div className="flex to-animate w-full flex-row gap-7" key={item.id}>
                        <div className="p-6 bg-gray-100 rounded-2xl items-center justify-center h-full w-fit">
                            <item.icon className="size-10 text-gray-800"
                            absoluteStrokeWidth = {true} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col items-start justify-center space-y-1">
                            <h3 className="text-2xl text-black">
                                {item.header}
                            </h3>
                            <p className="text-base text-gray-500 ">
                                {item.subHeader}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full to-animate h-full flex flex-col sm:flex-row rounded-[60px] bg-gray-50 mt-7">
                <div className="w-full sm:w-1/2">
                    <img src="email.avif" alt="email image" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col items-start px-7 space-y-7 justify-center">
                    <h3 className="text-5xl text-black">
                    Subscribe to our email 
                    newsletter and get 10% off
                    </h3>
                    <p className="text-lg text-gray-500">
                    Stay in the loop with the latest updates, exclusive offers, and exciting product launches by subscribing to our email newsletter.
                    </p>
                    <div className="w-full pb-7 sm:pb-0 flex justify-between gap-4">
                        <input type="text" className="bg-white py-4 rounded-full w-9/12 pl-4 " placeholder="Email Address" />
                        <button className="w-4/12 rounded-full bg-black text-sm sm:text-base text-white ">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}