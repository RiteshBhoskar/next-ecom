"use client"
import { useRef } from "react";
import { BlurFade } from "./magicui/blur-fade"
import { Button } from "./ui/button"
import { useScroll, motion , useTransform , useSpring } from "motion/react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const introTl = gsap.timeline();

        introTl.to(".subText" , {
            opacity: 1,
            y: 20,
            duration: 0.5,
            delay: 1,
        }, "<")
        .to("#buttons", {
            opacity: 1,
            y: 20,
            delay: 0.5,
            duration: 0.5,
        }, "<")
    }, { scope: sectionRef });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end" , "end start"],
    })

    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 1] , [200, -200]),
        {stiffness: 200 ,damping: 20 , mass: 0.5 }
    )
    return (
        <section ref={sectionRef} className="flex flex-col h-full w-full justify-center items-center overflow-clip">
            <div className="flex justify-between">
                <motion.img src="phonecase.avif" alt="phonecase image" initial={{ x: -100 , opacity: 0}}  transition={{ duration: 1, ease: "easeOut" , delay: 0.1}} className="top-24 relative rounded-3xl hidden sm:block" width="350" whileInView={{ opacity: 1 , x: 0}} viewport={{ once: false , amount: 0.3}} style={{
                    height: "350px",
                }} />
                <div className="flex flex-col items-center justify-center text-center w-full">
                    <BlurFade inView delay={0.5} duration={0.5} className="text-6xl pt-6 px-4">
                    Elevate your lifestyle with premium essentials.
                    </BlurFade>
                    <p className="text-xl opacity-0 text-gray-500 px-7 subText">
                    Shop our curated selection of premium products, designed to elevate your everyday experiences
                    </p>
                    <div className="flex pt-7 gap-4">
                        <Button variant="outline"
                        id="buttons" className="bg-white z-10 text-xl py-6 px-9 opacity-0   bg-transparent rounded-full text-black hover:bg-gray-100">Shop Now</Button>
                        <Button  id="buttons" variant="outline" className="bg-white z-10 text-xl bg-transparent py-6 opacity-0 px-9 rounded-full text-black hover:bg-gray-100">About Us</Button>
                    </div>
                </div>
                <motion.img src="shoe.avif" initial={{ x: 100 , opacity: 0}}
                transition={{ duration: 1 , ease: "easeOut" , delay: 0.1}}  whileInView={{ x: 0, opacity: 1}} alt="shoe image" className="top-0 hidden sm:block rounded-3xl blur-sm" viewport={{ once: false , amount: 0.3}} width="250"/>
            </div>
            <div className="flex justify-between mt-14">
                <motion.img
                    src="watch2.avif"
                    alt="watch image"
                    height={262}
                    width={262}
                    className="right-60 top-[450px] rounded-3xl absolute hidden md:block"
                    style={{
                    translateY,
                    }}
                />
                <motion.img
                    src="watch1.avif"
                    alt="watch image"
                    height={340}
                    width={340}
                    className="rounded-3xl left-60 -bottom-[200px] absolute hidden md:block"
                    style={{
                    translateY,
                    }}
                />
        </div>
        </section>
    )
}