import React from 'react'
import classes from './Toolbar.module.scss'
import { IconContext } from "react-icons";
import Logo from './Logo/Logo';
import ToolbarButtons from './ToolbarButtons/ToolbarButtons';

function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <div className={classes.ToolbarContent}>
                    <Logo />
                    <ToolbarButtons />
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Toolbar
