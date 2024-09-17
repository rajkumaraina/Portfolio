import React from 'react'
import {Link} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import './index.css'

const Nav=()=>(
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
        
        <IoMenu class='menulogo'/>
    </nav>
    </>
    
)

export default Nav