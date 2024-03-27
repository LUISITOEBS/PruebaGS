import { Footer, Navbar } from "../components";
import { Tabulator } from "../components/Tabulator";

interface LayoutProps {
    children?: JSX.Element | JSX.Element[]
}

export const Layout = ( {  children }: LayoutProps ) => {
    return (
        <>
            <Navbar />
            <div className="main-content d-flex justify-content-center align-items-center">
                <div className="p-4 h-100 w-100">
                    <Tabulator />
                    { children }
                </div>
            </div>
            <Footer />
        </>
    )
}
