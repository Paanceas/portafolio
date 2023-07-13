import { useDocumentTitle } from "../hooks";
import { Header, About, Footer } from "../page";
import { Slider } from "../page/slider/Slider";


export const Home = () => {
    useDocumentTitle(
        "Pablo Ceballos"
    );
    document.body.classList.add("theme-light");
    return (
        <div className="main-left">
            <Header />

            <Slider />

            <About />

            <footer className="footer white">
                <div className="container">
                    <Footer />
                </div>
            </footer>
        </div>

    );

}