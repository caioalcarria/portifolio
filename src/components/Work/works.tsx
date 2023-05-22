import { useEffect, useState } from "react"
import { projectsData, projectsNav } from "./data"
import { WorksStyle } from "./style"
import { WorkItem } from "./workItem"

interface IProject{
    id: number;
    image: string;
    title: string;
    category: string;
    link: string;
}




export const Works = ()=>{
    const [ item, setItem ] = useState({name: 'all'})
    const [ projects, setProjects ] = useState([] as IProject[])
    const [ active, setActive ] = useState(0)

    useEffect(()=>{
        if(item.name == "all"){
            setProjects(projectsData)

        }else{
            const newProjects = projectsData.filter((project)=> project.category === item.name)

            setProjects(newProjects)
        }
    },[item])

    const handleClick = (e:any, index:number)=>{
        setItem({name: e.target.textContent})
        setActive(index)
    }

    return(
        <WorksStyle>
            <div className="work__filters">
                {
                    projectsNav.map((item, index)=>{
                        return <span className={active == index ? "active-work": ""} onClick={(e)=> handleClick(e, index)} key={index}>{item.name}</span>
                    })
                }
            </div>

            <div className="container grid">
                {
                    projects.length ?(
                        projects.map((item)=>{
                            return <WorkItem key={item.id}  item={item} />
                        })
                    ):(
                        <p>Desculpe 😢 , ainda  estou estudando essa categoria.</p>
                    )
                }
            </div>
        </WorksStyle>
    )
}