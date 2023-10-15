import FooterMenu from "../components/footer"
import Header from "../components/Header"
import Logo from "../img/Logo.svg"
import {BsXSquare} from "react-icons/bs"
import "../global.css"
const Settings = () => {
    return(
        <>
            <img id="Logo-in-sett" src={Logo} />
            <div className="exit-btn-sett"><BsXSquare size={50} /></div>
            <FooterMenu />
        </>
    )
}

export default Settings