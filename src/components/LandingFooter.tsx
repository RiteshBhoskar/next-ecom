import { Mail, Smartphone } from "lucide-react";
import { sociaMedia } from "~/lib/data";

export default function LandingFooter() {
    return (
        <section className="h-full w-full flex flex-col items-center justify-center rounded-t-[60px] bg-black text-white">
            <div className="flex flex-col w-full sm:flex-row justify-between pt-24 space-y-7 sm:space-y-0">
                <div className="flex w-full flex-col gap-7 px-7 sm:pl-14">
                    <h3 className="text-6xl">
                        Tech Wave
                    </h3>
                    <div className="flex space-x-4">
                        {sociaMedia.map((i) => (
                            <div key={i.id}>
                                <i.icon />
                            </div>
                        ) )}
                    </div>
                    <div className="w-full h-px bg-gray-300 mt-1" />
                    <p className="text-lg text-gray-400">
                    Selling premium products, designed to elevate your everyday experience
                    </p>
                </div>
                <div className="flex w-full flex-row px-7 sm:px-0 sm:flex-col gap-7 items-center justify-start">
                    <h4 className="text-white text-4xl">
                        Menu
                    </h4>
                    <div className="flex items-start flex-row sm:flex-col gap-2 sm:gap-4 text-gray-400 justify-start">
                        <div>Home</div>
                        <div>Store</div>
                        <div>About</div>
                        <div>Articles</div>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-7 items-start px-7 sm:px-0 sm:items-center justify-start">
                    <h4 className="text-white text-4xl">
                        Contact Us
                    </h4>
                    <div className="flex items-start flex-col gap-4 text-gray-400 justify-start">
                        <div className="flex items-center justify-center gap-4">
                            <Mail className="text-white size-9" />
                            <div className="flex flex-col">
                                <p className="text-white">
                                    Email
                                </p>
                                <p>contact@techwave.com</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <Smartphone className="text-white size-9" />
                            <div className="flex flex-col">
                                <p className="text-white">
                                    Phone
                                </p>
                                <p>(414) 687 - 5892</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-5" />
            <div className="flex justify-between items-center w-full py-4 pl-7 sm:pl-14">
                <p className="text-lg text-gray-400">Copyright © Tech Wave</p>
                <div className="flex size-10 w-fit gap-3 pr-4">
                    <img src="visa.png" alt="visa" />
                    <img src="card.png" alt="visa" />
                </div>
            </div>
        </section>
    )
}