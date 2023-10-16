import { Link } from "react-router-dom";
import Header from "../components/Header";
import FooterMenu from "../components/footer";
import Baner1 from "../img/Baner1.jpg"
import Card from "../components/card";



const Homepage = () => {
    
    return(<>
        <Header/>
        <FooterMenu />
        <main id="home-main">
            <div className="baner">
                <img className="img-baner" src={Baner1} />
                <h1>Обещанная Страна <br/>Грёз</h1>
                <Link to="/anime1" className="btn-baner">Смотреть</Link>
                <Link to="/anime1" className="btn-baner2">Описание</Link>
            </div>
            <div className="anime-top">
                <h1 id="q">Топ 3 новых аниме</h1>
                    <div className="top-new-anime">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                <h1 id="q">Топ 3 новых аниме</h1>
                    <div className="top-anime">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                <h1 id="q">Топ 3 новых аниме</h1>
                        
                    <div className="top-announc-anime">
                        <Card />
                        <Card />
                        <Card />
                </div>
            </div>
        </main>
        
    </>)
}

export default Homepage
