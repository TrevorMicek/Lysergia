import React, {useState} from 'react';

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import info from '../data/events/eventData'
import Events from './eventPage/Events'
import styles from '../styles/EventPage/eventPage.module.css'
const EventPage = () => {
    const [eventPage, setEventPage] = useState('2021')

    const switchEventPage = () => {
        switch(eventPage) {
            case '2020':
                return <Events year='2020' {...info.twenty} page={eventPage} changeYear={setEventPage} /> 
            case '2021':
                return <Events year='2021' {...info.twentyOne} page={eventPage} changeYear={setEventPage} /> 
            default:
                return <Events year='2019' {...info.nineteen} page={eventPage} changeYear={setEventPage} />
        }
    }
    return (
        <Layout title="Events">
        <SEO title="Events" />
        {switchEventPage()}
        <div className={styles.upcoming}>
            <h3>Upcoming Events...</h3>
        </div>
      </Layout>
       
    )
}
export default EventPage;