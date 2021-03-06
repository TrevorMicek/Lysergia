import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"


import styles from './navBarStyles.module.css';
const hamburger = require('../../images/lightHamburgerImg.png')
const xImg = require('../../images/lightX.png')

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  useEffect((() => {
    const closeMenu = window.matchMedia('only screen and (min-width: 769px)');
    closeMenu.addEventListener("change", (e) => {
        if (e.matches) {
          setIsOpen(false)
        } else {
            setIsOpen(false)
        }
    })
  }
  ), [])
  
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.leftsideNav}>
        Lysergia <br />
        Art Collective
      </div>
        <div className={styles.rightsideNav}>
          {isOpen ?
    <>
    <button className={styles.dropDown}  onClick={toggleOpen} onKeyDown={toggleOpen}>
      <div className={styles.mobileNav}>
          <img src={xImg} alt={"close drop down menu"} width="40px" height="30px" />
        </div>
        </button>
        <div className={styles.mobileListItems}>
          <ul className={styles.mobileNavList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/merch">Merch</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
      </div> 
      </> :     
      <>
        <div className={styles.hamburger}>
          <button className={styles.mobileNav} onClick={toggleOpen} onKeyDown={toggleOpen}>
            <img src={hamburger} alt={"open drop down menu"} width="40px" height="35px" />
           </button>
        </div>
       
      <div className={styles.listItems}>
      <ul className={styles.navList}>
      <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/merch">Merch</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    </>}
      </div>
    </nav>
  )
}
export default Nav;