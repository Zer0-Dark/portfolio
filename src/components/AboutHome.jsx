import avatar from "../photos/mrrobot.png";
export default function AboutHome() {

    return (
        <div className="about-home">
            <div className="about-home-info">
                <div className="avatar">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <h1 className="title">Abdulrahman Ehab</h1>
                <p>
                    hi my name is Abulrahman but you can call me <span>Zero</span> :),
                    i'm a FrontEnd developer using React with some experience in Ui/UX design,
                    And here's all about my skills
                </p>
            </div>
            <div className="skills">
                <h1 className="title">My Skills</h1>
                <div className="skills-area">

                    <div className="skill-container html">
                        <div className="progress">
                            <div className="html-progress">

                            </div>
                        </div>
                        <h3>HTML</h3>
                    </div>
                    <div className="skill-container css">
                        <div className="progress">
                            <div className="css-progress">

                            </div>
                        </div>
                        <h3>CSS</h3>
                    </div>
                    <div className="skill-container JS">
                        <div className="progress">
                            <div className="js-progress">

                            </div>
                        </div>
                        <h3>JS</h3>
                    </div>
                    <div className="skill-container react">
                        <div className="progress">
                            <div className="react-progress">

                            </div>
                        </div>
                        <h3>React</h3>
                    </div>
                    <div className="skill-container leetcode">
                        <div className="progress">
                            <div className="leetcode-progress">

                            </div>
                        </div>
                        <h3>LeetCode</h3>
                    </div>
                </div>
            </div>
        </div>
    )

}