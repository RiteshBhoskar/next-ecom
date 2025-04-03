
import { Footer } from "~/components/Footer";
import Navbar from "~/components/Navbar";

interface DashboardChildrenType {
    children?: React.ReactNode;
}


export default function({children}: DashboardChildrenType){
    return (
        <div>
        <Navbar />
        {children}
        <Footer />
        </div>
    )
}