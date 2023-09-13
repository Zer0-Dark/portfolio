import ProjectCard from "./ProjectCard";
import cardbackground from "../photos/313123.jpg"
export default function Projects(){

    return(
        <div className="projects">
            <h1 className="projects-title">
                Some Of My Projects
            </h1>
            <div className="projects-cards">
            <ProjectCard
                src="https://i.imgur.com/xLY7pj1.png1"
                title="Speed Typing game"
                madeWith="JS,HTML,CSS"
            ></ProjectCard>
            <ProjectCard
                src={cardbackground}
                title="Speed Typing game"
                madeWith="JS,HTML,CSS"
            ></ProjectCard>
            <ProjectCard
                src={cardbackground}
                title="Speed Typing game"
                madeWith="JS,HTML,CSS"
            ></ProjectCard>
            </div>

        </div>
    )
}