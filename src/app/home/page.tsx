import Image from "next/image";
import { redirect } from "next/navigation";
import Signout from "~/components/Signout";
import { auth } from "~/server/auth";

export default async function Home() {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    return (
        <div>
            hi {session.user.name}
            {session.user.image ? (
                <Image src={session.user.image} alt="user image" width={100} height={100} />
            ) : (
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ccc",
                        borderRadius: "50%",
                        fontSize: "36px",
                        fontWeight: "bold",
                        color: "#fff",
                    }}
                >
                    {(session.user.name ?? "").charAt(0).toUpperCase()}
                </div>
            )}
            <div>
                <Signout />
            </div>
        </div>
    );
}