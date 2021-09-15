import React, { useState } from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const toggleNavActive = () => {
    setActive(!active)
  }
  return (
    <header>
      <div className='nav-container'>
        <Link className='navBrand' onClick={() => scroll.scrollToTop()}>
          Thiago Mora Maltz
        </Link>
        <nav className={active ? 'navBar navActive' : 'navBar'}>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
            className='navLink'
          >
            About me
          </Link>
          <Link
            to='skills'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className='navLink'
          >
            Tecnologías
          </Link>
          <Link
            to='sectionProyectos'
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className='navLink'
          >
            Proyectos
          </Link>
          <Link
            to='infoContacto'
            spy={true}
            smooth={true}
            duration={500}
            className='navLink'
          >
            Contacto
          </Link>
        </nav>
        <div className='burger' onClick={toggleNavActive}>
          <span className='top'></span>
          <span className='middle'></span>
          <span className='bottom'></span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
