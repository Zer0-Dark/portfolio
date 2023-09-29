import facebook from "../photos/square-facebook.svg"
import github from "../photos/github.svg"
import whatsapp from "../photos/whatsapp.svg"
import twitter from "../photos/square-x-twitter.svg"
import { motion } from "framer-motion"
import Footer from "./Footer"
export default function ContactMe() {
    return (
        <>
        <div className="contact-me">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="icons">
                <motion.a initial={{scale:0.7}} animate={{scale:1}} whileHover={{scale:1.2}}  href="https://github.com/Zer0-Dark" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" /></motion.a>
                <motion.a initial={{scale:0.7}} animate={{scale:1}} whileHover={{scale:1.2}}  href="https://twitter.com/Zer00dark?t=ib7a6QHZTAhcqKhx2qhMjw&s=09" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></motion.a>
                <motion.a initial={{scale:0.7}} animate={{scale:1}} whileHover={{scale:1.2}}  href="" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp" /></motion.a>
                <motion.a initial={{scale:0.7}} animate={{scale:1}} whileHover={{scale:1.2}}  href="https://www.facebook.com/zer000dark?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></motion.a>
            </motion.div>
            <div className="e-mail">
                <h1>elbedawey11@gmail.com</h1>
            </div>
        </div>
            <Footer></Footer>
            </>
    )

}