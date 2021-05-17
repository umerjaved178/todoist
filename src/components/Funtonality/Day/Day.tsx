import React from 'react'
import * as FontAwesome from 'react-icons/bs';
import { BiCalendarAlt } from 'react-icons/bi';
import { RiCalendarTodoFill } from 'react-icons/ri';
import classes from './Day.module.scss'

interface Props {
    day: string,
    icon: any,
    clickHandler: Function
}

function Day(props: Props) {
    const {day, clickHandler} = props

    return (
        <div className={classes.Day} tabIndex={1} onClick={() => clickHandler(day)}>
            <p style={{padding: ".5rem 0rem", margin: "0 10px"}}>{day}</p>
        </div>
    )
}

export default Day
