import { Routes, Route, BrowserRouter} from "react-router-dom"
import Homepage from "./page/Homepage"
import NotFoundPage from "./page/NotFoundPage"
import Settings from "./page/settings"
import Profile from "./page/profile"
import Catalog from "./page/catalog"
import Login from "./components/Login"
import AuthReg from "./components/Register"
import Anime1 from "./page/Anime1"
import Anime2 from "./page/Anime2"
import Anime3 from "./page/Anime3"
import Anime4 from "./page/Anime4"

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/register" element={<AuthReg />} />
                    <Route path="/auth" element={<Login />} />
                    <Route path="/anime1" element={<Anime1 />} />
                    <Route path="/anime1" element={<Anime2 />} />
                    <Route path="/anime1" element={<Anime3 />} />
                    <Route path="/anime1" element={<Anime4 />} />
                </Routes>
           </BrowserRouter>
        </>
    )
}

export default App