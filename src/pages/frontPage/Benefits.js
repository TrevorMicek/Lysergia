import React from 'react';

import info from '../../data/frontPage/benefitData';
import styles from './benefit.module.css'
import CreateComponent from '../../components/commonComps/createComponent';

/*
 <img src={props.icon} alt={props.alt} width="50px" height="50px" />
*/
const Benefit = (props) => (
<div className={styles.benefitWrapper}>
         
          <h3 className={styles.FirstTitle}>
            {props.title}
          </h3>
          <p className={styles.FirstText}>
          {props.text}
          </p>
        </div>
)
const BenefitSection = () => (
    <section className={styles.secondSection}>
      <CreateComponent component={Benefit} data={info} />
    </section>
)
export default BenefitSection