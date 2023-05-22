import { FooterStyle } from "./style"

export const  Footer = ()=>{
    return(
        <FooterStyle>
            <div className="container">
                <h2>Caio Alcarria</h2>

                <ul>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>

                    <li>
                        <a href="#portfolio">Portfólio</a>
                    </li>

                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                </ul>

                <div>
                    <a href="https://www.linkedin.com/in/caioalcarria/" target="_blank"><i className="uil uil-linkedin-alt" /></a>

                    <a href="https://github.com/caioalcarria" target="_blank"><i className="uil uil-github-alt"></i></a>

                    <a href="https://web.whatsapp.com/send/?phone=5571999332003" target="_blank"><i className="uil uil-whatsapp"></i></a>
                </div>

                <span>&#169; Crypticalcoder. Reserved template</span>
            </div>
        </FooterStyle>
    )
}