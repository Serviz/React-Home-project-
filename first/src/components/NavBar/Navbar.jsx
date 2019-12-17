import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.messages}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                    Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings">Settings</NavLink>
            </div>
        </div>
    </nav>


}

export default Navbar