import Card from "../components/card"
import FooterMenu from "../components/footer"
import Header from "../components/Header"
const Catalog = () => {
    return(
        <>
            <Header/>
            <FooterMenu />
            <main id="catalog-main">
                <div className="anime-catalog">
                    <div className="anime-title2"><p>Аниме:</p></div>
                    <dib className="anime-cards">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </dib>
                </div>
            </main>
        </>
    )
}

export default Catalog