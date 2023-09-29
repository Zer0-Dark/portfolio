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
import Footer from "./Footer";
export default function WhoAmI() {


    return (
        <>
        <div className="about-home">
            <div className="about-home-info">
                <div className="avatar">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="title">Abdulrahman Ehab</motion.h1>
                <p>
                    hi my name is Abulrahman but you can call me <span>Zer0</span> :),
                    i'm a <span>FrontEnd developer</span> using <span>React</span>with some experience in Ui/UX design,
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
                    <ExpCard info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis pariatur omnis et quisquam magni, qui ducimus! Quisquam dignissimos quis itaque animi adipisci eius ipsam impedit dolore, voluptatibus amet repellendus?" name="React" img={reactLogo}></ExpCard>
                    <ExpCard name="HTML" img={htmlLogo} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis pariatur omnis et quisquam magni, qui ducimus! Quisquam dignissimos quis itaque animi adipisci eius ipsam impedit dolore, voluptatibus amet repellendus?"></ExpCard>
                    <ExpCard name="CSS" img={cssLogo} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis pariatur omnis et quisquam magni, qui ducimus! Quisquam dignissimos quis itaque animi adipisci eius ipsam impedit dolore, voluptatibus amet repellendus?"></ExpCard>
                    <ExpCard name="JS" img={jsLogo} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis pariatur omnis et quisquam magni, qui ducimus! Quisquam dignissimos quis itaque animi adipisci eius ipsam impedit dolore, voluptatibus amet repellendus?"></ExpCard>


                </div>
            </div>
            <div className="cv">
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="title">CV</motion.h1>

                <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.1 }} className="cv-draw" xmlns="http://www.w3.org/2000/svg" width="249" height="354">
                    <g>
                        <title>Layer 1</title>
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="#fff" opacity="undefined" d="m2.52485,3.76501l242.99999,0l0,347.00002l-242.99999,0l0,-347.00002z" id="svg_1" />
                        <motion.rect initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="#fff" x="20.0813" y="27.40027" width="75.8604" height="99.46337" id="svg_2" />
                        <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="none" x1="129.86302" y1="70.02743" x2="214.35794" y2="70.02743" id="svg_3" />
                        <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="none" x1="29.33257" y1="169.4908" x2="209.42393" y2="168.74295" id="svg_4" />
                        <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="none" x1="29.7731" y1="195.93245" x2="209.86446" y2="195.1846" id="svg_11" />
                        <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="none" x1="30.21364" y1="226.11332" x2="210.305" y2="225.36547" id="svg_12" />
                        <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="none" x1="29.99338" y1="257.09545" x2="210.08473" y2="256.34761" id="svg_13" />
                        <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} stroke="#000" fill="none" x1="31.53526" y1="294.75477" x2="211.62661" y2="294.00693" id="svg_14" />
                    </g>

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
        <Footer></Footer>
        </>
    )

}