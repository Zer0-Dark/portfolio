/* eslint-disable react/prop-types */
import Github from "../photos/github.svg"
import eyes from "../photos/eye-solid.svg"
export default function ProjectCard(props){
    return(
        <div className="card">
            <div className="card-img">
            <img src={props.src}></img>
            </div>
            <div className="card-info">
            <h1>{props.title}</h1>
            <h3>{props.madeWith}</h3>
            <div className="source">
                <a href={props.github}><img src={Github} alt="github"></img></a>
                <a href={props.live}><img src={eyes} alt="github"></img></a>
            </div>
            </div>
        </div>
    )
}