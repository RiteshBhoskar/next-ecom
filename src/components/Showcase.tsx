"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react"; 

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ShowCase() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".animated-content",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            toggleActions: "play none play reverse",
          },
        }
      );
      ScrollTrigger.create({
        trigger: container.current,
        pin: true,
        start: "top top",
        end: () => container.current ? `+=${container.current.offsetHeight}` : "+=0",
        invalidateOnRefresh: true
      });
    },
    { scope: container } 
  );

  return (
    <section
      ref={container}
      className="h-screen w-full main-container flex justify-center items-center py-7 px-8 sm:px-14"
    >
      <div className="flex rounded-[60px] animated-content w-full h-full justify-between overflow-clip bg-white">
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start px-4 sm:pl-10 h-full text-center sm:text-start justify-center bg-black gap-7">
          <h2 className="text-6xl text-white">The New Spacial Experience</h2>
          <p className="text-gray-400 text-xl">
            Ignite Your Imagination and Redefine Reality through the
            Cutting-Edge Spacial Experience
          </p>
          <button className="border text-black font-medium bg-white mt-7 border-white px-7 py-4 rounded-full">
            Browse products
          </button>
        </div>
        <div className="w-1/2 hidden sm:block items-center justify-center">
          <img src="apple.avif" alt="homepage random products" />
        </div>
      </div>
    </section>
  );
}