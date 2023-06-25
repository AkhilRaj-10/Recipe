import React from 'react'

const  NavbarItems=(navItem) => {
   
    
   return (
    <ul className='navbar-nav d-flex justify-content-center gap-5'>
      { navItem.navItem.map((item)=>(
    <li className="nav-item">
            <a className="nav-link" href={item.link} key={item.name}>{item.name}</a>
            </li>
   ))}    
         
    </ul>
    )
}

export default NavbarItems