import { InfoStyle } from "./style"

export const Info = ()=>{
    return(
        <InfoStyle className="grid">
            <div className="about__box">
                <i className='bx bx-award'/>
                <h3 >Experiência</h3>
                <span >0 anos de trabalho</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt' />
                <h3 >Projetos</h3>
                <span >5+ Projetos</span>
            </div>

        </InfoStyle>
    )
}