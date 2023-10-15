import { Routes, Route, BrowserRouter} from "react-router-dom"
import Homepage from "./page/Homepage"
import NotFoundPage from "./page/NotFoundPage"
import Settings from "./page/settings"
import Profile from "./page/profile"
import Catalog from "./page/catalog"

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
                </Routes>
           </BrowserRouter>
        </>
    )
}

export default App