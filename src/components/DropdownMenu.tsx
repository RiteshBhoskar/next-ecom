"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSession } from "next-auth/react";
import { LogOut, User, ListChecks, MapPin, CreditCard, Heart, Settings as SettingsIcon, HelpCircle, MessageSquare } from "lucide-react";
import Image from "next/image";
import Signout from "./Signout";

export default function DropdownMenuNav(){
    const { data : session } =  useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                {session?.user.image ? (
                    <Image
                        src={session.user.image}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                        priority
                    />
                    ) : (
                    <AvatarFallback className="rounded-full bg-slate-200">{session?.user.name?.[0] ?? "U"}</AvatarFallback>
                    )}
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ListChecks className="mr-2 h-4 w-4" />
                        Orders
                        <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MapPin className="mr-2 h-4 w-4" />
                        Addresses
                        <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Payment Methods
                        <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Heart className="mr-2 h-4 w-4" />
                        Wishlist
                        <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SettingsIcon className="mr-2 h-4 w-4" />
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Support</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Help Center
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Us
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <Signout />
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}