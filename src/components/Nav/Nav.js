import classes from './Nav.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const nav = (props) => (
    <div className={classes.Nav}>
        <h3>COVID-19 Tracker</h3>
        <ul className={classes.links}>
            <li><Link className={classes.link} to='/'>Home</Link></li>
            {/* <li><Link className={classes.link} to='/about'>About</Link></li> */}
        </ul>
    </div>
)

export default nav 