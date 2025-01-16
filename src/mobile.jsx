import './mobile.css'
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import MY_photo from "./img/my_photo.jpg";
import { BiSortDown } from "react-icons/bi";

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import React, {useEffect, useState} from 'react';
import my_project from "./img/my_project.jpeg"
import Exemple1 from "./img/download.jpeg";
import Exemple2 from "./img/download.png";
const FILE_RESUME_pdf = "http://localhost:3000/resume.pdf"
const FILE_RESUME_rtf = "http://localhost:3000/resume.rtf"






function Mobile(){

    const [currentSlide, setcurrentSlide] = useState(0)
    const [isResumeVisible, setIsResumeVisible] = useState(false);
    

    // Rezume ko'rsatish
 const showResume = () => {
   setIsResumeVisible(true);
 };

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
    };

    const prevSlide = () => {
        setcurrentSlide( (prev) => (prev - 1 + slides.length) % slides.length)
    }

    const downlodFileAtURL = (url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }

    return (
        <>
        <div className='container'>
                <div className={`resume-modal ${isResumeVisible ? 'show' : ''}`}>
                    <div className="resume-content">
                            <button onClick={()=>{downlodFileAtURL(FILE_RESUME_pdf)}}>Download Resume.pdf</button>
                            <button onClick={()=>{downlodFileAtURL(FILE_RESUME_rtf)}}>Download Resume.rtf</button>
                            <button style={{background: "red"}} onClick={closeResume}>Close</button>
                    </div>
                 </div>
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
                <div onClick={showResume} className='icon_nav'><b >Resume</b><BiSortDown className='icon'/></div>
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
                       <h3>Ijtimoiy Tarmoqlarim :</h3>
                       <a href='https://t.me/Mirzayev717'><FaTelegram /></a>
                       <a href='https://www.instagram.com/husniddin_dewos/'> <PiInstagramLogoDuotone /> </a>
                       <a href='https://www.linkedin.com/in/husniddin-mirzayev-312903237/'><CiLinkedin /></a>
                       <a href='https://github.com/alikkhan1680'><FaGithubAlt /></a>
                  </div>

                  <div className='mobi-my_photo'>
                    <img src={MY_photo} alt='endi ishladi'/>
                 </div>
            </div>

            <div className='mobi-aboute'>
                <h1>Aboute</h1>
                <h1><b>Companiy: <b className='colors'>Red Tag, Frelanser, Up work, Fiver</b></b> </h1>

                <p>
                    Men hozirda oddiy dasturchi kitobhon har ishda rivojlanishga intiliuvch 
                      oddiy hayot deb atalmish dargohda tahsil olayotgan inson lekin har qanday 
                      ishlarga qiziquvchi lekin hozirda o'z yo'linni quriishda harakat qilayotgan 
                      inson men react.js dan boshlab hozirda paython ortidan ketayotgan junior 
                      dasturchi hisoblanaman
                  </p>
                  <div className='mobi-my_photo'>
                    <img src={MY_photo} alt='endi ishladi'/>
                 </div>

            </div>

            <div className='mobi-my_projects'>             
                <h1 style={{color: 'wheat'}}>My Projects</h1>
                <div className='box'>
                  <button onClick={prevSlide}className='button_content'><GrFormPrevious /></button>
                  <div className="Content_img" style={{height: '200px'}}>
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

          <div className='mobi-companies'>
              <h1>Companies</h1>
              <div className=' mobi-container_company'>
                    <div className='mobi-con'><h2>Red Tag</h2></div>
                    <div className='mobi-con'><h2>Frelanser</h2></div>
                    <div className='mobi-con'><h2>Up Work</h2></div>
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
                       <a href='https://t.me/Mirzayev717'><FaTelegram /></a>
                       <a href='https://www.instagram.com/husniddin_dewos/'> <PiInstagramLogoDuotone /> </a>
                       <a href='https://www.linkedin.com/in/husniddin-mirzayev-312903237/'><CiLinkedin /></a>
                       <a href='https://github.com/alikkhan1680'><FaGithubAlt /></a>
                  
            </div>
        </div>
        </>
    )
}

export default Mobile;