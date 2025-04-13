import type React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-background" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            
            <div className="border-t border-border py-12 md:py-16">
                <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <Image priority src="/logo.svg" className="hover:scale-125 transition-transform" alt="Webpage logo" width={40} height={40} />
                            <span className="text-xl font-bold">Tech Wave</span>
                        </div>
                        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                            Making commerce better for everyone.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="YouTube">
                                <Youtube className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Products</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Shop All
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Customer Service</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-border bg-muted/30 py-6">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Tech Wave, Inc. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                        <Link href="#" className="hover:text-foreground hover:underline">
                            Sitemap
                        </Link>
                        <Link href="#" className="hover:text-foreground hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-foreground hover:underline">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}