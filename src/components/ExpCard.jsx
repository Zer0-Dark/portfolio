import { motion } from "framer-motion"
import { useState } from "react"

export default function ExpCard(props) {
    let [isOpen, setIsOpen] = useState(false);
    return (

        <div>

            {isOpen && <motion.div
                initial={{ opacity: 0.5, x: 50, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="window"
            >
                <div className="exp-info">
                    <motion.img
                        src={props.img}
                        alt="logo"
                    ></motion.img>
                    <div className="etc">
                        <h1>{props.name}</h1>
                        <p> {props.info}</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(isOpen => !isOpen)}

                >Exit</button>
            </motion.div>}
            <motion.div
                onClick={() => setIsOpen(isOpen => !isOpen)}
                className="exp-card"
                whileHover={{ scale: 1.1, borderRadius: "20px" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0.5, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <img src={props.img} alt="Logo"></img>
                <h3>{props.name}</h3>

            </motion.div>
        </div>
    )
}