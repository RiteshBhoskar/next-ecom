"use client"

import { api } from "~/trpc/react"

export default function SeedDb(){
    const res =  api.product.seedDb.useMutation({
        onSuccess(data) {
            alert(data.message)
        },
        onError(error) {
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