import { api } from "~/trpc/server"


export default async function Orders(){
    const orders = await api.order.getAllOrders();
    return (
        <div>
            {orders.map((order) => (
                <div>
                    {order.id}
                </div>
            ))}
        </div>
    )
}