import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuData, SidebarData} from './menudata'
import {IconContext} from 'react-icons'
import './navbar.css'
// import {ReactComponent as Logo} from '../img/MoonDoc250.svg'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

    function Navbar(){
        const [sidebar, setSidebar] = useState(false)
        const showSidebar = () => setSidebar(!sidebar)
            return(
                <>
            <IconContext.Provider value={{color:'red'}}>
                <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                        {/* <Logo className="logo"/> */}
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to = '#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                                {SidebarData.map((item,index)=>{
                                    return(
                                        <li key={index} className={item.cName}>
                                            <Link to={item.link}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                    </ul>
                </nav>
                </IconContext.Provider> 
                </>
        )
    }
export default Navbar