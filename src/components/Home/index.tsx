import { Data } from "./Data"
import { ScrollDown } from "./ScrollDown"
import { Social } from "./Social"
import { HomeStyle } from "./style"

export const Home = () => {
  return (
    <HomeStyle className="section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </HomeStyle>
  )
}

