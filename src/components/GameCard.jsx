/* eslint-disable react/no-unescaped-entities */
// Brothers: A Tale of Two Sons
import starImg from "../photos/star-solid.png"
import { motion } from "framer-motion";
export default function GameCard(props) {
    let star = <img src={starImg} alt="star" className="star" />;
    let coloredStar = <img src={starImg} alt="star" className="star-active" />;
    let rate = props.rate
    let stars = [];
    getStars(rate)
    function getStars(rate) {
        if (rate) {
            rate = +rate;
            for (let i = 0; i < rate; i++) {
                stars.push(coloredStar);
            }
            let remainStars = 5 - rate;
            for (let i = 0; i < remainStars; i++) {
                stars.push(star);
            }
        }

    }
    return (
        <motion.div initial={{opacity:0,rotate:40}} whileInView={{opacity:1, rotate:0}} transition={{duration:0.5}} whileHover={{y:-10}} className="game-card">
            <img src={props.img} alt="img"></img>
            <div className="game-card-info">
                <div className="card-background-img"></div>
                <h2>{props.name}</h2>
                <div className="rating">
                    {stars}
                </div>
                <p>"{props.info}"</p>
            </div>

        </motion.div>
    )
}