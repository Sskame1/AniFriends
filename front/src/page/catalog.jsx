import Card from "../components/card"
import FooterMenu from "../components/footer"
import Header from "../components/Header"
import AnimeList from "../components/Anime"
import {  Link  } from "react-router-dom"
const Catalog = () => {
    return(
        <>
            <Header/>
            <FooterMenu />
            <main id="catalog-main">
                <div className="anime-catalog">
                    <div className="anime-title2"><p>Аниме:</p></div>
                    <dib className="anime-cards">
                        
                            <Link className="anime1" to="/anime1"> anime</Link>
                            <Link className="anime1" to="/anime2"> anime</Link>
                            <Link className="anime1" to="/anime3"> anime</Link>
                            <Link className="anime1" to="/anime4"> anime</Link>
                        
                    </dib>
                </div>
            </main>
        </>
    )
}

export default Catalog