import classes from './DataCard.module.css'
import React from 'react'

import CountUp from 'react-countup'


const dataCard = (props) => (
    <div className={classes.DataCard}>
        <p className={classes.name}>{props.name}</p>
        <p><CountUp separator=',' end={props.number} /></p>
    </div>
)

export default dataCard