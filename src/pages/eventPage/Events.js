import React from 'react';
import Event from './TopBenefits'
import styles from '../../styles/EventPage/eventPage.module.css'
const Events = (props) => {

    return (
        <div className={styles.eventWrapper}>
            <div className={styles.years}>
                <button className={props.page === '2019' ? styles.buttonActive : styles.button} onClick={() => props.changeYear('2019')} disabled={props.page === '2019'}>2019</button>
                <button className={props.page === '2020' ? styles.buttonActive :styles.button} onClick={() => props.changeYear('2020')} disabled={props.page === '2020'}>2020</button>
                <button className={props.page === '2021' ? styles.buttonActive :styles.button} onClick={() => props.changeYear('2021')} disabled={props.page === '2021'}>2021</button>
            </div>
            <h2>Event List from {props.year}</h2>
           <table>
               <thead>
               <tr>
                <th></th>
             
                <th>DATE</th>
                <th>ARTISTS</th>
                <th>VENUE</th>
                <th>CITY</th>
                <th></th>
               </tr>
               </thead>
               <tbody>
               <tr>
               
               <td>img</td>
                   <td>{props.dates.one}</td>
                   <td>{props.artists.one}</td>
                   <td>Venue</td>
                   <td>City</td>
                   <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr>
            
                <td>img</td>
                    <td>{props.dates.two}</td>
                   <td>{props.artists.two}</td>
                   <td>Venue</td>
                   <td>City</td>
                   <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr>
               
                <td>img</td>
                    <td>{props.dates.three}</td>
                   <td>{props.artists.three}</td>
                   <td>Venue</td>
                   <td>City</td>
                   <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr>
            
                <td>img</td>
                    <td>{props.dates.four}</td>
                   <td>{props.artists.four}</td>
                   <td>Venue</td>
                   <td>City</td>
                   <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr>
               
                <td>img</td>
                    <td>{props.dates.five}</td>
                   <td>{props.artists.five}</td>
                   <td>Venue</td>
                   <td>City</td>
                   <td></td>
                </tr>
                </tbody>
           </table>

        </div>
    )
}
export default Events;