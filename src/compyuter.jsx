import './compyuter.css';
import MY_photo from "./img/my_photo.jpg"
import my_project from "./img/my_project.jpeg"
import Exemple1 from "./img/download.jpeg";
import Exemple2 from "./img/download.png";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import React, {useEffect, useState} from 'react';


function Compyuter() {
    const [currentSlide, setcurrentSlide] = useState(0)
    const [isResumeVisible, setIsResumeVisible] = useState(false);

    const [windowSize, setwindowsSize] = useState({width: window.innerWidth, height: window.innerHeight})
    useEffect(()=> {
        const handleResize  = () => {
            setwindowsSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize);

    // Cleanup: effectdan chiqish uchun event listenerni olib tashlash
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, [])
    


     // Rezume ko'rsatish
  const showResume = () => {
    setIsResumeVisible(true);
  };

  // Rezume-ni yopish
  const closeResume = () => {
    setIsResumeVisible(false);
  };

   const slides = [
        my_project,
        MY_photo,
        Exemple1,
        Exemple2

    ]

    const nextSlide = ()=>{
        setcurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setcurrentSlide( (prev) => (prev - 1 + slides.length) % slides.length)
    }


  return (
    <div className="compyuter">
            {console.log(windowSize.width)}
            
                <div className={`resume-modal ${isResumeVisible ? 'show' : ''}`}>
                    <div className="resume-content">
                        <h2>My Resume</h2>
                            <ul>
                                <li>Full Name: Husniddin Mirzayev</li>
                                <li>Skills: React, Python, Django, HTML, CSS</li>
                                <li>Experience: Junior Developer</li>
                                <li>Location: Uzbekistan</li>
                            </ul>
                        <a href="/path/to/resume.pdf" download>
                            <button>Download Resume</button>
                        </a>
                        <button onClick={closeResume}>Close</button>
                    </div>
            </div>
      
          <div className='navbar'>
            <div className='logo'> 
                <div className='xxx'>
                    <b>X</b>
                </div >
                <div className='name'>
                    <b>Mirzayev</b> 
                    <b>Husnddin</b>
                </div>                
            </div>

      
              <div className='items'>
                    <a href='#aboute'><li>Aboute</li></a>
                    <a href='#myproject'><li>My Project</li></a>
                    <a href='#companies'><li>Companies</li></a>
                    <a href='#'onClick={showResume}><li>Rezume</li></a>                  
              </div>

            <div className='nav_contact'>
              <button><a href='https://www.linkedin.com/in/husniddin-mirzayev-312903237/'>Contact_Me</a></button>
            </div>
          </div>

          <div id='header' className='header'>
              <div className='my_info'>
                  <div>
                      <h2 className='lastname'>Husniddin</h2>
                      <h1 className='firstname'>Mirzayev</h1>
                  </div>
                  <div className='my_skils'>
                      <h3>Backend</h3><p>|</p>
                      <h3>Frontent</h3><p>|</p>
                      <h3>Paython</h3><p>|</p>
                      <h3>React</h3><p>|</p>
                  </div>
                  <div className='texnoligis'>
                      <p>Django,   Postgresql,  RestApi,  Html,  Css,  React.js,  Figma,  Microsoft Office</p>
                  </div>

                  <div className='sotset'>
                       <h3>_________ijtimoiy Tarmoqlarim :</h3>
                       <a href='https://t.me/Mirzayev717'><FaTelegram /></a>
                       <a href='https://www.instagram.com/husniddin_dewos/'> <PiInstagramLogoDuotone /> </a>
                       <a href='https://www.linkedin.com/in/husniddin-mirzayev-312903237/'><CiLinkedin /></a>
                       <a href='https://github.com/alikkhan1680'><FaGithubAlt /></a>
                  </div>
              </div>
              <div className='my_photo'>
                <img src={MY_photo} alt='endi ishladi'/>
              </div>
          </div>

          <div id='aboute' className='aboute'>
              <div className='my_aboute_photo'>
                  <img src={MY_photo}/>
              </div>
              <div className="My-aboute">
                  <h1 style={{fontSize: "60px", color:"black",}}> Aboute </h1>
                  <h1><b style={{color: 'black'}}>Companiy : </b>Red tag   <b>|</b> Frelanser<b></b> </h1>
                  <p>Men hozirda oddiy dasturchi kitobhon har ishda rivojlanishga intiliuvch 
                      oddiy hayot deb atalmish dargohda tahsil olayotgan inson lekin har qanday 
                      ishlarga qiziquvchi lekin hozirda o'z yo'linni quriishda harakat qilayotgan 
                      inson men react.js dan boshlab hozirda paython ortidan ketayotgan junior 
                      dasturchi hisoblanaman
                  </p>
              </div>
          </div>

          <div className='my_projects'>             
                <h1>My Projects</h1>
                <div className='box'>
                  <button onClick={prevSlide}className='button_content'><GrFormPrevious /></button>
                  <div className="Content_img">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index}`}
                                className={index === currentSlide ? "active" : ""}
                            />
                        ))}
                        </div>
                    <button onClick={nextSlide} className='button_content'><MdOutlineNavigateNext /></button>
                </div>
          </div>

          <div id="companies" className='companies'>
              <h1>Companies</h1>
              <div className='container_company'>
                    <div className='con'><h2>Red Tag</h2></div>
                    <div className='con'><h2>Frelanser</h2></div>
                    <div className='con'><h2>Up Work</h2></div>
              </div>
          </div>

          <div className='footer'>
          <div className='logo'> 
                <div className='xxx'>
                    <b>X</b>
                </div >
                <div className='name'>
                    <b>Mirzayev</b> 
                    <b>Husnddin</b>
                </div>                
            </div>
            <h3>_______ijtimoiy Tarmoqlar :</h3>
                       <a href='https://t.me/Mirzayev717'><FaTelegram /></a>
                       <a href='https://www.instagram.com/husniddin_dewos/'> <PiInstagramLogoDuotone /> </a>
                       <a href='https://www.linkedin.com/in/husniddin-mirzayev-312903237/'><CiLinkedin /></a>
                       <a href='https://github.com/alikkhan1680'><FaGithubAlt /></a>
                  
            </div>
          
    </div>
  );
}

export default Compyuter;
