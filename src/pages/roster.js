import React from 'react';

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Profiles from './rosterPage/Profile'
const Roster = () => {

    return (
        <Layout title="Roster">
        <SEO title="Roster" />
        <Profiles />
      </Layout>
       
    )
}
export default Roster