"use client"
import { signOut } from "next-auth/react"

export default function Signout() {
    return (
        <button onClick={async () => { signOut({ redirectTo: "/"}) }}>
            Sign Out
        </button>
    )
}