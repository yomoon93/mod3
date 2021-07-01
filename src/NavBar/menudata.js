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
    title:'Add',
    link:'/addplayer',
    icon: <AiIcons.AiFillDashboard/>,
    cName: 'nav-text'
    },
    {
    title:'Update',
    link:'/updateplayer',
    icon: <FcIcons.FcManager/>,
    cName: 'nav-text'
    },
  
]