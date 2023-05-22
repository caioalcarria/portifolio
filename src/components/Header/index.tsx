import { useState } from "react"
import { HeaderStyle } from "./style"

export const Header = ()=>{
    const [isMenu, setIsMenu] = useState(false)

    const [ section, setSection ] = useState("#home")

    window.addEventListener("scroll", function(){

        if(this.scrollY <= 300){
            setSection("#home")

        }else if(this.scrollY <= 892){
            setSection("#about")

        }else if(this.scrollY <= 1727){
            setSection("#skills")

        }else if(this.scrollY <= 2475){
            setSection("#qualification")

        }
        else if(this.scrollY <= 3363){
            setSection("#portfolio")

        }else{
            setSection("#contact")
        }
        
        
    })

    return(
        <HeaderStyle>
            <nav className="container">
                <a href="#" className="nav__logo">Caio Alcarria</a>

                <div className={isMenu ? "nav__menu show-menu":"nav__menu"}>
                    <ul className="grid">
                        <li className="nav__item">
                            <a href="#home" className={section === "#home" ? "active-link" : ""}>
                                <i className="uil uil-estate nav__icon" /> Página Inicial
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className={section === "#about" ? "active-link" : ""}>
                                <i className="uil uil-user nav__icon" /> Sobre
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className={section === "#skills" ? "active-link" : ""}>
                                <i className="uil uil-file-alt nav__icon" /> Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className={section === "#qualification" ? "active-link" : ""}>
                                <i className="uil uil-briefcase-alt nav__icon" /> Qualificações
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className={section === "#portfolio" ? "active-link" : ""}>
                                <i className="uil uil-scenery nav__icon" /> Portfólio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className={section === "#contact" ? "active-link" : ""}>
                                <i className="uil uil-message nav__icon" /> Contatos
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>{setIsMenu(false)}}/>
                </div>

                <div className="nav__toggle" onClick={()=>{setIsMenu(true)}}>
                    <i className="uil uil-apps" />
                </div>
            </nav>
        </HeaderStyle>
    )
}