import { BlurFade } from "./magicui/blur-fade"

export default function HeroSection() {
    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
            <BlurFade inView delay={0.5} duration={0.5} className="text-5xl flex-wrap">
                Elevate your lifstyle with premium essentials.
            </BlurFade>
            <div className="flex justify-between w-full">
                <BlurFade inView delay={0.25}>
                Elevate your daily routine with our meticulously selected premium goods and curated essentials.
                </BlurFade>
            </div>
            <div className="flex h-fit w-full justify-center items-center mt-10">
            <img className="-left-36 relative" src="watch1.avif" alt="watch image" />
            <img className="-right-36 rounded-xl relative" src="watch2.avif" height="350" width="350" alt="watch image" />
            </div>
        </div>
    )
}