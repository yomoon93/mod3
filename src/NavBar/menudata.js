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
    icon: <AiIcons.AiFillDashboard/>,
    cName: 'nav-text'
    },
    {
    title:'Manage Users',
    link:'/profile',
    icon: <FcIcons.FcManager/>,
    cName: 'nav-text'
    },
    {
    title:'About',
    link:'/about',
    icon: <FcIcons.FcAbout/>,
    cName: 'nav-text'
    },
]