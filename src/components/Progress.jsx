/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
export function Progress(props) {


    return (
        <motion.div className="skill"
        initial={{scale:0.5,opacity:0.5}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.5}}
        >
            <div className="progress">
                <div style={{ left: `${props.progress}%` }} className="progress-value">
                    {`${props.progress}%`}
                </div>
                <div style={{ width: `${props.progress}%` }} className="progress-bar">

                </div>
            </div>
            <h3>{props.title}</h3>
        </motion.div>
    )
}