//!title must be a component
//!you have to map items from json files

import avatar from "../photos/mrrobot.png";
// import { Progress } from "./Progress";
import reactLogo from "../photos/react.png"
import htmlLogo from "../photos/html5.png"
import cssLogo from "../photos/css3-alt.png"
import jsLogo from "../photos/js.png"
import valorant from "../photos/valorant.jpeg"
import daysGone from "../photos/daysgone.jpg"
import eldenRing from "../photos/eldenring.jpeg"
import nire from "../photos/nier.png"
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import GameCard from "./GameCard";
export default function WhoAmI() {


    return (
        <div className="about-home">
            <div className="about-home-info">
                <div className="avatar">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="title">Abdulrahman Ehab</motion.h1>
                <p>
                    hi my name is Abulrahman but you can call me <span>Zero</span> :),
                    i'm a FrontEnd developer using React with some experience in Ui/UX design,
                    And here's all about my skills
                </p>
            </div>
            <div className="skills">
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="title">Experience</motion.h1>
                <div className="skills-area">
                    {/* <Progress title="html" progress="90"></Progress>
                    <Progress title="css" progress="80"></Progress>
                    <Progress title="JS" progress="70"></Progress>
                    <Progress title="react" progress="60"></Progress>
                    <Progress title="LeetCode" progress="30"></Progress> */}
                    <ExpCard name="React" img={reactLogo}></ExpCard>
                    <ExpCard name="HTML" img={htmlLogo}></ExpCard>
                    <ExpCard name="CSS" img={cssLogo}></ExpCard>
                    <ExpCard name="JS" img={jsLogo}></ExpCard>


                </div>
            </div>
            <div className="cv">
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="title">CV</motion.h1>

                <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.1 }} className="cv-draw" xmlns="http://www.w3.org/2000/svg" width="420" height="520">
                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_1" d="m13.52485,19.76501l394,0l0,464l-394,0l0,-464z" opacity="undefined" stroke="#000" fill="#fff" />
                    <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_3" y2="108.36951" x2="356.99086" y1="108.36951" x1="219.99086" stroke="#000" fill="none" />
                    <motion.rect initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_2" height="133" width="123" y="51.36951" x="41.99087" stroke="#000" fill="#fff" />
                    <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_4" y2="240.36951" x2="348.99086" y1="241.36951" x1="56.99087" stroke="#000" fill="none" />
                    <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_11" y2="275.72664" x2="349.70514" y1="276.72664" x1="57.70515" stroke="#000" fill="none" />
                    <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_12" y2="316.08377" x2="350.41943" y1="317.08377" x1="58.41944" stroke="#000" fill="none" />
                    <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_13" y2="357.51233" x2="350.06229" y1="358.51233" x1="58.0623" stroke="#000" fill="none" />
                    <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} id="svg_14" y2="407.86946" x2="352.56229" y1="408.86946" x1="60.5623" stroke="#000" fill="none" />
                </motion.svg>
            </div>

            <div className="hobbies">
                <motion.h1 className="title"
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                >Hobbies</motion.h1>
                <div className="gaming">
                    <h1 className="title">
                        <motion.span initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}>G</motion.span>
                        <motion.span initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>A</motion.span>
                        <motion.span initial={{ y: -50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>M</motion.span>
                        <motion.span initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>E</motion.span>
                        <motion.span initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}>R</motion.span>

                    </h1>
                    <div className="gaming-cards">
                        <GameCard name="Valorant" img={valorant} rate="3" info="i hope one day i will stop playing this shitty game"></GameCard>
                        <GameCard name="Days Gone" img={daysGone} rate="4" info="the story is 5/5 compat system is so cool but you will feel like you repeating things yk ?"></GameCard>
                        <GameCard name="Nier:automata" img={nire} rate="4" info="the story is good but i didn't like that you have to repeat the game from the other character point of view"></GameCard>
                        <GameCard name="Elden Ring" img={eldenRing} rate="5" info="the game is just perfect"></GameCard>



                    </div>
                </div>

            </div>
        </div>
    )

}