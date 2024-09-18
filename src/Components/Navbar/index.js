import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { GoProject } from "react-icons/go";
import { BiSolidUserDetail } from "react-icons/bi";
import './index.css'



const Nav=()=>{
    const [clicked,setClicked]=useState(false)
    const menuButton=()=>{
        if (clicked===true){
            setClicked(false)
        }
        else{
            setClicked(true)
        }
    }
    const menuItems=(
        <div className='MContainer'>
            <ul className='menuContainer'>
                <Link to='/' className='Linkelements smallIcons'>
                <IoMdHome className='iconsInSmall'/>
                <li className='menuListItem'>Home 
                </li>
                </Link>
                <Link to='/certificates' className='Linkelements smallIcons'>
                <TbCertificate className='iconsInSmall'/>
                <li className='menuListItem'>Certificates</li>
                </Link>
                <Link to='/projects' className='Linkelements smallIcons'>
                <GoProject className='iconsInSmall'/>
                <li className='menuListItem'>Projects</li>
                </Link>
                <Link to='/About' className='Linkelements smallIcons'>
                <BiSolidUserDetail className='iconsInSmall'/>
                <li className='menuListItem'>About</li>
                </Link>
            </ul>
        </div>
    )
    const showMenu= clicked? menuItems:''
    return (
        <>
        <nav className='Navbar_Large'>
            <div className='Logo'>
               <h1 className='logoName'>Portfolio</h1>
            </div>
            <ul className='NavbarUnorderedlist'>
                <Link to='/' className='Linkelements'>
                <li className='NavItems'>Home</li>
                </Link>
                <Link to='/certificates' className='Linkelements'>
                <li className='NavItems'>Certificates</li>
                </Link>
                <Link to='/projects' className='Linkelements'>
                <li className='NavItems'>Projects</li>
                </Link>
                <Link to='/About' className='Linkelements'>
                <li className='NavItems'>About</li>
                </Link>
            </ul>
        </nav>
        <nav className="Navbar_small">
            <Link to='/' className='Linkelements'>
            <h1 className='logoName'>Portfolio</h1>
            </Link>
            <button className='menuButton' onClick={menuButton}>
            <IoMenu className='menulogo'/>
            </button>   
        </nav>
        {showMenu}
        </>
    )
}

export default Nav