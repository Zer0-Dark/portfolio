import facebook from "../photos/square-facebook.svg"
import github from "../photos/github.svg"
import whatsapp from "../photos/whatsapp.svg"
import twitter from "../photos/square-x-twitter.svg"
export default function ContactMe(){
return(
    <div className="contact-me">
        <div className="icons">
        <a href="https://github.com/Zer0-Dark" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" /></a>
        <a href="https://twitter.com/Zer00dark?t=ib7a6QHZTAhcqKhx2qhMjw&s=09" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
        <a href="" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp" /></a>
        <a href="https://www.facebook.com/zer000dark?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
        </div>
        <div className="e-mail">
        <h1>elbedawey11@gmail.com</h1>
        </div>

    </div>
)

}