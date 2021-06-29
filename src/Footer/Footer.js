import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
       <div className="main-footer">
           <div className="container">
               <div className="row">
                   <div className="col">
                       <h4>MoonDoc INC</h4>
                       <ul className="list-unstyled">
                           <li>kevmunar@hotmail.com</li>
                           <li>NY, New York</li>
                           <li>71857574105</li>

                       </ul>
                   </div>
                   <div className="col">
                       <h4>Find Me On</h4>
                       <ul>
                           <li>github.com/yomoon93</li>
                           <li>linkedin.com/in/kevinmunar/</li>
                           <li>twitter.com/yomunar</li>
                       </ul>
                   </div>
                   <div className="row">
                       <p className="col-sm">
                           &copy;{new Date().getFullYear()} Moon Doc INC | All right reserved | Terms of Service | Privacy
                       </p>
                   </div>
               </div>
           </div>



       </div>

    )
}
export default Footer;
