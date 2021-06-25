import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FcIcons from 'react-icons/fc'



export const SidebarData = [
    {
    title:'Home',
    link:'/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Dashboard',
    link:'/dashboard',
    icon: <FcIcons.FcAbout/>,
    cName: 'nav-text'
    },
    {
    title:'Profile',
    link:'/profile',
    icon: <AiIcons.AiFillContacts/>,
    cName: 'nav-text'
    },
    {
    title:'About',
    link:'/about',
    icon: <AiIcons.AiFillContacts/>,
    cName: 'nav-text'
    },
]