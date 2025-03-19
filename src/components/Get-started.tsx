import Link from "next/link";

export default function GetStarted() {
    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
            <div>
                Get started with us
            </div>
            <div className="flex justify-between space-x-4">
                <Link href="/signup">
                    Sign Up
                </Link>
                <Link href="/signin">
                    Sign In
                </Link>
            </div>
        </div>
    )
}