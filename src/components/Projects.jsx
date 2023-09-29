import ProjectCard from "./ProjectCard";
import projectsData from "../Data/projects.json"
import Footer from "./Footer";
import Progress from "./Progress";
export default function Projects() {
    let cards = projectsData.map(card => {
        return (
            <ProjectCard key={card.id}
                name={card.name}
                img={card.img}
                madeWith={card.madeWith}
                github={card.github}
                live={card.live}
            />
        )
    })
    return (
        <div className="projects">
            <h1 className="projects-title title">
                Some Of My Projects
            </h1>
            <div className="projects-cards">
                {cards}
            </div>
            <Footer></Footer>
        </div>

    )
}