import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
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
                    <button className='ButtonItems'>Resume</button>
                    <FaGithub className='Icons'/>
                    <FaLinkedin className='Icons'/>
                    <IoMdMail className='Icons'/>
                </div>
            </div>
            <h1 className='Name_small'>
                    Joseph Rajkumar
            </h1>
            <img src='https://res.cloudinary.com/drnwvb0ag/image/upload/v1726532440/20240221_183244_xndbat.jpg' className='myphoto' alt='Profile_Picture' />
        </div>
    </div>
)

export default HomePage