/* eslint-disable react/prop-types */
import Github from "../photos/github.svg"
import eyes from "../photos/eye-solid.svg"
import { motion } from "framer-motion"
import testPhoto from "../photos/nier.png"
import { useState } from "react"
export default function ProjectCard(props) {
    let [test, setTest] = useState(0);
    function testing() {
        test === 0 ? setTest(1) : setTest(0)
    }
    return (
        <motion.div className="card"
            onClick={testing}
            initial={{ opacity: 0.7, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01, y: -20 }}
        >
            <div className="card-img">
                <img src={testPhoto}></img>
            </div>
            <motion.div
                initial={{ opacity: test }}
                whileHover={{ opacity: 0.9 }}
                className="card-info">
                <h1>{props.name}</h1>
                <h3>{props.madeWith}</h3>
                <div className="source">
                    <a href={props.github} target="_blank" rel="noreferrer"><img src={Github} alt="github"></img></a>
                    <a href={props.live} target="_blank" rel="noreferrer"><img src={eyes} alt="github" ></img></a>
                </div>
            </motion.div>
        </motion.div>
    )
}