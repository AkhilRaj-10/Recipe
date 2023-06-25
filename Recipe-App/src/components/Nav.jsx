import React from 'react'
import NavbarItems from './NavComponents/NavbarItems'
function Nav() {
  const navItems = [{name:"Home",link:"#"},
  {name:"About",link:"#"},
  {name:"Recipies",link:"#"},
  {name:"Download",link:"#"},{name:"Contact",link:"#"}]
  return (
    <nav className="nav navbar-expand-lg  p-3 navBox">
      <div className=" d-flex container-fluid align-items-center">
        <a className="fs-4 navbar-brand">Food<span>ie</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
        <div className="justify-content-center collapse navbar-collapse" id="navbarNav">
        <NavbarItems navItem={navItems}/>
        </div>
    <form className="d-flex me-2 ms-auto">
    <input className="form-control " type='search' placeholder="Search"/>
    <button>
      <span> 
      <i class="fa-regular fa-magnifying-glass"></i>
      </span>
    </button>
    </form>
      </div>
    </nav>
  )
}

export default Nav