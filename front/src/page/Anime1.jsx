import Header from "../components/Header"
import FooterMenu from "../components/footer"
import Animeimg from "../img/anime-neverland.jpg"
import vidianime from "../video/Neverland_ep1.mp4"
const Anime1 = () => {
    return(
        <>
        <Header/>
        <FooterMenu />
            <div className="Anime">
                <div className="Anime-title">
                    <img src={Animeimg}/>
                    <h1>Anime:</h1>
                    <h2>Neverland</h2>
                    <h1>Description:</h1>
                    <h2>Судьба сироты не может быть сладкой. Дети, лишенные родительской опеки проживают в казенном доме, коим является приют. Многие наслышаны о том, какие жуткие условия могут быть в специализированных местах для сирот и, через какие страдания приходится проходить детям. Но есть приюты, где воспитанники не чувствуют себя угнетенными. Кроме этого, детям предоставлены практически идеальные условия проживания в виде сияющей белизной одежды, сна на мягких постелях и вкусной еды. Воспитанники получают хорошее образование, а по достижению двенадцати лет им предстоит стать частью приемной семьи. Но есть и ложка дегтя.</h2>
                    <p>первая серия:</p>
                    <video src={vidianime} controls></video>
                </div>
            </div>
        </>
    )
}

export default Anime1