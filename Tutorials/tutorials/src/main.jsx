import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import Header from "./components/Header"
import MainContent from "./components/MainComponent"
import Footer from "./components/Footer"


function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
