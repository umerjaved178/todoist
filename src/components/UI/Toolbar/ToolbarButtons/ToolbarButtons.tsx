import React from 'react'
import classes from './ToolbarButtons.module.scss'
import { FaPizzaSlice } from "react-icons/fa";
import { HiPlusSm } from 'react-icons/hi';

function ToolbarButtons() {
    return (
        <div className={classes.ToolbarButtons}>
            <HiPlusSm size={35} />   
            <div className={classes.Margin}>
                <FaPizzaSlice size={22} /> 
            </div>
        </div>
    )
}

export default ToolbarButtons
