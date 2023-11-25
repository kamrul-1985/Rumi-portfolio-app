

    

import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import {NavLink} from "react-router-dom"
import { Link as LinkScroll } from "react-scroll";
import img from '../../src/assets/image/rumi1.png'

const Header = () => {
      const [open, setOpen] = useState(false);

      const routers = [
        { id: 1, name: 'Home', path: 'home' },
        { id: 2, name: 'About', path: 'about' },
        { id: 3, name: 'Skill', path: 'skills' },
        { id: 4, name: 'Projects', path: 'projects' },
        { id: 5, name: 'Contact', path: 'contact' }
    ];
      
      return (
            <nav className='bg-rose-200 opacity-60 p-4 z-[15] sticky top-0 flex justify-between items-center px-12'>
                  <div className='md:hidden' onClick={()=> setOpen(!open)}>
                        <span> 
                              {
                                    !open? <FaBars></FaBars>: <GrClose></GrClose>
                              }
                              </span>
                        
                  </div>
                  <div>
                        <img className='w-12' src={img} alt="logo" />
                  </div>
                  <ul className={`md:flex justify-center gap-12 items-center font-semibold absolute duration-700 md:static ${open? 'top-20': '-top-56'}  `}>
                        {
                              routers?.map(route =>
                              <li key={route.id}>
                                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to={route.path}>  <LinkScroll
                                    to={route.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={200}
                                > {route.name}</LinkScroll> </NavLink>
                              </li>)
                              
                        }
                  </ul>
                  <div>
                        <button className='btn btn-outlined'>MY Resume</button>
                  </div>
                 
            </nav>
      
      );
};

export default Header;