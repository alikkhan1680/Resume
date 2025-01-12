import './mobile.css'
import { BsListUl } from "react-icons/bs";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import MY_photo from "./img/my_photo.jpg"



function Mobile(){
    return (
        <>
            <div>
                <nav className='navbar'>
                    <div className='logo'> 
                        <div className='xxx'>
                            <b>X</b>
                        </div >
                        <div className='name'>
                            <b>Mirzayev</b> 
                            <b>Husnddin</b>
                        </div>                
                </div>
                <div className='icon_nav'><BsListUl className='icon'/></div>
                </nav>
            </div> {/*end navbar */}

            <div className='mobi-header'>
                <h1>Mirzayev Husniddin</h1>
                <div className='mobi-my_skils'>
                      <h3>Backend</h3><p>|</p>
                      <h3>Frontent</h3><p>|</p>
                      <h3>Paython</h3><p>|</p>
                      <h3>React</h3><p>|</p>
                  </div>
                  <div className='mobi-texnoligis'>
                      <p>Django,   Postgresql,  RestApi,  Html,  Css,  React.js,  Figma,  Microsoft Office</p>
                  </div>
                  <div className='mobi-sotset'>
                       <h3>________Ijtimoiy Tarmoqlarim :</h3>
                       <a href='https://t.me/Mirzayev717'><FaTelegram /></a>
                       <a href='https://www.instagram.com/husniddin_dewos/'> <PiInstagramLogoDuotone /> </a>
                       <a href='https://www.linkedin.com/in/husniddin-mirzayev-312903237/'><CiLinkedin /></a>
                       <a href='https://github.com/alikkhan1680'><FaGithubAlt /></a>
                  </div>

                  <div className='mobi-my_photo'>
                    <img src={MY_photo} alt='endi ishladi'/>
                 </div>
            </div>
        </>
    )
}

export default Mobile;