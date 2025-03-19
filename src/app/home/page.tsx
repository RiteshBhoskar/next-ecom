'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react"
import { api } from "~/trpc/react"


export default function Home(){

    const [name , setName ] = useState("");
    const { data : session } = useSession();
    if(!session){
        redirect("/");
    }
    const { data , refetch } = api.user.welcome.useQuery();

    return (
        <div>
            <div>
                enter your name
            </div>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="your-name" value={name} />
            <button onClick={() => refetch()}>submit</button>
            { data && (
                <div>
                    {data.welcome}
                </div>
            )}
        </div>
    )
}