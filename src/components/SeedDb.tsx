"use client"

import { api } from "~/trpc/react"

export default function SeedDb(){
    const res =  api.seed.seedDb.useMutation({
        onSuccess(data, variables, context) {
            alert(data.message)
        },
        onError(error, variables, context) {
            alert(error.message)
        },
    });

    return (
        <div>
            <button onClick={() => {res.mutate()}} disabled={res.isPending}>
            {res.isPending ? "Seeding..." : "Seed the DB"}
            </button>
            {res.error && <p className="text-red-500 mt-2">{res.error.message}</p>}
        </div>
    )
}