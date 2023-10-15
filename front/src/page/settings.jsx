import FooterMenu from "../components/footer"
import Header from "../components/Header"
import Logo from "../img/Logo.svg"
import {BsXSquare} from "react-icons/bs"
import "../global.css"
import { Link } from "react-router-dom"
const Settings = () => {
    return(
        <>
            <img id="Logo-in-sett" src={Logo} />
            <Link to="/" className="exit-btn-sett"><BsXSquare size={40} /></Link>
        </>
    )
}

export default Settings