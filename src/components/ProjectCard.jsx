/* eslint-disable react/prop-types */
import Github from "../photos/github.svg"
import eyes from "../photos/eye-solid.svg"
export default function ProjectCard(props){
    return(
        <div className="card">
            <div className="card-img">
            <img src={props.img}></img>
            </div>
            <div className="card-info">
            <h1>{props.name}</h1>
            <h3>{props.madeWith}</h3>
            <div className="source">
                <a href={props.github} target="_blank" rel="noreferrer"><img src={Github} alt="github"></img></a>
                <a href={props.live} target="_blank" rel="noreferrer"><img src={eyes} alt="github" ></img></a>
            </div>
            </div>
        </div>
    )
}