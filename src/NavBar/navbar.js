import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuData} from './menudata'
import {IconContext} from 'react-icons'
import {ReactComponent as Logo} from '../img/MoonDoc250.svg'

function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
        return(
            <>
           <IconContext.Provider value={{color:'red'}}>
               <div className='navbar'>
                    <Link to='#' className='menu-bars'>

                    </Link>
               </div>
               
               
            </IconContext.Provider> 
            </>
    )



}