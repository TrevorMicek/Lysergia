import React from 'react';


import secondStyles from './secondaryHeader.module.css';
import firstStyles from '../../styles/FrontPage/headerStyles.module.css';
const lysergiaIcon = require('../../images/lysergiaGraphic.jpg')

const Header = (props) => {

  const firstTitle = 'Lysergia Art Collective';
  const HomeHeader = () => (
    <section className={firstStyles.headerPictureWrapper}>
      <img src={lysergiaIcon} width="300" height="250" className={firstStyles.graphic} />
    </section>
  )
  const SecondaryHeader = () => (
    <section className={secondStyles.headerPictureWrapper}> 
   <div className={secondStyles.headerBorder}>
   <h1 className={secondStyles.headerTitle}>
   {props.title}
   </h1>
   
   </div>
   </section>
  )
return (
  <>
 {props.title === firstTitle ? <HomeHeader /> : <SecondaryHeader />}
 </>
)
}
export default Header;