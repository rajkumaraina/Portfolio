import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Nav from '../Navbar'
import './index.css'

const HomePage=()=>(
    <div className='HomePageCss'>
        <Nav/>
        <div className='ProfileContainer'>
            <div className='profile_detail'>
                <p className='intro'>Hello, I'm</p>
                <h1 className='Name'>
                        Joseph Rajkumar
                </h1>
                <p className='profile_description'>
                    I'm a Passionate Candidate looking for a right opportunity to launch my career. I'm eager to continously learn, adapt, and grow in a dynamic industry, striving to make a meaningful imapact through creativity and consistency.
                </p>
                <div className='buttonContainer'>
                    <a href='https://drive.google.com/file/d/1y1uKxZ3Ym21-_MX9eVI8BT8R5RvXEUat/view?usp=drivesdk' target="_blank" className='resumelink'><div className='ButtonItems'>Resume 
                        <FaExternalLinkAlt className='externalLink' />
                    </div></a>
                    <a href='https://github.com/rajkumaraina' target='_blank' className='resumelink'>
                    <FaGithub className='Icons'/>
                    </a>
                    <a href='https://www.linkedin.com/in/rajkumaraina/' target='_blank' className='resumelink'>
                    <FaLinkedin className='Icons'/>
                    </a>
                    <a href='https://www.instagram.com/rajkumaraina3/?hl=en' target='_blanck' className='resumelink'>
                    <FaInstagram className='Icons'/>
                    </a>
                </div>
            </div>
            <h1 className='Name_small'>
                    Joseph Rajkumar
            </h1>
            <img src='https://res.cloudinary.com/drnwvb0ag/image/upload/v1726580460/20240126_080345_rmqfru.jpg' className='myphoto' alt='Profile_Picture' />
        </div>
    </div>
)

export default HomePage