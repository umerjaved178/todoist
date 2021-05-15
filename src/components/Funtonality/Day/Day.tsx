import React from 'react'
import * as FontAwesome from 'react-icons/bs';
import { BiCalendarAlt } from 'react-icons/bi';
import { RiCalendarTodoFill } from 'react-icons/ri';

interface Props {
    day: string,
    icon: any,
}

function Day(props: Props) {
    const {day} = props
    const TagName = props.icon;
    return (
        <div>
            <p>{day}</p>
        </div>
    )
}

export default Day
