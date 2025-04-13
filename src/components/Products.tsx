"use client"

import { ArrowRight } from "lucide-react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Products(){

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.fromTo(
          ".first-container",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".first-container",
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      
        gsap.fromTo(
          ".second-container",
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".second-container",
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            },
            delay: 0.5
          }
        );
      
        gsap.fromTo(
          ".third-container",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".third-container",
              start: "top 50%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      
        gsap.fromTo(
          ".fourth-container",
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".fourth-container",
              start: "top 40%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
      
    return (
        <section className="flex section flex-col h-full w-full justify-center items-center overflow-clip mt-20 sm:mt-60 px-8 sm:px-14 space-y-7">
            <div className="flex flex-col sm:flex-row w-full gap-6">
                <div className="w-full sm:w-2/3 rounded-[60px] first-container h-[425px] flex justify-between overflow-clip">
                   <div className="h-full w-full flex flex-col items-center justify-center bg-[#f9f9f9] pt-16">
                    <div className="flex flex-col gap-y-7 w-full h-full justify-center items-start">
                    <h2 className="
                        text-4xl pl-7 z-10 w-full  text-black">
                        Technology
                    </h2>
                    <p className="text-xl  text-gray-600 z-10 pl-7">
                    Explore the Latest Innovations and Unleash the Power of Technology
                    </p>
                    </div>
                    <p className="flex text-xl text-black w-full pb-10 pl-7 z-10 gap-x-2 items-center cursor-pointer hover:text-cyan-700 duration-200">
                        Explore Category
                        <ArrowRight />
                    </p>
                   </div>
                    <img src="halfMobile.avif" 
                     className="scale-150" alt="mobile phone picture" />
                </div>
                <div className="w-full sm:w-1/3 rounded-[60px] second-container h-[425px] flex justify-between overflow-clip">
                   <div className="h-full w-full flex flex-col items-center justify-center bg-[#f9f9f9] pt-16">
                    <div className="flex flex-col gap-y-7 w-full h-full justify-center items-start">
                    <h2 className="
                        text-4xl pl-7  w-full  text-black">
                        Gear
                    </h2>
                    <p className="text-xl  text-gray-600 z-10 pl-7">
                    Equip Yourself with Top-Notch Gear for Every Adventure
                    </p>
                    </div>
                    <p className="flex text-xl text-black w-full pb-10 pl-7 gap-x-2 items-center cursor-pointer hover:text-cyan-700 duration-200">
                        Explore Category
                        <ArrowRight />
                    </p>
                   </div>
                   <div className="bg-[#f9f9f9] h-full w-full">
                   <img src="tv.avif" 
                     className="ml-11 scale-150 size-96 pb-36 top-0" alt="mobile phone picture" />
                   </div>
                </div>
            </div>
            <div className="w-full second-row gap-6 flex flex-col sm:flex-row ">
                <div className="w-full sm:w-1/3 rounded-[60px] third-container h-[425px] flex justify-between overflow-clip">
                   <div className="h-full w-full flex flex-col items-center justify-center bg-[#f9f9f9] pt-16">
                    <div className="flex flex-col gap-y-7 w-full h-full justify-center items-start">
                    <h2 className="
                        text-4xl pl-7  w-full  text-black">
                        Essentials
                    </h2>
                    <p className="text-xl  text-gray-600 z-10 pl-7">
                    Equip Yourself with all the Essentials for Everyday Life
                    </p>
                    </div>
                    <p className="flex text-xl text-black w-full pb-10 pl-7 gap-x-2 items-center cursor-pointer hover:text-cyan-700 duration-200">
                        Explore Category
                        <ArrowRight />
                    </p>
                   </div>
                   <div className="bg-[#f9f9f9] h-full w-full">
                   <img src="bag.avif" 
                     className="ml-7 scale-150 top-0" alt="bag image" />
                   </div>
                </div>
                <div className="w-full sm:w-2/3 rounded-[60px] fourth-container h-[425px] flex justify-between overflow-clip">
                   <div className="h-full w-full flex flex-col items-center justify-center bg-[#f9f9f9] pt-16">
                    <div className="flex flex-col gap-y-7 w-full h-full justify-center items-start">
                    <h2 className="
                        text-4xl pl-7  w-full  text-black">
                        Accesories
                    </h2>
                    <p className="text-xl  text-gray-600 z-10 pl-7">
                    Find the Perfect Finishing Touch with Stylish and Functional Accessories
                    </p>
                    </div>
                    <p className="flex text-xl text-black w-full pb-10 pl-7 gap-x-2 items-center cursor-pointer hover:text-cyan-700 duration-200">
                        Explore Category
                        <ArrowRight />
                    </p>
                   </div>
                   <div className="bg-[#f9f9f9] h-full w-full">
                   <img src="clock.avif" 
                     className="ml-11 scale-150 pb-36 top-0" alt="clock image" />
                   </div>
                </div>
            </div>
        </section>
    )
}