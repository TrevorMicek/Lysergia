import React from 'react';

const userIcon = require('../../images/user.svg')
const optimizeIcon = require('../../images/optimization.svg')
const responsiveIcon = require('../../images/responsive-design.svg')
const subscriptionIcon = require('../../images/subscription.svg')

const subscriptionText = () => {
    return (
      <>
    <span>NO SETUP FEE</span>, <span>$195</span> per month for a 5 page website + maintenance. Affordable packages with no hidden fees. Cancel anytime.
    </>
    )
  }

const data = {
    one: {
        title: 'Events',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        icon: subscriptionIcon,
        alt: 'blue envelope icon'
    },
    two: {
        title: 'Roster',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        icon: optimizeIcon,
        alt: 'bar graph showing increases'
    },
    three: {
        title: 'Blog',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: responsiveIcon,
        alt: 'blue desktop and phone icon'
    },
    four: {
        title: 'Merch',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        icon: userIcon,
        alt: 'user in front of desktop with a colorful layout'
    }, 
    five: {
        title: 'About',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: userIcon,
        alt: 'user in front of desktop with a colorful layout'
    }
}
export default data;