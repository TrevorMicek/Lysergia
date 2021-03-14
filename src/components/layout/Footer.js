import React from 'react';
import { Link } from 'gatsby';

import styles from './footerStyles.module.css'
const Footer = () => {
  var year = new Date()


return (
<footer className={styles.footer}>      
        
  
      <div className={styles.footerContainer}>
      
        <div className={styles.footerTop}>
   <section className={styles.leftSideFooter}>
        
        <div>
          <h4>
            Follow Us!
          </h4>
        
        </div>
      </section>
      <section className={styles.rightSideFooter}>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/blog">Blog</Link></li>
      </ul>
      <ul>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
       
      </section>
      </div>
      <section className={styles.footerBottom}>
 
       
        <div className={styles.copyright}>
        <h4>
        © {
          year.getFullYear()
        }, Lysergia Art Collective
        </h4>
        </div>
      </section>
     
    
    </div>
    </footer>
    )
      }
    export default Footer;