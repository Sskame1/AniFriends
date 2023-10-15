import home from "../img/home.svg"
import catalog from "../img/catalog.svg"
import profile from "../img/profile.svg"
import nastroiki from "../img/nastroiki.svg"
import { Link } from "react-router-dom"

// линки не работают
//уже работают

const FooterMenu = () => {
    return(
        <div id="footer-menu">
            <div className="Ficon1"> <Link to="/settings"><img src={nastroiki} /><span>Настройки</span></Link></div>
            <div className="Ficon2"> <Link to="/profile"><img src={profile} />Профиль</Link></div>
            <div className="Ficon3"> <Link to="/catalog"><img src={catalog} />Каталог</Link></div>
            <div className="Ficon4"> <Link to="/"><img src={home} />Главная</Link></div>
        </div>
    )
}
export default FooterMenu;

