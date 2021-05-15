import React, { useState } from 'react'
import Day from '../components/Funtonality/Day/Day'
import Accordian from '../components/Funtonality/Project/Accordian'
import Project from '../components/Funtonality/Project/Project'
import ToDo from '../components/Funtonality/toDo/ToDo'
import classes from './HomePage.module.scss'

function HomePage() {
    const [toDos, setToDos] = useState(
        [
            {
                toDo: "cooking and planning",
                project: "none",
                dueDay: "none"
            },
            {
                toDo: "Sheesha",
                project: "none",
                dueDay: "none"
            },
            {
                toDo: "Gardening",
                project: "none",
                dueDay: "none"
            },
            {
                toDo: "Sleeping",
                project: "none",
                dueDay: "today"
            },
            {
                toDo: "cooking & future planning",
                project: "future",
                dueDay: "nextWeek"
            },
        ]
    )
    const [days, setDays] = useState([
        {
            day: "Inbox",
            icon: "BsInboxFill"
        }, 
        {
            day: "Today",
            icon: "BiCalendarAlt"
        }, 
        {
            day: "Next 7 days",
            icon: "RiCalendarTodoFill"
        }, 
    ])
    const [projects, setProjects] = useState(["OFFICE", "DAILY", "FUTURE", "WORDS", "MUSIC"])
    
    return (
        <div className={classes.HomePageLayout}>
            <div>
                {/* Date Elements */}
                {React.Children.toArray(days.map(x => <Day day={x.day} icon={x.icon} />))}     

                {/* Accordian  */}
                {/* <h4>Projects</h4> */}
                <Accordian projects={projects}/>
                {/* {React.Children.toArray(projects.map(x => <Project project={x} />))}     */}
            </div>

            <div className={classes.LayoutToDos}>
                <p style={{fontSize: "1.5rem"}}>Inbox</p>
                {React.Children.toArray(toDos.map(x => <ToDo toDo={x.toDo} />))}
            </div>
        </div>
    )
}

export default HomePage
