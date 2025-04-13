"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Features() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".containers", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.5,
            ease: "power2.in",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="h-screen w-full mt-12 p-7 px-8 sm:px-14 overflow-clip">
            <div className="flex flex-col h-full sm:flex-row w-full sm:space-x-11 space-y-7 sm:space-y-0">
                <div className="w-full overflow-clip items-center justify-center flex h-full rounded-[60px] sm:w-2/3 containers">
                    <img src="laptopinabag.avif" alt="laptop image" className="scale-150" />
                </div>
                <div className="w-full rounded-[60px] py-5 sm:py-0 h-full sm:w-1/3 containers bg-gray-100 flex px-7 flex-col items-center sm:items-start justify-center text-center sm:text-start space-y-0 sm:space-y-7">
                    <h2 className="text-5xl font-medium leading-[60px] text-black">
                        Premium Quality and Design
                    </h2>
                    <p className="text-lg pb-3 text-gray-600">
                    Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same way.
                    </p>
                    <button className="bg-black text-white px-7 py-4 w-fit flex rounded-full text-lg">
                        Read Our Story
                    </button>
                </div>
            </div>
        </section>
    )
}