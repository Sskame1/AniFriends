import { Link } from "react-router-dom"
import FooterMenu from "../components/footer"
import Header from "../components/Header"
import Login from "../components/Register"
const Profile = () => {
    return(
        <>
            <Header/><p id="hide">auth</p>
            <FooterMenu />
            <main id="auth-profile">
                <Login />
            </main>
        </>
    )
}

export default Profile